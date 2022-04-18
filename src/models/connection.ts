import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = process.env;
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