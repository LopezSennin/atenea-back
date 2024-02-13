import { Router } from "express";
import { servicioController } from "../controller/servicio.controller.js";

const router = Router();

router.get("/peluqueria/:id_peluqueria", servicioController.getAll);

router.get("/peluqueria/:id_peluqueria/codigo/:codigo", servicioController.getAllByCode);

router.get("/id/:id_servicio", servicioController.getById);

router.put("/:id_servicio", servicioController.update);

router.post("/", servicioController.create);

export default router;