import Sesiones from "../../models/Sesiones.js"

export default async(req, res)=>{
try {
    const all= await Sesiones.create(req.body)
    if(all){
    res.status(200).json({
        response:all,
        message:'Sesion creada con exito'
})
}else{
    res.status(400).json({
        response:null,
        message:'ocurrio un error al crear la sesion'
    })
}
} catch (error) {
    console.log(error);
}
}