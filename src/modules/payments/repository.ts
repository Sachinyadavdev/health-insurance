import prisma from '@/lib/prisma';

export const paymentRepository = {
  createPayment: async (userId: string, userPolicyId: string, amount: number, transId: string) => {
    return prisma.payment.create({
      data: {
        userId,
        userPolicyId,
        amount,
        transId,
        status: 'COMPLETED'
      }
    });
  },

  getPaymentsByUser: async (userId: string) => {
    return prisma.payment.findMany({
      where: { userId },
      include: {
        userPolicy: {
          include: { policy: true }
        }
      }
    });
  },
  
  getAllPayments: async () => {
    return prisma.payment.findMany({
      include: {
        user: { select: { name: true, email: true } },
      }
    });
  }
};
