import { policyRepository } from './repository';

export const policyService = {
  getAllPolicies: async () => {
    return policyRepository.getAllPolicies();
  },

  buyPolicy: async (userId: string, policyId: string) => {
    const policy = await policyRepository.getPolicyById(policyId);
    if (!policy) throw new Error('Policy not found');

    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + policy.term);

    const userPolicy = await policyRepository.buyPolicy(userId, policyId, startDate, endDate);
    return userPolicy;
  }
};
