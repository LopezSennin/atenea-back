import {ventaMercanciaController} from '../controller/ventaMercancia.controller.js';

import {Router} from 'express';

const router = Router();

router.post('/', ventaMercanciaController.iniciarVentaMercancia);

router.get('/listarfechaafecha/:id_peluqueria/:fecha1/:fecha2', ventaMercanciaController.listarFechaAFecha);

router.get('/listarfechaafechavendedor/:id_vendedor/:fecha1/:fecha2', ventaMercanciaController.listarFechaAFechaVendedor);

router.get('/listarfechaafechacliente/:id_cliente/:fecha1/:fecha2', ventaMercanciaController.listarFechaAFechaCliente);



export default router;