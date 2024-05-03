import { app } from "./app.js";
import dotenv from "dotenv"
import axios from "axios";

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.ACCESS_TOKEN}`;

dotenv.config({
    path:"./.env"
})
app.listen(process.env.PORT_NO,()=>{
    console.log("Server is listening on port",process.env.PORT_NO)
})