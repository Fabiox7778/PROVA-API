import express from "express";
import { getAllImoveis, getImoveisByld, createImovel, deleteImovel, updateImovel, getImoveisByTipo } from "../controllers/imoveisControlers.js";

const router = express.Router();

//Filtros implementares:
router.get("/:id", getImoveisByTipo);


//Filtros CRUD:
router.get("/", getAllImoveis);
router.get("/:id", getImoveisByld);
router.post("/", createImovel);
router.delete("/:id", deleteImovel);
router.put("/:id", updateImovel);

export default router; 