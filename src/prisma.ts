/* Prisma client loader that prefers the locally generated client (generated\\prisma) and falls back to @prisma/client */
let PrismaClientCtor: any;

try {
  // Prefer the locally generated client which exists in this repo
  // Path: projectRoot/generated/prisma (from src/prisma.ts go up one level)
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const generated = require("../generated/prisma");
  PrismaClientCtor = (generated as any).PrismaClient ?? (generated as any);
} catch (_e) {
  // Fallback to installed @prisma/client
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const PrismaPkg = require("@prisma/client");
  PrismaClientCtor = (PrismaPkg as any).PrismaClient ?? (PrismaPkg as any);
}

const globalForPrisma = globalThis as unknown as { prisma?: any };

export const db = globalForPrisma.prisma ?? new PrismaClientCtor();

// Cache the instance in dev to avoid creating multiple clients during hot-reload
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
