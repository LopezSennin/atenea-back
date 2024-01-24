import { Router } from "express";
import { peluqueriaController } from "../controller/peluqueria.controller.js";

const router = Router();

router.get("/", peluqueriaController.getAll);

router.post("/", peluqueriaController.create);

router.get("/:id_peluqueria", peluqueriaController.getById);

router.put("/:id_peluqueria", peluqueriaController.update);

export default router;