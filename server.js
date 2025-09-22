import express from "express";
import dotenv from "dotenv";

import imoveisRoutes from "./src/routes/imoveisRoutes.js"

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("🏬🏡Servidor de imóveis funcionando...");
});

app.use("/imoveis", imoveisRoutes)

app.listen(serverPort, () => {
    console.log("Servidor funcionando...");
});