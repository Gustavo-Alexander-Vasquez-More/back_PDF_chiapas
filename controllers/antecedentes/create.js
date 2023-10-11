import Antecedentes from "../../models/Antecedentes.js";
import Admins from "../../models/Admins.js";

export default async (req, res, next) => {
  try {
    let clienteData = req.body;
    const huellaUrl = req.files['huella'][0].path;
    const qrUrl = req.files['qr'][0].path;
    const fotoUrl = req.files['foto'][0].path;

    // Agrega las URLs de las imágenes al objeto de datos
    clienteData.huella = huellaUrl;
    clienteData.qr = qrUrl;
    clienteData.foto = fotoUrl;

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

    const all = await Antecedentes.create(clienteData);

    if (all) {
      return res.status(200).json({ response: all });
    } else {
      return res.status(400).json({
        response: null,
        message: "Ocurrió un error al crear el cliente.",
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
