# API Testing Prompts

## REST API Testing

### Basic API Test Generation
```
Generate API test cases for the following REST endpoint:

Endpoint: [HTTP Method] /api/[endpoint-path]
Description: [Brief description of what the endpoint does]
Authentication: [None, API Key, Bearer Token, OAuth]
Request Body: [JSON schema or description]
Expected Response: [Response format and status codes]

Please create test cases covering:
- Valid requests with different parameter combinations
- Invalid input validation (missing fields, wrong data types)
- Authentication and authorization scenarios
- Error handling (400, 401, 403, 404, 500 responses)
- Edge cases and boundary values
- Performance considerations

Format as test scenarios with:
- Test case name
- HTTP method and endpoint
- Request headers and body
- Expected status code and response
- Validation points
```

### API Contract Testing
```
Create contract tests for API integration between:

Producer API: [API name and description]
Consumer: [Consumer application name]
Contract: [Expected API behavior and data format]

Generate tests for:
- Schema validation (request/response structure)
- Data type validation
- Required field validation
- API version compatibility
- Error response format consistency
- Performance SLA validation

Include both positive and negative test scenarios with mock data.
```

## GraphQL Testing

### GraphQL Query Testing
```
Design test cases for the following GraphQL schema:

[GraphQL schema definition]

Query to test: [Specific query or mutation]

Create test scenarios for:
- Valid query execution with various field combinations
- Invalid field requests and error handling
- Nested object queries and relationships
- Query complexity and depth limitations
- Performance with large datasets
- Authentication and authorization
- Caching behavior validation

Provide test data setup and expected responses.
```

## API Performance Testing

### Load Testing Scenarios
```
Create API load testing scenarios for:

API Endpoint: [Endpoint URL and method]
Expected Load: [Concurrent users, requests per second]
Performance Goals: [Response time, throughput targets]

Design test scenarios for:
- Baseline performance measurement
- Gradual load increase (ramp-up testing)
- Sustained load testing (endurance)
- Peak load testing (stress testing)
- Spike testing (sudden traffic increases)

Include:
- Test data requirements
- Monitoring and metrics collection
- Success criteria and thresholds
- Error handling under load
```

## API Security Testing

### Security Test Cases
```
Generate API security test cases for:

API: [API description and endpoints]
Authentication: [Auth method used]
Authorization: [Permission model]

Create tests for:
- Authentication bypass attempts
- Authorization testing (privilege escalation)
- Input validation and injection attacks
- Rate limiting and throttling
- CORS configuration testing
- Data exposure and information leakage
- API key security and rotation
- SSL/TLS configuration validation

Include both automated and manual testing approaches.
```
