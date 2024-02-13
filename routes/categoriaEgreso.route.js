import { Router } from "express";
import { categoriaEgresoController } from "../controller/categoriaEgreso.controller.js";

const router = Router();

router.get("/:id_peluqueria", categoriaEgresoController.getAll);

router.get("/id/:id_categoria", categoriaEgresoController.getById);

router.put("/:id_categoria", categoriaEgresoController.update);

router.delete("/:id_categoria", categoriaEgresoController.deleteCategoriaEgreso);

router.post("/", categoriaEgresoController.create);

export default router;