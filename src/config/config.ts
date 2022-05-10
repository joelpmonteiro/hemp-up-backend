//starter .env
require('dotenv').config()
import express, { Request } from "express";
import cors from "cors";
import routers from "../routers/routers"

const app = express()
const whitelist = ['*', '*']



//cors
const corsOp: cors.CorsOptions = {
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(cors(corsOp))
app.options("*", cors<Request>(corsOp))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Enable CORS for all HTTP methods
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-PINGOTHER, Content-Type,Authorization X-Requested-With, Content-Type, Accept,Access-Control-Allow-Headers, X-Requested-With,x-access-token"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.header("Access-Control-Max-Age", "86400")
    //Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
    //Access - Control - Max - Age: 86400
    next();
});


app.use('/', routers)

export default app