import Antecedentes from "../../models/Antecedentes.js";
import Admins from "../../models/Admins.js";

export default async (req, res, next) => {
  try {
    let clienteData = req.body;

    if (clienteData.author_id) {
      const admin = await Admins.findOne({ usuario: clienteData.author_id });

      if (!admin) {
        return res.status(400).json({
          response: null,
          message: `El admin "${clienteData.author_id}" no existe en la base de datos.`,
        });
      }

      clienteData = {
        ...clienteData,
        author_id: admin._id,
      };
    }

    let antecedenteCreado = null;
    let intentos = 0;
    const maxIntentos = 5;

    while (!antecedenteCreado && intentos < maxIntentos) {
      // Buscar el último antecedente por fecha de creación
      const ultimo = await Antecedentes.findOne().sort({ createdAt: -1 }).lean();
      let nuevoFolio = "000001";
      if (ultimo && ultimo.folio) {
        const ultimoFolioNum = Number(ultimo.folio);
        nuevoFolio = "00" + String(ultimoFolioNum + 1);
      }
      clienteData.folio = nuevoFolio;

      try {
        antecedenteCreado = await Antecedentes.create(clienteData);
      } catch (err) {
        // Si el error es por folio duplicado, reintenta y vuelve a buscar el último folio
        if (err.code === 11000 && err.keyPattern && err.keyPattern.folio) {
          intentos++;
          continue;
        } else {
          throw err;
        }
      }
    }

    if (antecedenteCreado) {
      await Admins.findOneAndUpdate(
        { _id: clienteData.author_id },
        { $inc: { folios: -1 } },
        { new: true }
      );
      return res.status(200).json({
        response: antecedenteCreado,
        folio: antecedenteCreado.folio, // <-- Aquí devuelves el folio generado
      });
    } else {
      return res.status(400).json({
        response: null,
        message: "No se pudo asignar un folio único tras varios intentos.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      response: null,
      message: "Ocurrió un error en el servidor.",
    });
  }
};
