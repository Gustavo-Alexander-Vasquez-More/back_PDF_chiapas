import { Schema, model, Types } from 'mongoose'

let collection = 'antecedentes'
let schema = new Schema({
    nombre: { type: String, required: true },
    foto: { type: String, required: true },
    folio: { type: String},
    qr:{type:String},
    huella: { type: String},
    expedicion: { type: String, required: true },
    hora:{type: String, required: true},
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