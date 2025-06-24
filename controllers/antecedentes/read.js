import Antecedentes from "../../models/Antecedentes.js"
export default async (req, res)=>{
try {
    let all =await Antecedentes.find(req.body)
    .populate({
        path: 'author_id',
        select: 'usuario'
      })
if(all){
    res.status(200).json({
        response:all,
        message:'Antecedentes encontrados'
    })
}else{
    res.status(400).json({
        response:null,
        message:'no se econtraron Antecedentes'
    })
}
} catch (error) {
    console.log(error);
}
}