import prisma from '@/lib/prisma';

export const policyRepository = {
  getAllPolicies: async () => {
    return prisma.policy.findMany();
  },

  getPolicyById: async (id: string) => {
    return prisma.policy.findUnique({ where: { id } });
  },

  buyPolicy: async (userId: string, policyId: string, startDate: Date, endDate: Date) => {
    return prisma.userPolicy.create({
      data: {
        userId,
        policyId,
        startDate,
        endDate,
        status: 'ACTIVE'
      }
    });
  }
};
