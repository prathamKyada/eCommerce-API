import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path"
import adminRoute from "./app/admin/routes/admin_route";
import userRoute from "./app/view_products/routes/user_route"
import userAddressRoute from "./app/user_address/routes/user_address_route";
import userRegisterRoute from "./app/login_register/routes/login_register_route";
import cart_route from "./app/cart/routes/cart_route";

const app = express();
app.use("/upload", express.static(path.join(__dirname, "upload")));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/admin", adminRoute);
app.use("/user", userRoute)
app.use("/user-address", userAddressRoute)
app.use("/auth", userRegisterRoute)
app.use('/cart', cart_route)
// app.
// console.log("jwt_screte key > ", process.env.JWT_SECRET)

app.listen(3300, () => {
  console.log("server is live on 3300");
});
