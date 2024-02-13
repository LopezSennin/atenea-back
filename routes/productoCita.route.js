import {productoCitaController} from '../controller/productoCita.controller.js';

import {Router} from 'express';

const router = Router();

router.post('/', productoCitaController.add);

router.get('/atencion/:id_atencion', productoCitaController.getProductoCitaByIdAtencion);

router.get('/detalle/:id_atencion', productoCitaController.getProductoCitaByIdAtencionDetalle);

router.get('/costodeproductos/:id_atencion', productoCitaController.getCostoDeProductos);

export default router;