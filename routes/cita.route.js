import { Router } from "express";
import { citaController } from "../controller/cita.controller.js";

const router = Router();

router.get("/:id_peluqueria", citaController.getAll);

router.get("/:id_peluqueria/:", citaController.getAllByActivo);

router.get("/:id_peluqueria/rol/:id_rol", citaController.getAllByRol);

router.get("/:id_peluqueria/id/:id_cita", citaController.getById);

router.put("/:id_peluqueria/id/:id_cita", citaController.update);

router.post("/", citaController.create);

export default router;