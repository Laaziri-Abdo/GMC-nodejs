const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gomycode')
.then (
    ()=>{
        console.log('Conectado a MongoDB');
    }
)
.catch(
    (err)=>{
        console.log('Erro ao se conectar a MongoDB: ', err);
    }
)
module.exports=mongoose;