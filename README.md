# TypeScript Backend Project
## Description
This is a scalable TypeScript backend project template for the ai lesson generator backend. This project should be used to serve the content to paying users of the lesson content. It includes a structured folder layout, basic setup for a web server using Express, and is configured to use TypeScript and Prettier.

## Project Structure

```bash
typescript-backend/
├── src/
│   ├── controllers/
│   │   └── index.ts
│   ├── routes/
│   │   └── index.ts
│   ├── services/
│   │   └── index.ts
│   ├── utils/
│   │   └── index.ts
│   ├── index.ts
│   └── app.ts
├── dist/
├── node_modules/
├── .gitignore
├── package.json
├── tsconfig.json
├── .prettierrc
└── .prettierignore
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