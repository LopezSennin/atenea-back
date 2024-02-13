import {tareaCitaController} from '../controller/tareaCita.controller.js';

import {Router} from 'express';

const router = Router();

router.post('/', tareaCitaController.add);

router.delete('/:id_tarea_cita', tareaCitaController.del);

router.get('/:id_peluqueria/:id_fechad/:id_fechah', tareaCitaController.getAllByFechaAfecha);

router.put('/finalizar/:id_asignacion', tareaCitaController.finalizarTarea)

router.get('/auxiliar/:id_auxiliar/:id_fechad/:id_fechah', tareaCitaController.getAllByAuxiliarFechaAfecha)

router.get('/allasignaciones/:id_peluqueria', tareaCitaController.getAllAsignaciones)

router.get('/allpendientes/:id_auxiliar', tareaCitaController.getAllPendientes)

export default router;