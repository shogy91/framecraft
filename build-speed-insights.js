// Simple script to copy the Speed Insights module for use in static HTML
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

// Create public directory if it doesn't exist
try {
  mkdirSync('public', { recursive: true });
} catch (err) {
  // Directory already exists
}

// Copy the Speed Insights module
const sourceFile = './node_modules/@vercel/speed-insights/dist/index.mjs';
const destFile = './public/speed-insights.js';

const content = readFileSync(sourceFile, 'utf8');
writeFileSync(destFile, content);

console.log('Speed Insights module copied to public/speed-insights.js');
