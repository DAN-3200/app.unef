import express from "express";
import { createToDo } from "./db.js";
import cors from 'cors'

const app = express();
const port = 3000;

app.use(
  cors(),
  express.json()
);

app.get("/", (req, res) => {
  res.send("Ativo!");
});

app.post("/create", (req, res) => {
    console.log(req.body)
  createToDo();
  res.send("ToDo Criado");
});

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`);
});
