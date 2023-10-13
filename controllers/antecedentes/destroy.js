import Antecedentes from '../../models/Antecedentes.js'

export default async(req,res,next)=> {

try {
    const destroyed = await Antecedentes.deleteOne({ folio: req.body.folio });
        if (destroyed.deletedCount){
        res.status(200).json({ response: destroyed, message:'eliminado' })
        } 
    } catch(error) {
        next(error)
    }
}