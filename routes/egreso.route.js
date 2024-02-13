import { Router } from "express";
import { egresoController } from "../controller/egreso.controller.js";

const router = Router();

router.get("/:id_peluqueria", egresoController.getAll);

router.get("/:id_peluqueria/:fechadesde/:fechahasta", egresoController.getAllByDate);

router.get("/id/:id_egreso", egresoController.getById);

router.put("/:id_egreso", egresoController.update);

router.post("/", egresoController.create);

export default router;