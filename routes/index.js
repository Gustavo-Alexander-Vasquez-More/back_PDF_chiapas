import express from 'express'
import admins_router from './admins.js';
import antecedentes_router from './antecedentes.js';
import restricciones_router from './restricciones.js';
import registro_folios_router from './registro_folios.js';
import registro_usurios_router from './registro_usuarios.js';
let router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/admins', admins_router)
router.use('/antecedentes', antecedentes_router)
router.use('/restricciones', restricciones_router)
router.use('/registro_folios', registro_folios_router)
router.use('/registro_usuarios', registro_usurios_router)
export default router