import Antecedentes from '../../models/Antecedentes.js';
import Admins from '../../models/Admins.js';

export default async (req, res) => {
  const itemsPerPage = 5;
  let page = parseInt(req.query.page);

  // Verificar si el número de página es 0 o negativo
  if (page <= 0) {
    res.status(400).json({
      response: null,
      message: "Número de página no válido. Por favor, proporciona un número de página positivo."
    });
    return;
  }

  // Si la página es undefined o no es un número, se toma por defecto la página 1
  page = page || 1;

  try {
    const author = req.query.author;

    // Buscar el ID del autor basado en el nombre de usuario
    const admin = await Admins.findOne({ usuario: author });

    if (!admin) {
      res.status(404).json({
        response: null,
        message: "No se encontró el autor con el nombre de usuario proporcionado."
      });
      return;
    }

    const clients = await Antecedentes.find({ author_id: admin._id })
    .populate({
        path: 'author_id',
        select: 'usuario'
      })
      .sort({ updatedAt: -1 })
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage);

    let response = null;
    let prevPage = null;
    let nextPage = null;

    if (clients.length > 0) {
      response = clients;

      if (page > 1) {
        prevPage = page - 1;
      }

      const totalClients = await Antecedentes.countDocuments({ author_id: admin._id });
      const totalPages = Math.ceil(totalClients / itemsPerPage);

      if (page < totalPages) {
        nextPage = page + 1;
      }
    }

    res.status(200).json({
      response,
      message: "Antecedentes encontrados",
      currentPage: page,
      prevPage,
      nextPage
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      response: null,
      message: "Ocurrió un error en el servidor"
    });
  }
};