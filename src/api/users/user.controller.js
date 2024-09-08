const bcrypt = require('bcrypt')
const User =  require('../users/user.model');


const registrar = async (request, response) =>{
  try {
    console.log(request.body)
    const {username, email, password} = request.body;
    //validaciones campos vacios
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    //encryptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    //crear el usuario
    const user = await  User.create({username, email, password: hashedPassword});
    response.status(201).json(user);
  } catch (error) {
    console.log(error)
  }
}

const listar = async (request,response) => {
  try {
    const users = await User.findAll();
    response.status(200).json(users);
  } catch (error) {
     response.status(500).json({ message: 'Error al listar usuarios' });
  }
}

module.exports = { registrar, listar };
