import { Router } from "express";
import { categoriaServicioController } from "../controller/categoriaServicio.controller.js";

const router = Router();

router.get("/:id_peluqueria", categoriaServicioController.getAll);

router.get("/id/:id_categoria", categoriaServicioController.getById);

router.put("/:id_categoria", categoriaServicioController.update);

router.delete("/:id_categoria", categoriaServicioController.deleteCategoriaServicio);

router.post("/", categoriaServicioController.create);

export default router;