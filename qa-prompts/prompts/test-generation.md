# Test Generation Prompts

## User Story to Test Cases

### Basic Test Case Generation
```
Generate test cases for the following user story:

"As a [user type], I want to [action] so that [benefit]"

Please include:
- Happy path scenarios
- Edge cases and boundary conditions
- Negative test cases
- Security considerations
- Accessibility requirements

Format the output as a structured test plan with:
- Test Case ID
- Test Description
- Preconditions
- Test Steps
- Expected Results
- Priority Level
```

### Complex Feature Testing
```
Create a detailed test plan for [feature name] with the following requirements:

[Feature description and acceptance criteria]

Testing scope should cover:
1. Functional testing (positive and negative scenarios)
2. Integration testing with [related systems]
3. Performance testing considerations
4. Security testing requirements
5. Usability testing scenarios
6. Cross-browser compatibility
7. Mobile responsiveness

For each test category, provide:
- Test objectives
- Test scenarios
- Test data requirements
- Expected outcomes
- Risk assessment
```

## API Testing

### REST API Test Cases
```
Generate test cases for the following REST API endpoint:

Endpoint: [HTTP Method] /api/[endpoint]
Description: [API description]
Parameters: [list parameters]
Response: [expected response format]

Include test cases for:
- Valid requests with different parameter combinations
- Invalid input validation
- Authentication and authorization
- Error handling (4xx, 5xx responses)
- Edge cases and boundary values
- Performance considerations
- Rate limiting scenarios

Format as a test matrix with input data and expected outcomes.
```

### GraphQL Testing
```
Create test scenarios for the following GraphQL query/mutation:

[GraphQL operation]

Test coverage should include:
- Valid query execution
- Invalid field requests
- Nested object queries
- Error handling
- Performance with large datasets
- Security considerations (query depth, complexity)
- Caching behavior

Provide both positive and negative test cases with expected responses.
```

## Database Testing

### Data Validation Tests
```
Design test cases for database operations on [table/entity]:

[Table structure and constraints]

Test scenarios should cover:
- CRUD operations (Create, Read, Update, Delete)
- Data integrity constraints
- Foreign key relationships
- Index performance
- Transaction handling
- Data migration scenarios
- Backup and recovery testing

Include SQL queries for test data setup and validation.
```

## UI/UX Testing

### User Interface Testing
```
Create test cases for the following UI component:

Component: [Component name]
Description: [Component functionality]
User interactions: [List of user actions]

Test coverage should include:
- Visual appearance and layout
- User interaction flows
- Responsive design (mobile, tablet, desktop)
- Accessibility compliance (WCAG 2.1)
- Cross-browser compatibility
- Performance and loading times
- Error states and validation messages

Include both manual and automated test approaches.
```

## Integration Testing

### System Integration Tests
```
Design integration test scenarios for the following system integration:

System A: [Description]
System B: [Description]
Integration point: [How they connect]
Data flow: [Data exchange process]

Test scenarios should cover:
- End-to-end data flow
- Error handling between systems
- Performance under load
- Data transformation accuracy
- Security and authentication
- Recovery from failures
- Monitoring and logging

Include test data requirements and validation criteria.
```

## Performance Testing

### Load Testing Scenarios
```
Create performance test scenarios for [application/feature]:

Application: [Description]
Expected load: [User count, transactions per second]
Performance requirements: [Response time, throughput goals]

Test scenarios should include:
- Baseline performance measurement
- Gradual load increase testing
- Peak load testing
- Stress testing beyond normal capacity
- Endurance testing (sustained load)
- Spike testing (sudden load increases)
- Volume testing (large data sets)

For each scenario, specify:
- Test objectives
- Load parameters
- Success criteria
- Monitoring requirements
- Expected outcomes
```

## Security Testing

### Security Test Cases
```
Generate security test cases for [application/feature]:

Application type: [Web app, API, mobile app, etc.]
Security requirements: [Authentication, authorization, data protection]

Test scenarios should cover:
- Authentication bypass attempts
- Authorization testing (privilege escalation)
- Input validation and injection attacks
- Session management security
- Data encryption and protection
- API security (rate limiting, CORS, etc.)
- File upload security
- Cross-site scripting (XSS) prevention
- SQL injection prevention
- Cross-site request forgery (CSRF) protection

Include both automated and manual testing approaches.
```

## Accessibility Testing

### WCAG Compliance Testing
```
Create accessibility test cases for [web page/application]:

Page/App: [Description]
Target compliance: WCAG 2.1 [AA/AAA level]

Test scenarios should cover:
- Keyboard navigation
- Screen reader compatibility
- Color contrast requirements
- Text alternatives for images
- Form labels and error messages
- Focus management
- ARIA attributes usage
- Video/audio accessibility
- Mobile accessibility

Include both automated tool testing and manual testing procedures.
```

## Mobile Testing

### Mobile App Testing
```
Design test cases for the following mobile application:

App: [App name and description]
Platforms: [iOS, Android, or both]
Device types: [Phone, tablet, etc.]

Test scenarios should include:
- Installation and uninstallation
- App launch and navigation
- Touch interactions and gestures
- Orientation changes
- Network connectivity scenarios
- Background/foreground transitions
- Push notifications
- Device-specific features (camera, GPS, etc.)
- Performance on different devices
- App store compliance

Include test data and device requirements.
```

## Test Data Generation

### Test Data Creation
```
Generate realistic test data for the following scenario:

Entity: [Data structure/table]
Data requirements: [Specific data needs]
Constraints: [Business rules and validations]

Provide test data that includes:
- Valid data for positive testing
- Invalid data for negative testing
- Edge case data (boundary values)
- International data (different languages, formats)
- Large volume data for performance testing
- Sensitive data handling (PII, financial data)

Format the data in [CSV, JSON, SQL, etc.] and include data setup instructions.
```
