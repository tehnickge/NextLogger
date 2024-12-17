import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'error', 'warn'], // Логирование запросов и ошибок
  });

export default prisma;