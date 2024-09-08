const bcrypt = require('bcrypt')
const User =  require('../users/user.model');


const createUser = async (req, res) =>{
  try {
    const {username, email, password} = req.body;
    //validaciones campos vacios
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    //encryptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    //crear el usuario
    const user = await  User.create({username, email, password: hashedPassword});
    res.status(201).json(user);
  } catch (error) {
    console.log(error)
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
     res.status(500).json({ message: 'Error al listar usuarios' });
  }
}

const getUser = async (req, res)=>{
  try{
    const id = req.params.id;
    const user = await User.findByPk(id);
    if(!user){
      return res.status(404).json({message: 'Usuario no encontrado'})
      }
      res.status(200).json(user);
  }catch(err){
    console.log(err)
  }
}


module.exports = { createUser, getAllUsers, getUser };
