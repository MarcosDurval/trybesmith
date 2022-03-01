import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = process.env;
// source: https://github.com/prisma/prisma/discussions/3561#discussioncomment-1551839 
const prisma = new PrismaClient({ datasources: {
  db: {
    url: `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}/Trybesmith?schema=public`,
  },
} });

export default prisma;