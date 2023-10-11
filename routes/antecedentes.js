import { Router } from "express";
import read from '../controllers/antecedentes/read.js'
import create from '../controllers/antecedentes/create.js'

import multer from "multer";
const upload = multer({ dest:'uploads/'});
const antecedentes_router=Router()
antecedentes_router.get('/' , read),
antecedentes_router.post('/create', upload.fields([{ name: 'foto' }, { name: 'huella' }, { name: 'qr' }]), create)
export default antecedentes_router