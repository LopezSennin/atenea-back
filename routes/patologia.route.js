import { Router } from "express";
import { patologiaController } from "../controller/patologia.controller.js";

const router = Router();

router.get("/all/:id_peluqueria", patologiaController.getAllPatologias);

router.get("/cliente/:id_cliente", patologiaController.getByIdCliente);

router.get("/:id_patologia", patologiaController.getByIdPatologia);

router.get("/productosalergia/:id_cliente", patologiaController.getProductosAlergia);

router.post("/", patologiaController.create);

router.put("/:id_patologia", patologiaController.updateById);

router.delete("/:id_patologia", patologiaController.deleteById);

export default router;
