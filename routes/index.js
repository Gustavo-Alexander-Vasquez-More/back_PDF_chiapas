import express from 'express'
import admins_router from './admins.js';
let router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/admins', admins_router)

export default router