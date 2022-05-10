import nodemailer from "nodemailer"
import mailConfig from "../config/mailConfig";
//import ImailConfig from "../interfaces/ImailConfig"
const smtp = nodemailer.createTransport(mailConfig);
console.log(mailConfig)
smtp.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});
export default smtp