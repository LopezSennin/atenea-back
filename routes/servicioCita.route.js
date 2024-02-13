import {servicioCitacController} from '../controller/servicioCita.controller.js';

import {Router} from 'express';

const router = Router();

router.post('/', servicioCitacController.add);

router.put('/cambiarinformacion/:id_servicio_cita', servicioCitacController.cambiarInformacion);

router.get('/idatencion/:id_atencion', servicioCitacController.getServiciosPorAtencion);



export default router;