import express from "express";
import { getAllImoveis, getImoveisByld, createImovel, deleteImovel, updateImovel, getImoveisByTipo, getImoveisByEndereco, getByQuartos, getByFaixaPreco } from "../controllers/imoveisControlers.js";

const router = express.Router();

//Filtros implementares:
router.get("/tipo/:tipo", getImoveisByTipo);
router.get("/endereco/:endereco", getImoveisByEndereco);
router.get("/quartos/:quartos", getByQuartos);
router.get("/faixaPreco/:faixa", getByFaixaPreco);

//Filtros CRUD:
router.get("/", getAllImoveis);
router.get("/id/:id", getImoveisByld);
router.post("/", createImovel);
router.delete("/:id", deleteImovel);
router.put("/:id", updateImovel);

export default router; 