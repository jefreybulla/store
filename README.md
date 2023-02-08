## Important
I am getting an error importing local libraries. E.g.: `import { Banner } from 'shared/ui'`

I suspect the issue relates to webpack imports/exports: https://webpack.js.org/guides/package-exports/

Note: I chose webpack as the bundler when creating the local library via Nx generators

Using vite instead of webpack works https://github.com/nrwl/nx-recipes/tree/main/standalone-react-app

Problem could be using shared/ui instead of ui ?
# Store
✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Install nx tools
```
npm install -g nx
```
# Install project
```
npm install
```
## Build project
```
nx build
```
## Development server

Run `nx serve store` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
