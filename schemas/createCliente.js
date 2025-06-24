import joi from 'joi';

const crearAntecedente = joi.object({
    foto: joi.any()
        .required(),
    nombre: joi.string()
    .required(),
    folio: joi.string()
    .required(),
    qr:joi.string()
    .required(),
    huella: joi.string().allow(null, '').optional(),
    expedicion: joi.date()
    .required(),
    vigencia: joi.string()
    .required(),
    author_id: joi.string()
    .required(),
})

export default crearAntecedente;