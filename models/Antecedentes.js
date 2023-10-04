import { Schema, model, Types } from 'mongoose'

let collection = 'antecedentes'
let schema = new Schema({
    nombre: { type: String, required: true },
    foto: { type: String, required: true },
    folio: { type: String, required: true },
    qr:{type:String, required:true},
    huella: { type: String, required: true },
    expedicion: { type: Date, required: true },
    vigencia: { type: String, required: true },
    author_id: {
        type:Types.ObjectId,
        ref:'administradores',
    }
}, {
    timestamps: true
})

let Antecedentes = model(collection, schema)
export default Antecedentes 