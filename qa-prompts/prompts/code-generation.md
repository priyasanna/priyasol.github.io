# Code Generation Prompts

## Test Automation Framework Setup

### Playwright Framework Setup
```
Create a Playwright test automation framework with the following requirements:

Technology: Playwright with TypeScript
Project structure: Page Object Model
Testing scope: [Web application, API testing, etc.]
CI/CD: [GitHub Actions, Jenkins, etc.]

Please provide:
1. Project structure and file organization
2. Configuration files (playwright.config.ts, package.json)
3. Base page class with common methods
4. Page object classes for [specific pages]
5. Test utilities and helpers
6. Test data management
7. Reporting configuration
8. CI/CD pipeline setup
9. Best practices and coding standards
10. Example test cases

Include proper error handling, logging, and maintainability considerations.
```

### Selenium Framework Setup
```
Set up a Selenium WebDriver test automation framework with:

Language: [Java, Python, C#, JavaScript]
Architecture: [Page Object Model, Screenplay Pattern, etc.]
Browser support: [Chrome, Firefox, Safari, Edge]
Test runner: [TestNG, JUnit, pytest, etc.]

Provide:
1. Project structure and dependencies
2. Driver management and browser configuration
3. Page object base class and implementations
4. Test utilities and helper methods
5. Data-driven testing setup
6. Parallel execution configuration
7. Reporting and logging setup
8. CI/CD integration
9. Docker containerization (optional)
10. Example test scenarios

Focus on maintainability, scalability, and best practices.
```

### Cypress Framework Setup
```
Create a Cypress test automation framework for:

Application: [Web application description]
Testing scope: [E2E, component, API testing]
Browser support: [Chrome, Firefox, Edge]

Include:
1. Project setup and configuration
2. Custom commands and utilities
3. Page object implementation
4. Test data management
5. Environment configuration
6. Custom plugins and tasks
7. CI/CD pipeline setup
8. Reporting and screenshots
9. Best practices and patterns
10. Example test suites

Ensure the framework is maintainable and follows Cypress best practices.
```

## API Testing Code

### REST API Test Automation
```
Generate API test automation code for the following endpoints:

Base URL: [API base URL]
Endpoints: [List of endpoints to test]
Authentication: [API key, OAuth, JWT, etc.]
Framework: [RestAssured, Postman, Newman, etc.]

Provide:
1. API client setup and configuration
2. Authentication handling
3. Request/response models
4. Test data management
5. Assertion utilities
6. Error handling and retry logic
7. Test execution and reporting
8. Environment-specific configurations
9. Example test cases for each endpoint
10. Performance testing considerations

Include proper error handling and maintainable code structure.
```

### GraphQL Testing
```
Create GraphQL test automation for:

Schema: [GraphQL schema description]
Queries/Mutations: [List of operations to test]
Authentication: [Required auth method]

Generate:
1. GraphQL client setup
2. Query/mutation builders
3. Response validation utilities
4. Test data factories
5. Error handling for GraphQL errors
6. Performance testing for complex queries
7. Schema validation tests
8. Example test scenarios
9. CI/CD integration
10. Documentation and best practices

Focus on type safety and testing coverage.
```

## Mobile Testing Code

### Appium Mobile Testing
```
Create Appium test automation for:

Platform: [iOS, Android, or both]
App type: [Native, Hybrid, Web]
Testing scope: [UI testing, API testing, etc.]

Provide:
1. Appium server setup and configuration
2. Driver initialization and capabilities
3. Page object model for mobile screens
4. Gesture and interaction utilities
5. Test data management
6. Device and emulator configuration
7. Parallel execution setup
8. Reporting and screenshots
9. CI/CD pipeline for mobile testing
10. Example test scenarios

Include platform-specific considerations and best practices.
```

### Detox Testing (React Native)
```
Set up Detox testing for React Native application:

App: [React Native app description]
Platform: [iOS, Android, or both]
Testing scope: [E2E testing, component testing]

Generate:
1. Detox configuration and setup
2. Test utilities and helpers
3. Screen object implementations
4. Test data management
5. Device configuration
6. CI/CD integration
7. Performance testing considerations
8. Example test scenarios
9. Debugging and troubleshooting
10. Best practices and patterns

Ensure compatibility with React Native testing requirements.
```

## Performance Testing Code

