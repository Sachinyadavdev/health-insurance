import prisma from '@/lib/prisma';
import { SignupInput } from './validation';

export const authRepository = {
  findUserByEmail: async (email: string) => {
    return prisma.user.findUnique({ where: { email } });
  },

  createUser: async (data: SignupInput, passwordHash: string) => {
    return prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      }
    });
  }
};
