# Clean hexagonal architecture

## Example

src/
├── core/                        # Core business/domain logic
│   ├── services/                # Domain services
│   │   ├── DirectoryService.ts  # Example service
│   │   ├── OtherService.ts      # Another domain service
│   ├── models/                  # Domain models/entities
│   │   ├── DirectoryState.ts    # Example state model
│   │   ├── OtherState.ts        # Another state model
│   ├── ports/                   # Interfaces for application layer
│       ├── IDatabase.ts         # Database interface (port)
│       ├── IService.ts          # Generic service interface
├── application/                 # Application-specific logic
│   ├── factories/               # Factory functions for services
│   │   ├── directoryFactory.ts  # Factory for DirectoryService
│   │   ├── otherFactory.ts      # Factory for OtherService
│   ├── adapters/                # Adapters implementing core interfaces
│       ├── withReactiveState.ts # Adapter for connecting services to reactivity
│       ├── dbAdapter.ts         # Database adapter implementation
├── infrastructure/              # Framework and tech-specific details
│   ├── dbAdapter.ts             # Low-level DB setup
│   ├── ServiceProvider.tsx      # Context provider for SolidJS
│   ├── context/                 # Context definitions
│       ├── ServiceContext.tsx   # Service context for dependency injection
├── ui/                          # Presentation/UI layer
│   ├── components/              # SolidJS components
│   │   ├── DirectoryList.tsx    # Example component
│   │   ├── Filters.tsx          # Example component
│   ├── pages/                   # Page components
│       ├── DirectoryPage.tsx    # Page using DirectoryService
└── index.tsx                    # Application entry point

## core/:

- Contains the business logic.

- Services, domain models, and ports are entirely framework-agnostic, following the principles of clean architecture.

## application/:

- Bridges the core domain and infrastructure/framework.

- Factories create and configure instances of domain services, often using adapters or other utilities.

## infrastructure/:

- Contains framework- or technology-specific code, like database connectors or SolidJS-specific context providers.

- Keeps the core and application layers free of dependencies on external frameworks.

## ui/:

- Handles the presentation layer, including SolidJS components, pages, and layouts.
- This layer interacts with services through context injection, keeping the UI decoupled from the application logic.

## main.tsx:

The entry point for the application.
Initializes the app and mounts it to the DOM.