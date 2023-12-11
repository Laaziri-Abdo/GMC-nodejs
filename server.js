const express = require('express'); // inport express
const User = require('./module/users')
require('./config/connect'); // conaction ti db 
const app = express();
app.use(express.json());//change format data 
//add users 
app.post('/add', (req, res) => {
    data = req.body
    console.log(data);
    usr = new User(data)
    usr.save()
        .then(
            (savedUser) => {
                res.send(savedUser)
            }
        )
        .catch(
            (err) => {
                res.send(err)
            }
        )
});
//add request async/await
app.post('/create', async (req, res) => {
    try {
        data = req.body;
        usr = new User(data)
        savedUser = await usr.save()
        res.send(savedUser)
    }
    catch (error) {
        res.send(error)
    }
}
)
//get users
app.get('/getall', (req, res) => {
    User.find()
        .then((Users) => {
            res.send(Users)
            console.log(Users);
        })
        .catch((err) => {
            res.send(err)
        })
});

app.get('/getbyid/:name', (req, res) => {
    myid = req.params.name;
    User.findOne({ name: myid })
        .then((user) => {
            res.send(user)
        })
        .catch((err) => {
            res.send(err)
        })

})

app.put('/update', () => {
    console.log('update worck');
});
app.delete('/delete', (req, res) => {
    console.log('');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});