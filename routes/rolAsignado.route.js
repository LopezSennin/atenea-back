import { Router } from "express";
import { rolAsignadoController } from "../controller/rolAsignado.controller.js";

const router = Router();

router.get("/:id_peluqueria", rolAsignadoController.getAll);

router.get("/:id_peluqueria/idrol/:id_rol", rolAsignadoController.getByIdRol);

router.get("/:id_peluqueria/idempleado/:id_empleado", rolAsignadoController.getByIdEmpleado);

router.delete("/:id_asignacion", rolAsignadoController.deleteAsig);

router.post("/", rolAsignadoController.create);

export default router;