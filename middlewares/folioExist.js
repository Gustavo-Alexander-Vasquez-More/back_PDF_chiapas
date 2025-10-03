import Antecedentes from "../models/Antecedentes.js";
export default async function(req,res,next) {
try {
    const folio=await Antecedentes.findOne({folio:req.body.folio})
    if(folio){
        return res.status(400).json({
            response:null,
            success: false,
            message: 'Este Folio ya esta existe'
    })
}else {
    return next()
}
} catch (error) {
  console.log(error);
}

}