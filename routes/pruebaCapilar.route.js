import {pruebaCapilarController} from '../controller/pruebaCapilar.controller.js';
import {Router} from 'express';

const router = Router();

router.post('/', pruebaCapilarController.add);

router.get('/:id_cliente', pruebaCapilarController.getPruebaCapilarByIdCliente);

router.get('/detalle/:id_prueba_capilar', pruebaCapilarController.getPruebaCapilarByIdDetalle);

router.get('/fecha_ultima/:id_cliente', pruebaCapilarController.getFechaUltimaPruebaCapilar);

export default router;