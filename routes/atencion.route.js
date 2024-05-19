import {atencionController} from "../controller/atencion.controller.js";

import {Router} from "express";

const router = Router();

router.post('/', atencionController.add);

router.get('/allByIdCliente/:id_cliente', atencionController.getAllByIdCliente);

router.get('/sinfinalizar/:id_peluqueria', atencionController.getSinFinalizar);

router.get('/finalizadas/:id_peluqueria', atencionController.getAtencionesFinalizadas);

router.put('/cambiarprecio/:id_servicio_prestado', atencionController.cambiarPrecio);

router.put('/finalizar/:id_servicio_prestado', atencionController.finalizarServicio);

router.get('/:id_pelqueria/:fechadesde/hasta/:fechahasta', atencionController.getServiciosPrestadosPorFecha);

router.get('/idservicioprestado/:id_servicio_prestado', atencionController.getServicioPrestadoPorId);

router.get('/serviciosporcita/:id_cita', atencionController.getServiciosPorCita);

router.put('/registrarcosto/:id_servicio_prestado', atencionController.registrarCostoServicioPrestado);

router.get('/serviciosporempleado/:id_empleado/:fecha_desde/:fecha_hasta', atencionController.getServiciosPorEmpleado);

router.get('/sinfinalizar/estilista/:id_estilista', atencionController.getSinFinalizarByEstilista);

router.put('/cambiarDetalle/:id_atencion', atencionController.cambiarDetalle);

export default router;