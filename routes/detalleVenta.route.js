import {detalleVentaController} from '../controller/detalleVenta.controller.js';

import {Router} from 'express';

const router = Router();

router.post('/', detalleVentaController.agregarDetalleVenta);

router.get('/listar/:id_venta', detalleVentaController.listar);


export default router;