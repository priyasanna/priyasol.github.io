/**
 * Core LLM Testing Interface
 */

export class LLMTester {
  constructor(config) {
    this.config = config;
    this.client = null;
    this.initializeClient();
  }

  async initializeClient() {
    if (this.config.openaiApiKey) {
      const { OpenAI } = await import('openai');
      this.client = new OpenAI({ 
        apiKey: this.config.openaiApiKey 
      });
      this.provider = 'openai';
    } else if (this.config.anthropicApiKey) {
      const { Anthropic } = await import('@anthropic-ai/sdk');
      this.client = new Anthropic({ 
        apiKey: this.config.anthropicApiKey 
      });
      this.provider = 'anthropic';
    }
  }

  async generateResponse(prompt, options = {}) {
    if (!this.client) {
      await this.initializeClient();
    }

    const config = { ...this.config, ...options };

    try {
      if (this.provider === 'openai') {
        const response = await this.client.chat.completions.create({
          model: config.model,
          messages: [{ role: 'user', content: prompt }],
          max_tokens: config.maxTokens,
          temperature: config.temperature
        });
        return {
          content: response.choices[0].message.content,
          provider: 'openai',
          model: config.model,
          usage: response.usage
        };
      } else if (this.provider === 'anthropic') {
        const response = await this.client.messages.create({
          model: config.model.includes('claude') ? config.model : 'claude-3-sonnet-20240229',
          max_tokens: config.maxTokens,
          messages: [{ role: 'user', content: prompt }]
        });
        return {
          content: response.content[0].text,
          provider: 'anthropic',
          model: response.model,
          usage: response.usage
        };
      }
    } catch (error) {
      return {
        error: error.message,
        provider: this.provider,
        prompt: prompt.substring(0, 100) + '...'
      };
    }
  }

  async batchTest(prompts, options = {}) {
    const results = [];
    const batchSize = options.batchSize || 5;
    
    for (let i = 0; i < prompts.length; i += batchSize) {
      const batch = prompts.slice(i, i + batchSize);
      const batchPromises = batch.map(prompt => 
        this.generateResponse(prompt, options)
      );
      
      const batchResults = await Promise.allSettled(batchPromises);
      results.push(...batchResults.map(result => 
        result.status === 'fulfilled' ? result.value : { error: result.reason }
      ));
      
      // Rate limiting delay
      if (i + batchSize < prompts.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    return results;
  }
}
