import { Router } from 'express';
import Controlador from './controlador';

const routes = Router();
const controlador = new Controlador();

routes.get('/', controlador.index);

export default routes;