import { Router } from "express";
import { citaController } from "../controller/cita.controller.js";

const router = Router();

router.get("/:id_peluqueria", citaController.getAll);

router.get("/:id_peluqueria/:id_empleado", citaController.getAllByEstilista);

router.get("/:id_peluqueria/fecha/:fecha", citaController.getAllByFecha);

router.get("/:id_peluqueria/:fechad/al/:fechah", citaController.getByFechaAfecha);

router.get("/:id_peluqueria/dia/:id_dia", citaController.getAllByDia);

router.put("/:id_peluqueria/id/:id_cita", citaController.update);

router.post("/", citaController.create);

export default router;