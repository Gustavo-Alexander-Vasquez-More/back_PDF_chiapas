import { Router } from "express";
import read from '../controllers/antecedentes/readPag.js'
import readAll from "../controllers/antecedentes/read.js";
import create from '../controllers/antecedentes/create.js'
import destroy from '../controllers/antecedentes/destroy.js'
import update from '../controllers/antecedentes/update.js'
import multer from "multer";
const upload = multer({ dest:'uploads/'});
const antecedentes_router=Router()
antecedentes_router.get('/' , read),
antecedentes_router.get('/todos', readAll)
antecedentes_router.post('/create', upload.fields([{ name: 'foto' }, { name: 'huella' }, { name: 'qr' }]), create)
antecedentes_router.put('/update/:folio', update)
antecedentes_router.delete('/delete', destroy)
export default antecedentes_router