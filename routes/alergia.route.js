import { Router } from "express";
import { alergiaController } from "../controller/alergia.controller.js";

const router = Router();

router.get("/peluqueria/:id_peluqueria", alergiaController.getAllAlergias);

router.get("/patologia/:id_patologia", alergiaController.getAll);

router.get("/cliente/:id_cliente", alergiaController.getByIdCliente);

router.delete("/:id_alergia", alergiaController.deleteById);

router.post("/", alergiaController.create);

export default router;