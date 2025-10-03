import Admins from "../../models/Admins.js";

export default async (req, res) => {
  try {
    const nombreAdmin = req.params.usuario;
    const updatedData = req.body;

    const updated = await Admins.findOneAndUpdate(
      { usuario: nombreAdmin },
      updatedData,
      { new: true }
    );

    if (updated) {
      res.status(200).json({
        response: updated,
        message: 'Datos del cliente actualizados',
      });
    } else {
      res.status(404).json({
        response: null,
        message: 'Usuario no encontrado',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      response: null,
      message: 'Error interno del servidor',
    });
  }
};
