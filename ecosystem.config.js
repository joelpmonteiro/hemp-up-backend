module.exports = {
    apps: [{
        name: "server",
        watch: true,
        script: "./dist/index.js",
        env_production: {
            NODE_ENV: "production",
            PORT: 3334,
            MAIL_HOST: "mail.hempupcaring.com",
            MAIL_PORT: 465,
            MAIL_USER: "contato@hempupcaring.com",
            MAIL_PASS: "^!#E&lvNV!!lj%SHeoeC",
            REDIS_HOST: "redis-12123.c62.us-east-1-4.ec2.cloud.redislabs.com",
            REDIS_PORT: 12123,
            REDIS_PASS: "FjodLwbtJTPcohc1UoVvZkBCIXQpP6Qa"
        },
        env_development: {
            NODE_ENV: "development",
            PORT: 3334,
            MAIL_HOST: "mail.hempupcaring.com",
            MAIL_PORT: 465,
            MAIL_USER: "contato@hempupcaring.com",
            MAIL_PASS: "^!#E&lvNV!!lj%SHeoeC",
            REDIS_HOST: "localhost",
            REDIS_PORT: 6379,
            REDIS_PASS: ""
        }
    },
    {
        name: "fila-queue",
        watch: true,
        script: "./dist/src/queue.js",
        env_production: {
            NODE_ENV: "production",
            PORT: 3334,
            MAIL_HOST: "mail.hempupcaring.com",
            MAIL_PORT: 465,
            MAIL_USER: "contato@hempupcaring.com",
            MAIL_PASS: "^!#E&lvNV!!lj%SHeoeC",
            REDIS_HOST: "redis-12123.c62.us-east-1-4.ec2.cloud.redislabs.com",
            REDIS_PORT: 12123,
            REDIS_PASS: "FjodLwbtJTPcohc1UoVvZkBCIXQpP6Qa"
        },
    }]
}