import { Router } from "express";
import { empleadoController } from "../controller/empleado.controller.js";

const router = Router();

router.get("/:id_peluqueria", empleadoController.getAll);

router.get("/:id_peluqueria/activo/:activo", empleadoController.getAllByActivo);

router.get("/:id_peluqueria/rol/:id_rol", empleadoController.getAllByRol);

router.get("/:id_peluqueria/id/:id_empleado", empleadoController.getById);

router.put("/:id_peluqueria/id/:id_empleado", empleadoController.update);

router.post("/", empleadoController.create);

export default router;