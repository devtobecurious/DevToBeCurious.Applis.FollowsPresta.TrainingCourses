# GitHub Copilot Instructions

## Project Overview
This is a SaaS application for managing training course sessions from other training centers. The project follows a Clean Architecture pattern with a clear separation between frontend (Angular) and backend (.NET Core).

## Architecture

### Backend (.NET Core)
- **API Layer**: `DevToBeCurious.FollowsCourses.WebApi.UI` - Minimal API with endpoints
- **Application Layer**: `DTBC.FC.Sessions.Application` - Business logic and use cases
- **Infrastructure Layer**: `DTBC.FC.Sessions.Infrastructure` - Data access with Entity Framework Core
- **Models Layer**: `DTBC.FC.Sessions.Models` - Domain entities
- **Core Library**: `DTBC.FC.WebApi.Core` - Shared utilities and extensions
- **Tests**: `DTBC.FC.Sessions.Tests` - Unit tests

### Frontend (Angular)
- **Main Application**: `main-application` - Primary Angular app with SSR
- **Training Sessions Library**: `training-sessions` - Reusable components for session management
- **Core Library**: `dtbc-core` - Shared Angular utilities and components

## Coding Standards

### .NET Backend
- Use minimal APIs with endpoint mapping
- Follow Clean Architecture principles
- Implement Repository pattern for data access
- Use Entity Framework Core with MySQL
- Apply CQRS pattern with separate command/query models
- Prefix all project namespaces with `DTBC.FC`
- Use dependency injection for all services
- Include comprehensive XML documentation for public APIs
- Use record types for DTOs when appropriate

### Entity Framework
- Place migrations in the WebApi.UI project
- Use descriptive migration names with timestamps
- Include seed data in migrations when needed
- Use fluent API configuration in DbContext

### Angular Frontend
- Use standalone components (modern Angular approach)
- Follow Angular style guide conventions
- Use TypeScript strict mode
- Implement Angular Material for UI components
- Use Bootstrap for layout and styling
- Prefix components with `fpa` for main app, `lfpa` for training-sessions library
- Use Angular SSR for better performance
- Implement proper error handling and loading states

### General Guidelines
- Use descriptive variable and method names in French or English consistently
- Implement proper error handling and logging
- Write unit tests for all business logic
- Use async/await patterns for asynchronous operations
- Follow SOLID principles
- Implement proper validation on both client and server sides

## Domain Models

### Core Entities
- **Session**: Represents a training session with dates, location, and status
- **SessionStatus**: Enumeration for session states
- **Location**: Physical or virtual location for sessions
- **TrainingCourse**: Course information
- **CourseCenter**: Training center details

### Key Properties
- All entities should have proper validation
- Use appropriate data types (DateTime for dates, int for IDs)
- Implement proper foreign key relationships
- Include audit fields where appropriate

## Development Patterns

### API Development
- Use endpoint mapping pattern: `app.MapSessionEndpoints()`
- Implement proper HTTP status codes
- Use OpenAPI/Swagger documentation with Scalar UI
- Apply CORS configuration
- Implement proper request/response models

### Data Access
- Use repository pattern for data operations
- Implement unit of work pattern when needed
- Use Entity Framework migrations for schema changes
- Apply proper indexing for performance

### Frontend Development
- Use Angular reactive forms
- Implement proper routing with guards
- Use Angular services for API communication
- Apply lazy loading for feature modules
- Implement proper state management

## File Naming Conventions
- C# files: PascalCase (e.g., `SessionController.cs`)
- TypeScript files: kebab-case (e.g., `session-list.component.ts`)
- CSS files: kebab-case (e.g., `session-form.component.css`)
- Configuration files: lowercase with appropriate extensions

## Testing Strategy
- Unit tests for all business logic
- Integration tests for API endpoints
- Component tests for Angular components
- Use appropriate mocking for external dependencies
- Maintain high test coverage

## Dependencies and Tools
- **Backend**: .NET 9+, Entity Framework Core, MySQL, Scalar (API documentation)
- **Frontend**: Angular 20+, Angular Material, Bootstrap, RxJS
- **Testing**: xUnit (.NET), Vitest (Angular)
- **Version Control**: Git, GitHub
- **Build**: Angular CLI, .NET CLI

## Configuration
- Use appsettings.json for backend configuration
- Environment-specific configurations in separate files
- Use Angular environment files for frontend configuration
- Implement proper secret management for production

When generating code, always consider these guidelines and the existing project structure. Prefer consistency with the current codebase over generic patterns.
