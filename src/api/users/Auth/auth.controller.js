const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('../user.model');

const login = async (req, res)=>{
  try {
    const {correo, contraseña} = req.body;

    const user =await User.findOne({where: {
      correo: correo
    },
    // attributes: ['id_usuario', 'correo', 'nombres', 'id_rol']
  });
    if(!user){
      return res.status(404).json({message: 'Usuario no encontrado'})
    }
    const validacion = await bcrypt.compare(contraseña, user.contraseña);
    if(!validacion){
      return res.status(401).json({message: 'Datos incorrectos'})
    }
    const payload = {
      id_usuario: user.id_usuario,
      correo: user.correo,
      id_rol: user.id_rol,
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '1h'
    })
    return res.status(200).json({token})

  } catch (error) {
    res.status(500).json({ message: 'Error' + error });
  }
}

module.exports = {login}
