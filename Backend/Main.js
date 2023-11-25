import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import mealRoutes from "./routes/meals.js";
import orderRoutes from "./routes/orders.js"


const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/", authRoutes);
app.use("/", mealRoutes);
app.use("/", orderRoutes);



app.listen(5000, ()=>{
    console.log("port listening at port 5000..")
})