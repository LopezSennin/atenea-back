import { Router } from "express";
import { mercanciaController } from "../controller/mercancia.controller.js";

const router = Router();

router.get("/:id_peluqueria", mercanciaController.getAll);

router.get("/id/:id_mercancia", mercanciaController.getById);

router.get("/:id_peluqueria/:codigo", mercanciaController.getByIdPeluqueriaNCodigo);

router.put("/:id_mercancia", mercanciaController.update);

router.post("/", mercanciaController.create);

export default router;