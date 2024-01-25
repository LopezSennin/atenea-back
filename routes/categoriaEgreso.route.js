import { Router } from "express";
import { categoriaEgresoController } from "../controller/categoriaEgreso.controller.js";

const router = Router();

router.get("/:id_peluqueria", categoriaEgresoController.getAll);

router.get("/id/:id_tipo", categoriaEgresoController.getById);

router.put("/:id_tipo", categoriaEgresoController.update);

router.post("/", categoriaEgresoController.create);

export default router;