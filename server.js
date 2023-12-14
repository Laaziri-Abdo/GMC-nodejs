const express = require('express'); // inport express
require('./config/connect'); // conaction to db 
const app = express();
app.use(express.json());//change format data 

const productRoute = require('./router/product');
const userRoute = require('./router/user')

app.use('/product', productRoute);
app.use("/user", userRoute)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});