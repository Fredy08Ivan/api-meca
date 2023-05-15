import Routex from 'express-promise-router';
import citasControllers from '../controllers/citas.controllers';

const router = Routex();

router.post('/guardarCita', citasControllers.addCita);
router.get('/consultarCita', citasControllers.consultaCita);
router.get("/consultarUnaCita/:id", citasControllers.consultarUnaCita)
router.delete('/eliminar/:id',citasControllers.eliminarCita);
router.put('/actualizar',citasControllers.actualizarDatos);
export default router;