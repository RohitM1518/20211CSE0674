import  express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"


const app = express();
app.use(cors({
    origin:'*',
    credentials:true
}
)) 
app.use(express.json({
    limit:"16kb"
}
))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import AllProductRoutes from './src/routes/getProducts.routes.js'
import SpecificProductRoutes from './src/routes/getSpecificProduct.route.js'
app.use('/pres',AllProductRoutes)
app.use('/pres',SpecificProductRoutes)

export {app}
