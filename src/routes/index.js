import routexp from 'express-promise-router';

import autenticacion from './auth.routes';
import Personas from './persona.routes';
import User from './user.routes';

import Citas from './citas.routes';

const router = routexp();
router.use('/auth',autenticacion);
router.use("/persona",Personas);
router.use("/user", User);

router.use('/citas', Citas);


export default router;