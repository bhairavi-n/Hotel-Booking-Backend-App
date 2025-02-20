import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readJSONFile = (filePath) => {
  const data = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
  return JSON.parse(data);
};

export const hotels = readJSONFile('../hotels.json');
export const bookings = readJSONFile('../bookings.json');
export const users = readJSONFile('../users.json');
