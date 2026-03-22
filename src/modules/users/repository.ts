import prisma from '@/lib/prisma';

export const userRepository = {
  getUserProfile: async (userId: string) => {
    return prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        policies: {
          include: {
            policy: true
          }
        }
      }
    });
  }
};
