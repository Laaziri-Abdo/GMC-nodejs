const express = require('express'); // inport express
const router = express.Router();
const Product = require('../module/product')

router.post('/add', async (req, res) => {
    try {
        data = req.body;
        prod = new Product(data)
        console.log(data);
        saveProd = await prod.save()
        res.send(saveProd)
    }
    catch (arr) {
        res.send(err)
    }
})
router.post('/addprod', (req, res) => {
    data = req.body
    console.log(data);
    usr = new Product(data)
    usr.save()
        .then(
            (savedUser) => { res.send(savedUser) })
        .catch(
            (err) => { res.send(err) })
});
module.exports = router;