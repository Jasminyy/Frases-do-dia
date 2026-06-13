const express = require("express");
const app = express();
const port = 3000;

// 🧩 Middleware para liberar o CORS corretamente
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // resposta rápida para pré-requisições
  }

  next();
});

// 🧠 Rota da frase do dia
app.get("/frase", (req, res) => {
  const frases = [
    "Siga firme, tudo passa. 💪",
    "Acredite em você! ✨",
    "Cada dia é uma nova chance. 🌞",
    "Não desista agora, falta pouco! 🚀",
    "Respire fundo e siga em frente. 🌿"
  ];

  const aleatoria = frases[Math.floor(Math.random() * frases.length)];
  res.json({ frase: aleatoria });
});

// 🚀 Inicia o servidor
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
 