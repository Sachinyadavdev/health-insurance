import { paymentRepository } from './repository';
import { randomUUID } from 'crypto';

export const paymentService = {
  processPayment: async (userId: string, policyId: string, userPolicyId: string, amount: number) => {
    // Mock processing logic (e.g., integrating Stripe)
    const transId = `txn_${randomUUID()}`;
    return paymentRepository.createPayment(userId, policyId, userPolicyId, amount, transId);
  },

  getUserPayments: async (userId: string) => {
    return paymentRepository.getPaymentsByUser(userId);
  },

  getAllPayments: async () => {
    return paymentRepository.getAllPayments();
  }
};
