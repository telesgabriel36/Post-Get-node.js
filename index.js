const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//ROTA DE GET
app.get("/", (request, response) => {
    response.send({
        msg: "Olá mundo!"
    });
});

//ROTA DE POST
app.post("/dados", (request, response) => {
    const dadosRecebidos = request.body;
    response.send(`Dados recebidos: ${JSON.stringify(dadosRecebidos)}`);
});

//Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});
