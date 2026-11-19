# Shortly Platform

Shortly Platform is a planned URL shortening SaaS that will help users create, organize, and measure short links.

## Planned features

- User authentication and account management
- URL shortening and link management
- Click analytics and reporting
- Custom domain management
- Payment integration

## Technology stack

- **Frontend:** React, Vite, TypeScript
- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL with Prisma ORM
- **Supporting services:** Redis and RabbitMQ
- **Infrastructure:** Docker and Nginx

## Architecture

The platform will initially use a **Modular Monolith** architecture. Business capabilities will be organized as independent, loosely coupled modules within a single backend application.

As the product and operational requirements mature, the long-term goal is to gradually evolve suitable modules into microservices. This transition will be intentional and incremental rather than introduced prematurely.

## Planned repository structure

```text
shortly-platform/
├── apps/
│   ├── web/                 # React + Vite frontend (planned)
│   └── api/                 # Express backend (planned)
├── docs/
│   ├── requirements/        # Product and functional requirements
│   ├── architecture/        # Architecture decisions and diagrams
│   ├── database/            # Database design documentation
│   └── api/                 # API documentation
├── infrastructure/
│   ├── docker/              # Container configuration
│   ├── nginx/               # Reverse-proxy configuration
│   └── monitoring/          # Monitoring configuration
├── scripts/                 # Development and operational scripts
└── .github/workflows/       # CI/CD workflows
```

## Development setup (planned)

The frontend and backend applications have not been initialized yet, and no dependencies are installed. The following workflow is planned for when the applications are added:

1. Install a supported Node.js version and npm.
2. Install workspace dependencies from the repository root with `npm install`.
3. Start the frontend with `npm run dev:web`.
4. Start the backend with `npm run dev:api`.

Environment-specific values will be introduced through local `.env` files. Copy `.env.example` when such values are defined, and never commit secrets.
