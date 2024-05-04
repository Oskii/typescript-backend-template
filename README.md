# TypeScript Backend Project
## Description
Finally a complete, scalable and maintainable typescript backend template (that's actually good). 

- Uses Typescript
- Includes full Postgres database setup
- Prettier for code formatting
- Vitest for testing
- Good and scalable folder structure
- Environment variables
- Serves static HTML, CSS, JS
- Uses fast bootstrap for ui

## Project Structure

```bash
typescript-backend/

├── public
│   ├── css
│   ├── html
│   └── js
├── src
│   ├── app.ts
│   ├── controllers
│   ├── db
│   ├── index.ts
│   ├── routes
│   ├── services
│   └── utils
├── test
│   └── index.test.ts
├── package-lock.json
├── package.json
├── README.md
├── setup_postgresql.sh
├── tsconfig.json
└── vitest.config.ts
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (^v20)
- npm (v6 or higher)

## Installation

### Clone the Repository 

```bash
git clone <repository-url>
```

### Navigate to the project directory:

```bash
cd typescript-backend
```

### Install Dependencies

```bash
npm install
```

### Install Database

```bash
chmod +x setup_postgresql.sh
./setup_postgresql.sh
```

## Usage

### Development

To start the development server:

```bash 
npm run dev
```

### Build 

To compile the TypeScript code into JavaScript:

```bash
npm run build
```

### Production

To start the server after building:

```bash
npm start
```

## Formatting

To format the codebase using Prettier:

```bash 
npm run format
```