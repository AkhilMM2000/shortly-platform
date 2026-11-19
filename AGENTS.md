# Project instructions for Codex

## Architecture and implementation

- Use TypeScript throughout the project.
- Follow the Modular Monolith architecture until a microservices transition is explicitly requested.
- Keep business modules independent and loosely coupled, with clear ownership and boundaries.
- Use controllers, services, repositories, and validators where they improve separation of concerns.
- Use Prisma ORM with PostgreSQL for database access.
- Use Zod to validate request inputs.
- Apply SOLID principles and clean-code practices without adding unnecessary abstractions.
- Centralize error handling and return consistent, safe errors to clients.
- Write meaningful tests for important business logic.

## Security and maintenance

- Never expose secrets or commit `.env` files.
- Avoid unnecessary dependencies and overengineering.
- Do not introduce microservices unless explicitly requested.

## Working in this repository

- Inspect the existing code and understand its structure before making changes.
- Avoid modifying unrelated files.
- Explain important architectural decisions and implementation changes in your handoff.
