import express from 'express';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// Suporte ao __dirname no ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', async (req, res) => {
  try {
    const data = await readFile(path.join(__dirname, '../dados/frases.json'), 'utf-8');
    const frases = JSON.parse(data);
    res.json(frases);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao carregar as frases' });
  }
});

export default router;
