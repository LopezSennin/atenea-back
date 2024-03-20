import { Router } from "express";
import { empleadoController } from "../controller/empleado.controller.js";

const router = Router();

router.get("/:id_peluqueria", empleadoController.getAll);

router.get("/:id_peluqueria/activo/:activo", empleadoController.getAllByActivo);

router.get("/idempleado/:id_empleado", empleadoController.getById);

router.get("/emailempleado/:email", empleadoController.getByEmail);

router.get("/:id_peluqueria/rol/:id_rol", empleadoController.getAllByRol);

router.get("/:id_peluqueria/id/:identificacion", empleadoController.getByIdentificacion);

router.put("/:id_empleado", empleadoController.update);

router.post("/", empleadoController.create);

export default router;