import { Router } from "express";
import { productoController } from "../controller/producto.controller.js";

const router = Router();

router.get("/:id_peluqueria", productoController.getAll);

router.get("/tipo/:tipo", productoController.getByType);

router.get("/id/:id_producto", productoController.getById);

router.put("/:id_producto", productoController.update);

router.post("/", productoController.create);
export default router;