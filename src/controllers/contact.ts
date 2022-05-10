import { Request, Response } from "express"
import QueueMail from "../lib/queueConfig"
export default {
    async contactHemp(req: Request, res: Response) {
        try {
            const { name, otherOption, email, cell, text } = req.body
            const a = await QueueMail.add('contactMail', { name, otherOption, email, cell, text, action: `localidade` })
            return res.status(200).json({ msg: `Processo será concluido em background, enquanto isso navegue feliz pela nossa pagina!` })
        } catch (error) {
            return res.status(404).json({ msg: 'Houve um erro interno' })
        }
    },
    async professionalHemp(req: Request, res: Response) {
        try {
            const { name, otherOption, email, cell, text } = req.body
            const a = await QueueMail.add('contactMail', { name, otherOption, email, cell, text, action: `Profissão` })
            return res.status(200).json({ msg: `Processo será concluido em background, enquanto isso navegue feliz pela nossa pagina!` })
        } catch (error) {
            return res.status(404).json({ msg: 'Houve um erro interno' })
        }
    }
}