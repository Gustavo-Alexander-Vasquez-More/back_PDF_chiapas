import { Router } from "express";
import read from '../controllers/antecedentes/read.js'
import create from '../controllers/antecedentes/create.js'
import validator from "../middlewares/validator.js";
import crearAntecedente from "../schemas/createCliente.js";
const antecedentes_router=Router()
antecedentes_router.get('/' , read),
antecedentes_router.post('/create',validator(crearAntecedente), create)
export default antecedentes_router