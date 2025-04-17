import express from 'express';
import frasesRoute from './routes/frases.js';
import respiracaoRoute from './routes/respiracao.js';
import autocuidadoRoute from './routes/autocuidado.js';
import emergenciaRoute from './routes/emergencia.js';

const app = express();
const PORT = 3000;

app.use('/frases-motivacionais', frasesRoute);
app.use('/exercicios-respiracao', respiracaoRoute);
app.use('/autocuidado', autocuidadoRoute);
app.use('/emergencia', emergenciaRoute);

app.get('/', (req, res) => {
  res.send('Bem-vindo à API Servindo 🐕‍🦺 – Apoio Emocional para Estudantes');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);

});
