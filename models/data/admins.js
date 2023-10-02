import Admins from '../Admins.js'
import 'dotenv/config.js'
import '../../config/db.js'

let admins=[
{
    usuario: 'gus',
    contraseña:'hola123',
    rol:0,
    online:false,
    folios:1000,
}
]
Admins.insertMany(admins)