import express from "express";
import { getAllImoveis, getImoveisByld, createImovel, deleteImovel, updateImovel } from "../controllers/imoveisControlers.js";

const router = express.Router();

//Filtros implementares:


//Filtros CRUD:
router.get("/", getAllImoveis);
router.get("/:id", getImoveisByld);
router.post("/", createImovel);
router.delete("/:id", deleteImovel);
router.put("/:id", updateImovel);

export default router; 