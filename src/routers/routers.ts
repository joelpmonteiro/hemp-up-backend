import { Router, Request } from "express";
import contact from "../controllers/contact";
import cors from "cors";
const whitelist = ['https://hempupcaring.com', 'https://hempupcaring.com/']

const corsOp: cors.CorsOptions = {
    origin: function (origin: any, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            console.log('origin do url: ', origin)
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

const app = Router()
app.post('/contact', contact.contactHemp)
app.post('/profissional', contact.professionalHemp)

export default app
