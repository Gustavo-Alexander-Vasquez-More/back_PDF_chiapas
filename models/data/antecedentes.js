import Antecedentes from '../Antecedentes.js'
import Admins from '../Admins.js'
import 'dotenv/config.js'
import '../../config/db.js'

const antecedentes=[
    {
    nombre: "Jose Candelario Domínguez lopez",
    foto:"https://firebasestorage.googleapis.com/v0/b/fotos-36c9a.appspot.com/o/da909c8f-7e19-4dd4-b1a9-3b6175f7710f?alt=media&token=4e95ebfc-c311-4fb6-973a-eee219df344f",
    folio:"0000801",
    qr:'https://img.freepik.com/vector-premium/ejemplo-codigo-qr-escaneo-telefonos-inteligentes-icono-codigo-qr-ilustracion-vector-stock-diseno-plano_550395-108.jpg',
    huella:"https://assets.stickpng.com/images/580b585b2edbce24c47b297f.png",
    author_id:"gus",
    expedicion: "2023-09-14",
    hora:'14:30',
    vigencia: "14-09-2023"
    },
]
antecedentes.map(cliente=>add_author(cliente))

async function add_author(cliente) {
    console.log(cliente.estado_id)
    console.log(cliente.author_id);;
    
// Buscar el admin por el nombre de usuario
    let admin = await Admins.findOne({ usuario: cliente.author_id });
    if (!admin) {
      console.log(`Admin no encontrado para cliente: ${cliente.nombre}`);
      return; // Puedes manejar el caso en que el admin no se encuentre
    }
    cliente.author_id = admin._id;
  
    await Antecedentes.create(cliente);
  }