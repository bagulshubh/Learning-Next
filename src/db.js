const { PrismaClient } = require('@prisma/client');

const globalForPrisma = global;
globalForPrisma.prisma = globalForPrisma.prisma || new PrismaClient({
  log: ["query"],
});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = globalForPrisma.prisma;
}

module.exports = {
  prisma: globalForPrisma.prisma,
};
