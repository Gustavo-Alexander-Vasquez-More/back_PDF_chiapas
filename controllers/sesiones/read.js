import Sesiones from "../../models/Sesiones.js"

export default async (req, res)=>{
try {
    let all=await Sesiones.find(req.body).sort({ createdAt: -1 })
if(all){
res.status(201).json({
    response:all,
    message:'Sesiones encontradas'
})
}else{
    res.status(400).json({
    response:null,
    message:'No se encontraron las sesiones'
    })
}
} catch (error) {
console.log(error);
}
}