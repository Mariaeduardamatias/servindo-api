import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

const filePath = path.resolve('./src/dados/emergencia.json');
const contatosEmergencia = JSON.parse(fs.readFileSync(filePath, 'utf8'));

router.get('/', (req, res) => {
  res.json(contatosEmergencia);
});

export default router;
