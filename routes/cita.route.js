import { Router } from "express";
import { citaController } from "../controller/cita.controller.js";

const router = Router();

router.get("/:id_peluqueria/activas", citaController.getAllActivas);

router.get("/:id_peluqueria/inactivas", citaController.getAllInactivas);

router.get("/estilista/:id_estilista", citaController.getAllByEstilista);

router.get("/cliente/:id_cliente", citaController.getAllByCliente);

router.get("/:id_peluqueria/fecha/:fecha", citaController.getAllByFecha);

router.get("/:id_peluqueria/:fechad/al/:fechah", citaController.getByFechaAfecha);

router.get("/:id_peluqueria/dia/:id_dia", citaController.getAllByDia);

router.put("/id/:id_cita", citaController.update);

router.post("/", citaController.create);

router.delete("/id/:id_cita", citaController.deleteCita);

router.put("/cancelar/:id_cita", citaController.cancelarCita);

router.get("/novigentes/estilista/:id_estilista/:fechainicio/:fechafin", citaController.getNoVigentesByEstilista);

router.put("/cambiar-en-atencion/:id_cita", citaController.cambiarEnAtencion);

export default router;
