# Sample AI Outputs

This folder contains examples of AI-generated outputs using the prompts from this library.

## Test Case Generation Example

**Prompt Used:** Basic Test Case Generation from `prompts/test-generation.md`

**Input:**
```
Generate test cases for the following user story:
"As a user, I want to register with email and password so I can access the application"
```

**AI Output:**
```
Test Plan: User Registration

TC001 - Valid Email and Password Registration
- Preconditions: User is on registration page
- Steps: 
  1. Enter valid email address
  2. Enter password meeting requirements
  3. Click register button
- Expected: User account created, confirmation message shown
- Priority: High

TC002 - Invalid Email Format Validation
- Preconditions: User is on registration page
- Steps:
  1. Enter invalid email format (missing @, .com)
  2. Enter valid password
  3. Click register button
- Expected: Error message "Please enter valid email address"
- Priority: High

TC003 - Password Strength Validation
- Preconditions: User is on registration page
- Steps:
  1. Enter valid email
  2. Enter weak password (less than 8 characters)
  3. Click register button
- Expected: Error message about password requirements
- Priority: High
```

## Code Generation Example

**Prompt Used:** Playwright Framework Setup from `prompts/code-generation.md`

**Input:**
```
Create a Playwright test automation framework with TypeScript for e-commerce testing
```

**AI Output:**
```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ],
});

// pages/BasePage.ts
export class BasePage {
  constructor(protected page: Page) {}
  
  async navigateTo(url: string) {
    await this.page.goto(url);
  }
  
  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector);
  }
}
```

## API Testing Example

**Prompt Used:** REST API Test Cases from `prompts/api-testing.md`

**Input:**
```
Generate test cases for POST /api/users endpoint for user creation
```

**AI Output:**
```
API Test Cases: POST /api/users

Test Case 1: Create User with Valid Data
- Method: POST
- Endpoint: /api/users
- Headers: Content-Type: application/json
- Body: {"name": "John Doe", "email": "john@example.com"}
- Expected: 201 Created, user object in response

Test Case 2: Create User with Missing Required Field
- Method: POST  
- Endpoint: /api/users
- Body: {"name": "John Doe"}
- Expected: 400 Bad Request, error message about missing email

Test Case 3: Create User with Invalid Email Format
- Method: POST
- Endpoint: /api/users  
- Body: {"name": "John Doe", "email": "invalid-email"}
- Expected: 400 Bad Request, email validation error
```

---

*These examples demonstrate the quality and format of outputs you can expect when using the prompts in this library.*
