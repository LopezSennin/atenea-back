import { Router } from "express";
import { rolController } from "../controller/rol.controller.js";

const router = Router();

router.get("/:id_peluqueria", rolController.getAll);

router.get("/:id_rol", rolController.getById);

router.put("/:id_rol", rolController.update);

router.post("/", rolController.create);

export default router;