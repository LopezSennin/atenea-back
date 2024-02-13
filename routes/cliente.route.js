import { Router } from "express";
import { clienteController } from "../controller/cliente.controller.js";

const router = Router();

router.get("/:id_peluqueria", clienteController.getAll);

router.get("/idcliente/:id_cliente", clienteController.getById);

router.get("/peluqueria/:id_peluqueria/identificacion/:identificacion", clienteController.getByIdentificacion);

router.get("/:id_peluqueria/HBD", clienteController.getHBD);

router.post("/", clienteController.create);

router.put("/idcliente/:id_cliente", clienteController.update);

export default router;