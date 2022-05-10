import Mail from "../lib/mail";
import { serviceEmail } from "../interfaces/serviceEmail";
import redisConfig from "../config/redis"

export default {
    key: 'contactMail',
    async handle({ data }: any) {
        const { name, otherOption, email, cell, text, action } = data
        console.log(email)

        const smtpMail = await Mail.sendMail({
            from: `${text} <${email}>`,
            to: `${name} <${process.env.MAIL_USER}>`,
            subject: text,
            html: `Segue os dados do usuario:<br>
            nome: ${name},<br>

            ${action}: ${otherOption},<br>
            
            E-mail: ${email},<br>
            
            telefone: ${cell},<br>`,

        })
        console.log('smtp: ', smtpMail)

    },
    options: {
        repeat: { cron: "0 * * * *" },
        backoff: { type: "exponential", delay: 30000 },
        attempts: 10
    },
}