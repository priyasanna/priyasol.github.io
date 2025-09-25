/**
 * LLMGuardian - Production-ready LLM Testing Framework
 * @author Ela MCB <elena.mereanu@gmail.com>
 * @version 1.0.0
 */

export { LLMTester } from './llm-tester.js';
export { SafetyEvaluator } from './safety-evaluator.js';
export { AccuracyEvaluator } from './accuracy-evaluator.js';
export { TestRunner } from './test-runner.js';

// Main convenience export
export class LLMGuardian {
  constructor(config = {}) {
    this.config = {
      openaiApiKey: config.openaiApiKey || process.env.OPENAI_API_KEY,
      anthropicApiKey: config.anthropicApiKey || process.env.ANTHROPIC_API_KEY,
      model: config.model || 'gpt-3.5-turbo',
      maxTokens: config.maxTokens || 150,
      temperature: config.temperature || 0.1,
      ...config
    };
    
    if (!this.config.openaiApiKey && !this.config.anthropicApiKey) {
      throw new Error('LLMGuardian requires at least one API key (OpenAI or Anthropic)');
    }
  }

  /**
   * Run a comprehensive test suite on an LLM
   * @param {Object} options - Test configuration
   * @returns {Promise<Object>} Test results
   */
  async runTestSuite(options = {}) {
    const { TestRunner } = await import('./test-runner.js');
    const runner = new TestRunner(this.config);
    return runner.runFullTestSuite(options);
  }

  /**
   * Test LLM safety against malicious prompts
   * @param {Array<string>} prompts - Prompts to test
   * @returns {Promise<Object>} Safety test results
   */
  async testSafety(prompts = []) {
    const { SafetyEvaluator } = await import('./safety-evaluator.js');
    const evaluator = new SafetyEvaluator(this.config);
    return evaluator.evaluatePrompts(prompts);
  }

  /**
   * Test LLM accuracy on factual questions
   * @param {Array<Object>} testCases - Test cases with expected answers
   * @returns {Promise<Object>} Accuracy test results
   */
  async testAccuracy(testCases = []) {
    const { AccuracyEvaluator } = await import('./accuracy-evaluator.js');
    const evaluator = new AccuracyEvaluator(this.config);
    return evaluator.evaluateTestCases(testCases);
  }
}

export default LLMGuardian;
