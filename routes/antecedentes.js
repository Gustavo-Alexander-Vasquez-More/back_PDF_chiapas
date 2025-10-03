import { Router } from "express";
import read from '../controllers/antecedentes/readPag.js'
import readAll from "../controllers/antecedentes/read.js";
import create from '../controllers/antecedentes/create.js'
import destroy from '../controllers/antecedentes/destroy.js'
import update from '../controllers/antecedentes/update.js'
import readAuth from "../controllers/antecedentes/readAuth.js";
import folioExist from "../middlewares/folioExist.js";
import read_especific from "../controllers/antecedentes/read_especific.js";

const antecedentes_router=Router()
antecedentes_router.get('/' , read),
antecedentes_router.get('/read_especific/:folio' , read_especific),
antecedentes_router.get('/todos', readAll)
antecedentes_router.post('/create', folioExist, create)
antecedentes_router.put('/update/:folio', update)
antecedentes_router.delete('/delete', destroy)
antecedentes_router.get('/author', readAuth)
export default antecedentes_router