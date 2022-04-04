const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const { dbConnect } = require('./config/mongoose');
const userRoute = require("./routers/userRouter");
const authRoute = require("./routers/authRouter");
const productRoute = require("./routers/productRouter");
const orderRoute = require("./routers/orderRouter");
const newsletterRoute = require("./routers/newsletterRouter");
const stripeRoute = require("./routers/stripeRouter");
const commentsratingsRoute = require("./routers/commentsratingsRouter")
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8082;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/mails", newsletterRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/commentsratings", commentsratingsRoute)

dbConnect()
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

app.get('/', (req, res)=> {
  res.send("Welcome to the back side")
})
