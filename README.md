# hemp-up-backend

**Esse projeto foi um simples projeto para contato de pessoas que visitam o site Hempup e queira entrar em contato com a equipe da empresa
ou seja e um back end com api, so para serviço de envio de e-mails para quem opera o sistema.
e nele foi usado essas tecnologias:**

```
- Bull -> para filas no sistema e operar o email em background
- Express.js
- Typescript
- NodeMail
```

> [!WARNING]
> E nesse projeto aprendi bastante sobre filas(queues) pois era algo que me faltava estudar nessa epoca
  
### Configuração simples

renomeie o arquivo ```.env.example``` para .env e adicone esse conteudo:

```
PORT=3334
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=
##^!#E&lvNV!!lj%SHeoeC

##REDIS_HOST=redis-12123.c62.us-east-1-4.ec2.cloud.redislabs.com
REDIS_HOST=localhost
REDIS_PORT=6379
##6379
```
