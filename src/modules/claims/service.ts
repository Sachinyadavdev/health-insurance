import { claimRepository } from './repository';

export const claimService = {
  submitClaim: async (userId: string, userPolicyId: string, amount: number, description: string) => {
    // We could add logic to check if userPolicy is active, belongs to user, etc.
    return claimRepository.createClaim(userId, userPolicyId, amount, description);
  },

  getUserClaims: async (userId: string) => {
    return claimRepository.getClaimsByUser(userId);
  },

  getAllClaims: async () => {
    return claimRepository.getAllClaims();
  },

  updateClaimStatus: async (claimId: string, status: 'APPROVED' | 'REJECTED') => {
    return claimRepository.updateClaimStatus(claimId, status);
  }
};
