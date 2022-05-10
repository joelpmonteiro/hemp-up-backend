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
app.options("/contact", cors<Request>(corsOp))
app.post('/contact', contact.contactHemp)
app.options("/profissional", cors<Request>(corsOp))
app.post('/profissional', contact.professionalHemp)
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'FuckThis' })
})
export default app