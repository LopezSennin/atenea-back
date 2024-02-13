import {tareaController} from '../controller/tarea.controller.js';
import {Router} from 'express';

const router = Router();

router.get('/:id_peluqueria', tareaController.getall);

router.get('/getone/:id_tarea', tareaController.getone);

router.post('/', tareaController.add);

router.put('/:id_tarea', tareaController.update);

router.delete('/:id_tarea', tareaController.del);

export default router;
