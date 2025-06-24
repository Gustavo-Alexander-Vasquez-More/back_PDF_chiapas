import { Schema,model } from 'mongoose'

let collection = 'sesiones'            
let schema = new Schema({    
    usuario: { type:String,required:true},
    fecha: { type:String,required:true},
    hora: { type:String,required:true},
    accion: { type:String,required:true},
},{
    timestamps:true
})

let Sesiones = model(collection,schema)
export default Sesiones