import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

const filePath = path.resolve('./src/dados/autocuidado.json');
const dicasAutocuidado = JSON.parse(fs.readFileSync(filePath, 'utf8'));

router.get('/', (req, res) => {
  res.json(dicasAutocuidado);
});

export default router;
