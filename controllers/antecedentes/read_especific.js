import Antecedentes from "../../models/Antecedentes.js"
export default async (req, res)=>{
try {
    const folioParam=req.body.folio
    let especific =await Antecedentes.find({folio:folioParam})
    
if(especific){
    res.status(200).json({
        response:especific,
        message:'Antecedente encontrado'
    })
}else{
    res.status(400).json({
        response:null,
        message:'no se econtró el antecedente'
    })
}
} catch (error) {
    console.log(error);
}
}