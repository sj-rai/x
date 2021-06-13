#[Project Name TBD]

Repository for CFC 2021 Project

### Prerequisites

Make sure Node.js is installed.

[You can get it here](https://nodejs.org)

Make sure yarn is installed and is accessible from command line.

[You can get it here](https://yarnpkg.com/lang/en/docs/install/)

## Project structure

This Project has a monorepo setup for frontend-app and backend-app

Monorepo setup using yarn workspaces.

```
+-- node_modules - (shared dependencies for both the apps)
+-- packages
|   +-- frontend-app
|   +-- backend-app
+-- package.json
+-- yarn.lock
```

###Local development Setup

- Run `yarn` at the root of the project to install dependencies of both frontend-app and backend-app.

  This will create a symlink of node_modules in the respective package, pointing to node_modules at the root.

  >Note: Use yarn, not npm to install depndencies, as npm would install the dependencies in the respective packages.

- If working on the frontend,
   
  `cd packages/frontend-app/`

  `yarn start`
  
  This will start the frontend application in <localhost:3000>


- For Backend,
    
  `cd packages/backend-app/`

  `yarn run prestart` or `yarn run build`

  `yarn start`

  This will start express server on <localhost:3001>