### JMeter Test Plans
```
Create JMeter test plans for:

Application: [Web application, API, etc.]
Load requirements: [Concurrent users, transactions per second]
Performance goals: [Response time, throughput targets]

Provide:
1. Thread group configuration
2. HTTP request samplers
3. Data-driven testing setup
4. Assertions and listeners
5. Performance monitoring
6. Test data management
7. Parameterization and variables
8. Reporting and analysis
9. CI/CD integration
10. Example test scenarios

Include realistic load patterns and monitoring.
```

### K6 Performance Testing
```
Generate K6 performance tests for:

Target: [API endpoints, web pages, etc.]
Load pattern: [Load, stress, spike testing]
Metrics: [Response time, error rate, throughput]

Create:
1. K6 test script structure
2. Load configuration and scenarios
3. API request implementations
4. Custom metrics and thresholds
5. Test data management
6. Environment configuration
7. CI/CD integration
8. Reporting and visualization
9. Example test scenarios
10. Best practices and optimization

Focus on realistic load patterns and metrics.
```

## Security Testing Code

### OWASP ZAP Integration
```
Create security testing automation using OWASP ZAP:

Target: [Web application, API endpoints]
Security tests: [OWASP Top 10, custom security checks]
Integration: [CI/CD pipeline, test automation framework]

Provide:
1. ZAP API integration code
2. Security test configuration
3. Vulnerability scanning automation
4. Report generation and parsing
5. False positive handling
6. CI/CD pipeline integration
7. Custom security test development
8. Example security test scenarios
9. Best practices and guidelines
10. Monitoring and alerting

Include security testing coverage and reporting.
```

### Custom Security Tests
```
Generate custom security testing code for:

Application: [Web app, API, mobile app]
Security focus: [Authentication, authorization, data protection]
Framework: [Selenium, Playwright, API testing tools]

Create:
1. Authentication bypass tests
2. Authorization testing utilities
3. Input validation testing
4. Session management tests
5. Data encryption verification
6. API security testing
7. XSS and injection testing
8. CSRF protection testing
9. Security reporting and analysis
10. Example security test scenarios

Focus on security testing coverage and automation.
```

## Test Utilities and Helpers

### Generic Test Utilities
```
Create reusable test utilities for:

Framework: [Testing framework being used]
Language: [Programming language]
Scope: [Web testing, API testing, mobile testing, etc.]

Provide:
1. Common utility functions
2. Data generation helpers
3. Assertion utilities
4. File handling utilities
5. Database utilities
6. Email/SMS testing utilities
7. Screenshot and video utilities
8. Logging and reporting utilities
9. Configuration management
10. Error handling utilities

Focus on reusability, maintainability, and functionality.
```

### Test Data Management
```
Create test data management utilities for:

Data types: [User data, product data, configuration data, etc.]
Storage: [Database, files, APIs, etc.]
Framework: [Testing framework being used]

Generate:
1. Data factory classes
2. Data generation utilities
3. Data cleanup and reset functions
4. Data validation utilities
5. Data import/export tools
6. Test data configuration
7. Data anonymization utilities
8. Database seeding scripts
9. API data management
10. Example usage and best practices

Ensure data consistency, reusability, and easy maintenance.
```

## CI/CD Integration

### GitHub Actions Workflows
```
Create GitHub Actions workflows for:

Project: [Test automation project description]
Testing scope: [Unit tests, integration tests, E2E tests]
Browsers: [Chrome, Firefox, Safari, Edge]
Environments: [Staging, production, etc.]

Provide:
1. Test execution workflows
2. Parallel test execution
3. Test reporting and notifications
4. Artifact management
5. Environment-specific configurations
6. Security and secrets management
7. Performance testing workflows
8. Mobile testing workflows
9. Deployment workflows
10. Monitoring and alerting

Include CI/CD coverage and best practices.
```

### Jenkins Pipeline
```
Create Jenkins pipeline for test automation:

Project: [Test automation project]
Testing framework: [Selenium, Playwright, Cypress, etc.]
Environments: [Multiple test environments]
Reporting: [Test reports, coverage reports, etc.]

Generate:
1. Jenkinsfile configuration
2. Pipeline stages and steps
3. Parallel execution setup
4. Test reporting integration
5. Artifact management
6. Environment management
7. Notification configuration
8. Security and credentials
9. Performance optimization
10. Maintenance and monitoring

Focus on scalability, reliability, and automation.
```
