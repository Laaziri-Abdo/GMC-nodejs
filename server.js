const express = require('express'); // inport express
const User = require('./module/users')
require('./config/connect'); // conaction ti db 
const app = express();
app.use(express.json()); //change format data 
//add users 
app.post('/add', (req, res) => {
    data = req.body
    console.log(data);
    usr = new User(data);
    usr.save()
        .then(
            (savedUser) => {
                res.send(savedUser)
            })
        .catch(
            (err) => {
                res.send(err)
            })
});
app.get('/getall', () => {
    console.log('get all worck');
});
app.put('/update', () => {
    console.log('update worck');
});
app.delete('/delete', () => {
    console.log('delete worck');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});