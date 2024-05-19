import {ventaMercanciaController} from '../controller/ventaMercancia.controller.js';

import {Router} from 'express';

const router = Router();

router.post('/', ventaMercanciaController.iniciarVentaMercancia);

router.get('/id/:id_venta', ventaMercanciaController.getVentaMercanciaDetalle);

router.get('/finalizadas/:id_peluqueria', ventaMercanciaController.listarVentasFinalizadas);

router.get('/listarfechaafecha/:id_peluqueria/:fecha1/:fecha2', ventaMercanciaController.listarFechaAFecha);

router.get('/listarfechaafechavendedor/:id_vendedor/:fecha1/:fecha2', ventaMercanciaController.listarFechaAFechaVendedor);

router.get('/listarfechaafechacliente/:id_cliente/:fecha1/:fecha2', ventaMercanciaController.listarFechaAFechaCliente);

router.put('/finalizar/:id_venta/:id_peluqueria', ventaMercanciaController.finalizarVentaMercancia);

router.get('/allSinFinalizar/:id_vendedor', ventaMercanciaController.listarVentasSinFinalizarVendedor);

router.delete('/:id_venta', ventaMercanciaController.eliminarVentaMercancia);

export default router;