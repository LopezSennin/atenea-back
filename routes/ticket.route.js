import {ticketController} from '../controller/ticket.controller.js';
import {Router} from 'express';

const router = Router();

router.get('/all/:id_peluqueria', ticketController.getall);

router.get('/all/pendientes/:id_peluqueria', ticketController.getallPendientes);

router.put('/finalizaratencion/:id_ticket', ticketController.finalizarAtencion);

router.put('/finalizarventa/:id_ticket', ticketController.finalizarVenta);

export default router;