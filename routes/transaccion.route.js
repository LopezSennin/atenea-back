import {transaccionController} from '../controller/transaccion.controller.js';

import {Router} from 'express';

const router = Router();

router.post('/', transaccionController.agregarTransaccion);

router.get('/deudacliente/:id_cliente', transaccionController.deudaCliente);

router.get('/deudaactivas/:id_peluqueria', transaccionController.deudaActivas);

router.get('/deudassaldadas/:id_peluqueria', transaccionController.deudasSaldadas);

router.get('/abonos/:id_peluqueria', transaccionController.abonos);

router.get('/detalletransaccion/:id_transaccion', transaccionController.detalleTransaccion);

router.get('/fechaafecha/:id_peluqueria/:fecha_inicio/:fecha_fin', transaccionController.transaccionesFechaAFecha);

export default router;