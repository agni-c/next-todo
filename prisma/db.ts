import { PrismaClient } from '@prisma/client';

const prismaInstance = global as unknown as { prisma: PrismaClient };

export const prisma =
	prismaInstance.prisma || new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV !== 'production') {
	prismaInstance.prisma = prisma;
}
