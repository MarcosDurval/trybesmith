# Trybesmith

A aplicação é um CRUD de itens medievais
### Tecnologias usadas
Typescript, prisma, express, Joi e Swagger para documentar as rotas

### Instruções para rodar
crie um arquivo .env dentro do diretório backend e siga o exemplo do .env.example.

no mesmo diretório do docker-compose
execute:
```
docker-compose up --build -d
```
### Acesso ao Swagger:

Podera ser acessado através do seu http://localhost:3001/docs
### Removendo a aplicação
execute:
```
docker-compose down --remove-orphans
```
