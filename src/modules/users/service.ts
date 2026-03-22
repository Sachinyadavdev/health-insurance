import { userRepository } from './repository';

export const userService = {
  getProfile: async (userId: string) => {
    const user = await userRepository.getUserProfile(userId);
    if (!user) throw new Error('User not found');
    return user;
  }
};
