const express = require('express'); // inport express
const router = express.Router();
const User = require('../module/users')
//add users 
router.post('/add', (req, res) => {
    data = req.body
    console.log(data);
    usr = new User(data)
    usr.save()
        .then(
            (savedUser) => { res.send(savedUser) })
        .catch(
            (err) => { res.send(err) })
});
//add request async/await
router.post('/create', async (req, res) => {
    try {
        data = req.body;
        usr = new User(data)
        savedUser = await usr.save()
        res.send(savedUser)
    }
    catch (error) { res.send(error) }
})
//get users
router.get('/getall', (req, res) => {
    User.find()
        .then((Users) => {
            res.send(Users)
            console.log(Users);
        })
        .catch((err) => {
            res.send(err)
        })
});
router.get('/getbyid/:name', (req, res) => {
    myid = req.params.name;
    User.findOne({ name: myid })
        .then((user) => {
            res.send(user)
        })
        .catch((err) => {
            res.send(err)
        })
})
router.get('/all', async (req, res) => {
    try {
        users = await User.find()
        res.send(users)
    }
    catch (err) { res.status(400).send(err) }
})

router.get('/allbyid/:id', async (req, res) => {
    try {
        id = req.params.id
        user = await User.findById({ _id: id })
        res.status(200).send(user)
    }
    catch (err) { res.status(400).send(err) }
})
router.put('/update/:id', (req, res) => {
    id = req.params.id
    newData = req.body
    User.findByIdAndUpdate({ _id: id }, newData)
        .then((updated) => {
            res.send(updated)
        })
        .catch((err) => { res.send(err) })
});

router.delete('/delete/:id', (req, res) => {
    id = req.params.id
    User.findOneAndDelete({ _id: id })
        .then((deletUser) => {
            res.send(deletUser)
        })
        .catch((err) => { res.send(err) })
});
router.delete('/remove/:name', async (req, res) => {
    try {
        id = req.params.name
        deletUser = await User.findOneAndDelete({ name: id })
        res.send(deletUser)
    }
    catch (err) { res.send(err) }
}
);
module.exports = router;
