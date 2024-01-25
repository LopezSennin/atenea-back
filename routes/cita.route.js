import { Router } from "express";
import { citaController } from "../controller/cita.controller.js";

const router = Router();

router.get("/:id_peluqueria/activas", citaController.getAllActivas);

router.get("/:id_peluqueria/inactivas", citaController.getAllInactivas);

router.get("/:id_peluqueria/estilista/:id_estilista", citaController.getAllByEstilista);

router.get("/:id_peluqueria/cliente/:id_cliente", citaController.getAllByCliente);

router.get("/:id_peluqueria/fecha/:fecha", citaController.getAllByFecha);

router.get("/:id_peluqueria/:fechad/al/:fechah", citaController.getByFechaAfecha);

router.get("/:id_peluqueria/dia/:id_dia", citaController.getAllByDia);

router.put("/id/:id_cita", citaController.update);

router.post("/", citaController.create);

export default router;