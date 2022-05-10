import Queue from "bull";
//import fila Mail
import contactMail from "../jobs/contactMail"
import redisConfig from "../config/redis"
import * as jobs from "../jobs"
import { queue } from "../interfaces/iqueue"


const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, `redis://@${redisConfig.host}:${redisConfig.port}`),
    name: job.key,
    handle: job.handle,
    options: job.options
}))


export default {
    queues,
    add(name: string, data: object) {
        const queue = this.queues.find(queue => queue.name === name)

        return queue?.bull.add(data)
    },
    empty(name: string) {
        const queue = this.queues.find(queue => queue.name === name);

        return queue?.bull.empty();
    },
    process() {
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle)

            queue.bull.on('failed', (job, err) => {
                console.log('Job failed: ', queue.name, job.data)
                throw new Error(`error: ${err.message} - ${err.name}`);
            })
        })
    }
}