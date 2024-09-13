const jwt = require('jsonwebtoken');

const verifyAuth = (req, res, next) =>{
  const header = req.headers['authorization'];
  if(!header){
    return res.status(401).json({ message: 'No enviaste la autorización'})
  }
  const token = header.split(' ')[1]
  if(!token){
    return res.status(401).json({ message: 'error en token no enviado'})
  }
  jwt.verify(token, process.env.SECRET_KEY, (error, result)=>{
    if(error){
      return res.status(401).json({ message: 'token es invalido'})
    }
    next();
  });
}

// enviar en el token info del user

module.exports = verifyAuth;
