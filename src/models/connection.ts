import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
// implementação do prisma se deu após observar o repositorio do luiz Furtado : https://github.com/tryber/sd-014-c-project-trybesmith/pull/36 
// materiais utilizado para aprendizagem do prisma https://www.prisma.io/ | https://www.youtube.com/watch?v=nuLTwqPNq-w&t=3447s
dotenv.config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = process.env;
// source: https://github.com/prisma/prisma/discussions/3561#discussioncomment-1551839 
export const prisma = new PrismaClient({ datasources: {
  db: {
    url: `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}/Trybesmith?schema=public`,
  },
} });
const connection = mysql2.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

export default connection;