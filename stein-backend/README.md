# Stein Backend

This is the backend for the Stein project, built with Node.js, Express 5, and TypeScript.

## Prerequisites

- Node.js (v20+ recommended)
- npm

## Installation

Install the project dependencies:

```bash
npm install
```

## Available Scripts

### Development

To start the server in development mode with automatic restart on file changes (powered by `tsx`):

```bash
npm run dev
```

### Build

To compile the TypeScript code into JavaScript in the `dist` folder:

```bash
npm run build
```

### Production

To run the compiled output in a production-like manner:

```bash
npm start
```

## Project Structure

- `src/app.ts`: Main Express application configuration.
- `src/server.ts`: Server entry point that starts listening for requests.
- `src/features/`: Domain-specific or feature modules.
- `src/shared/`: Shared utilities, types, and configurations.

## Core Technologies

- **[Express v5](https://expressjs.com/)**: Web framework for Node.js.
- **[TypeScript](https://www.typescriptlang.org/)**: Static typing for JavaScript.
- **[Pino](https://getpino.io/)**: Fast and low-overhead JSON logger.
- **[tsx](https://tsx.is/)**: Execution environment for TypeScript.
