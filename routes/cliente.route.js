import { Router } from "express";
import { clienteController } from "../controller/cliente.controller.js";

const router = Router();

router.get("/:id_peluqueria", clienteController.getAll);

router.get("/:id_peluqueria/id/:id_cliente", clienteController.getById);

router.get("/:id_peluqueria/HBD", clienteController.getHBD);

router.post("/", clienteController.create);

router.put("/:id_peluqueria/:id_cliente", clienteController.update);

export default router;