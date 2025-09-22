import express from "express";
import { getAllImoveis, getImoveisByld, createImovel, deleteImovel, updateImovel, getImoveisByTipo, getImoveisByEndereco, getByQuartos } from "../controllers/imoveisControlers.js";

const router = express.Router();

//Filtros implementares:
router.get("/tipo/:tipo", getImoveisByTipo);
router.get("/endereco/:endereco", getImoveisByEndereco);
router.get("/quartos/:quartos", getByQuartos);

//Filtros CRUD:
router.get("/", getAllImoveis);
router.get("/id/:id", getImoveisByld);
router.post("/", createImovel);
router.delete("/:id", deleteImovel);
router.put("/:id", updateImovel);

export default router; 