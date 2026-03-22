import prisma from '@/lib/prisma';

export const claimRepository = {
  createClaim: async (userId: string, userPolicyId: string, amount: number, description: string) => {
    return prisma.claim.create({
      data: {
        userId,
        userPolicyId,
        amount,
        description,
        status: 'PENDING'
      }
    });
  },

  getClaimsByUser: async (userId: string) => {
    return prisma.claim.findMany({
      where: { userId },
      include: {
        userPolicy: {
          include: { policy: true }
        }
      }
    });
  },
  
  getAllClaims: async () => {
    return prisma.claim.findMany({
      include: {
        user: { select: { name: true, email: true } },
        userPolicy: { include: { policy: true } }
      }
    });
  },

  updateClaimStatus: async (id: string, status: 'APPROVED' | 'REJECTED') => {
    return prisma.claim.update({
      where: { id },
      data: { status }
    });
  }
};
