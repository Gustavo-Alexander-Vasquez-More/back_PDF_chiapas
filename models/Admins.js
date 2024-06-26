import { Schema,model,Types } from 'mongoose'

let collection = 'administradores'            
let schema = new Schema({ 
    usuario: { type:String,required:true},
    contraseña:{type:String, required:true},
    rol:{type:Number, default:0},
    online:{type:Boolean, default:false},
    folios:{type:Number, default:25},
    creador:{type:String}
},{
    timestamps:true
})

let Admins = model(collection,schema)
export default Admins