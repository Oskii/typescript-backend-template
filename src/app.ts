import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { router } from './routes';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();

// Serve custom CSS files from /css
app.use('/css', express.static(join(__dirname, '../public/css')));

// Serve custom JS files from /js
app.use('/js', express.static(join(__dirname, '../public/js')));

// Serve fastbootstrap CSS from /fastbootstrap/css
app.use('/fastbootstrap/css', express.static(join(__dirname, '../node_modules/fastbootstrap/dist/css')));

// Serve other static files from the public directory
app.use(express.static(join(__dirname, '../public')));

// Serve HTML files from the public/html directory
app.use('/', express.static(join(__dirname, '../public/html')));

app.use(express.json());
app.use('/api', router);
