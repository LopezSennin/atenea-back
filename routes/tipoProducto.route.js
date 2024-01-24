import { Router } from "express";
import { tipoProductoController } from "../controller/tipoProducto.controller.js";

const router = Router();

router.get("/:id_peluqueria", tipoProductoController.getAll);

router.get("/id/:id_tipo", tipoProductoController.getById);

router.put("/:id_tipo", tipoProductoController.update);

router.post("/", tipoProductoController.create);

export default router;