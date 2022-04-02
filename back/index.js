require('dotenv').config()
const express = require('express');
const cors = require("cors");

const { dbConnect } = require('./config/mongoose');
const userRoute = require('./routes/userRoutes');
const authRoute = require('./routes/authRouter');
const productRoute = require('./routes/productRoutes');
const cartRoute = require('./routes/cartRoutes');
const orderRoute = require('./routes/orderRoutes');
const stripeRoute = require('./routes/paymentRoute');


const app = express();
const PORT = process.env.PORT || 8082;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


dbConnect()
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
