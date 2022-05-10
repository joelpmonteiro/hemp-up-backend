import 'dotenv/config'
import queueConfig from './lib/queueConfig'

try {
    queueConfig.process()
} catch (error) {
    console.log(error)
}
