export type StackItem = {
  id: string;
  label: string;
  children?: StackItem[];
};

export const stackTree: StackItem = {
  id: "full_stack",
  label: "Full Stack",
  children: [
    {
      id: "full_stack__documentation",
      label: "Documentation",
      children: [
        {
          id: "full_stack__documentation__requirements",
          label: "Requirements",
          children: [
            {
              id: "full_stack__documentation__requirements__software_requirements_specification_srs",
              label: "Software Requirements Specification (SRS)",
            },
          ],
        },
        {
          id: "full_stack__documentation__architecture_design",
          label: "Architecture & Design",
          children: [
            {
              id: "full_stack__documentation__architecture_design__software_design_document_sdd",
              label: "Software Design Document (SDD)",
            },
          ],
        },
      ],
    },
    {
      id: "full_stack__frontend",
      label: "Frontend",
      children: [
        {
          id: "full_stack__frontend__languages",
          label: "Languages",
          children: [
            { id: "full_stack__frontend__languages__javascript", label: "JavaScript" },
            { id: "full_stack__frontend__languages__typescript", label: "TypeScript" },
          ],
        },
        {
          id: "full_stack__frontend__frameworks_libraries",
          label: "Frameworks & Libraries",
          children: [
            { id: "full_stack__frontend__frameworks_libraries__react", label: "React" },
            { id: "full_stack__frontend__frameworks_libraries__next_js", label: "Next.js" },
            { id: "full_stack__frontend__frameworks_libraries__react_native", label: "React Native" },
          ],
        },
        {
          id: "full_stack__frontend__state_management",
          label: "State Management",
          children: [
            { id: "full_stack__frontend__state_management__redux", label: "Redux" },
            { id: "full_stack__frontend__state_management__zustand", label: "Zustand" },
          ],
        },
        {
          id: "full_stack__frontend__styling_ui",
          label: "Styling & UI",
          children: [
            { id: "full_stack__frontend__styling_ui__tailwind_css", label: "Tailwind CSS" },
            { id: "full_stack__frontend__styling_ui__material_ui", label: "Material UI" },
          ],
        },
        {
          id: "full_stack__frontend__routing_data_fetching",
          label: "Routing & Data Fetching",
          children: [
            { id: "full_stack__frontend__routing_data_fetching__react_router", label: "React Router" },
            { id: "full_stack__frontend__routing_data_fetching__axios", label: "Axios" },
            { id: "full_stack__frontend__routing_data_fetching__react_query", label: "React Query" },
          ],
        },
        {
          id: "full_stack__frontend__authentication",
          label: "Authentication",
          children: [
            { id: "full_stack__frontend__authentication__jwt", label: "JWT" },
            { id: "full_stack__frontend__authentication__oauth_2_0", label: "OAuth 2.0" },
          ],
        },
        {
          id: "full_stack__frontend__build_tooling",
          label: "Build Tooling",
          children: [
            { id: "full_stack__frontend__build_tooling__webpack", label: "Webpack" },
            { id: "full_stack__frontend__build_tooling__parcel", label: "Parcel" },
          ],
        },
      ],
    },
    {
      id: "full_stack__backend",
      label: "Backend",
      children: [
        {
          id: "full_stack__backend__languages",
          label: "Languages",
          children: [
            { id: "full_stack__backend__languages__javascript", label: "JavaScript" },
            { id: "full_stack__backend__languages__typescript", label: "TypeScript" },
            { id: "full_stack__backend__languages__python", label: "Python" },
          ],
        },
        {
          id: "full_stack__backend__frameworks",
          label: "Frameworks",
          children: [
            { id: "full_stack__backend__frameworks__next_js_api_routes", label: "Next.js API Routes" },
            { id: "full_stack__backend__frameworks__express_js", label: "Express.js" },
            { id: "full_stack__backend__frameworks__django", label: "Django" },
          ],
        },
        {
          id: "full_stack__backend__api_design_communication",
          label: "API Design & Communication",
          children: [
            { id: "full_stack__backend__api_design_communication__rest", label: "REST" },
            { id: "full_stack__backend__api_design_communication__graphql", label: "GraphQL" },
            { id: "full_stack__backend__api_design_communication__websocket", label: "WebSocket" },
          ],
        },
        {
          id: "full_stack__backend__authentication_authorization",
          label: "Authentication & Authorization",
          children: [
            { id: "full_stack__backend__authentication_authorization__jwt", label: "JWT" },
            { id: "full_stack__backend__authentication_authorization__oauth_2_0", label: "OAuth 2.0" },
          ],
        },
        {
          id: "full_stack__backend__validation_data_integrity",
          label: "Validation & Data Integrity",
          children: [
            { id: "full_stack__backend__validation_data_integrity__zod", label: "Zod" },
            { id: "full_stack__backend__validation_data_integrity__joi", label: "Joi" },
          ],
        },
        {
          id: "full_stack__backend__security_middleware",
          label: "Security & Middleware",
          children: [
            { id: "full_stack__backend__security_middleware__helmet", label: "Helmet" },
            { id: "full_stack__backend__security_middleware__cors", label: "CORS" },
            { id: "full_stack__backend__security_middleware__bcrypt", label: "bcrypt" },
            { id: "full_stack__backend__security_middleware__express_rate_limit", label: "express-rate-limit" },
          ],
        },
        {
          id: "full_stack__backend__background_processing",
          label: "Background Processing",
          children: [{ id: "full_stack__backend__background_processing__celery", label: "Celery" }],
        },
        {
          id: "full_stack__backend__caching",
          label: "Caching",
          children: [{ id: "full_stack__backend__caching__redis", label: "Redis" }],
        },
        {
          id: "full_stack__backend__runtime_servers",
          label: "Runtime & Servers",
          children: [
            { id: "full_stack__backend__runtime_servers__node_js", label: "Node.js" },
            { id: "full_stack__backend__runtime_servers__nginx", label: "NGINX" },
            { id: "full_stack__backend__runtime_servers__smtp", label: "SMTP" },
          ],
        },
      ],
    },
    {
      id: "full_stack__databases",
      label: "Databases",
      children: [
        {
          id: "full_stack__databases__relational_databases",
          label: "Relational Databases",
          children: [
            { id: "full_stack__databases__relational_databases__postgresql", label: "PostgreSQL" },
            { id: "full_stack__databases__relational_databases__mysql", label: "MySQL" },
            { id: "full_stack__databases__relational_databases__sqlite", label: "SQLite" },
          ],
        },
        {
          id: "full_stack__databases__orm_query_builders",
          label: "ORM & Query Builders",
          children: [
            { id: "full_stack__databases__orm_query_builders__prisma", label: "Prisma" },
            { id: "full_stack__databases__orm_query_builders__django_orm", label: "Django ORM" },
          ],
        },
      ],
    },
    {
      id: "full_stack__testing",
      label: "Testing",
      children: [
        {
          id: "full_stack__testing__unit_integration_testing",
          label: "Unit & Integration Testing",
          children: [{ id: "full_stack__testing__unit_integration_testing__jest", label: "Jest" }],
        },
        {
          id: "full_stack__testing__end_to_end_browser_testing",
          label: "End-to-End & Browser Testing",
          children: [
            { id: "full_stack__testing__end_to_end_browser_testing__selenium_webdriver", label: "Selenium WebDriver" },
          ],
        },
        {
          id: "full_stack__testing__api_testing",
          label: "API Testing",
          children: [{ id: "full_stack__testing__api_testing__postman", label: "Postman" }],
        },
        {
          id: "full_stack__testing__performance_load_testing",
          label: "Performance & Load Testing",
          children: [
            { id: "full_stack__testing__performance_load_testing__locust", label: "Locust" },
            { id: "full_stack__testing__performance_load_testing__silk", label: "Silk" },
          ],
        },
      ],
    },
    {
      id: "full_stack__delivery_operations",
      label: "Delivery & Operations",
      children: [
        {
          id: "full_stack__delivery_operations__containers_environment",
          label: "Containers & Environment",
          children: [
            { id: "full_stack__delivery_operations__containers_environment__docker", label: "Docker" },
            { id: "full_stack__delivery_operations__containers_environment__linux", label: "Linux" },
          ],
        },
        {
          id: "full_stack__delivery_operations__hosting_cloud",
          label: "Hosting & Cloud",
          children: [
            { id: "full_stack__delivery_operations__hosting_cloud__aws", label: "AWS" },
            { id: "full_stack__delivery_operations__hosting_cloud__vercel", label: "Vercel" },
            { id: "full_stack__delivery_operations__hosting_cloud__netlify", label: "Netlify" },
            { id: "full_stack__delivery_operations__hosting_cloud__firebase", label: "Firebase" },
          ],
        },
        {
          id: "full_stack__delivery_operations__ci_cd",
          label: "CI/CD",
          children: [
            { id: "full_stack__delivery_operations__ci_cd__github_actions", label: "GitHub Actions" },
            { id: "full_stack__delivery_operations__ci_cd__kubernetes", label: "Kubernetes" },
          ],
        },
        {
          id: "full_stack__delivery_operations__web_infrastructure",
          label: "Web Infrastructure",
          children: [{ id: "full_stack__delivery_operations__web_infrastructure__nginx", label: "NGINX" }],
        },
        {
          id: "full_stack__delivery_operations__observability",
          label: "Observability",
          children: [
            { id: "full_stack__delivery_operations__observability__sentry", label: "Sentry" },
            { id: "full_stack__delivery_operations__observability__winston", label: "Winston" },
          ],
        },
      ],
    },
    {
      id: "full_stack__engineering_tooling",
      label: "Engineering Tooling",
      children: [
        {
          id: "full_stack__engineering_tooling__version_control",
          label: "Version Control",
          children: [
            { id: "full_stack__engineering_tooling__version_control__git", label: "Git" },
            { id: "full_stack__engineering_tooling__version_control__github", label: "GitHub" },
          ],
        },
        {
          id: "full_stack__engineering_tooling__code_quality",
          label: "Code Quality",
          children: [
            { id: "full_stack__engineering_tooling__code_quality__eslint", label: "ESLint" },
            { id: "full_stack__engineering_tooling__code_quality__prettier", label: "Prettier" },
          ],
        },
        {
          id: "full_stack__engineering_tooling__development_environment",
          label: "Development Environment",
          children: [{ id: "full_stack__engineering_tooling__development_environment__vs_code", label: "VS Code" }],
        },
      ],
    },
  ],
} as const;
