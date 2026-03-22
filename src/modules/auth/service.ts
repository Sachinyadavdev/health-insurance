import bcrypt from 'bcryptjs';
import { authRepository } from './repository';
import { SignupInput, LoginInput } from './validation';
import { signToken } from '@/lib/jwt';

export const authService = {
  signup: async (data: SignupInput) => {
    const existingUser = await authRepository.findUserByEmail(data.email);
    if (existingUser) {
      throw new Error('User already exists with this email');
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(data.password, salt);

    const user = await authRepository.createUser(data, passwordHash);
    const token = signToken({ id: user.id, email: user.email, role: user.role });

    return { user, token };
  },

  login: async (data: LoginInput) => {
    const user = await authRepository.findUserByEmail(data.email);
    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      throw new Error('Invalid email or password');
    }

    const token = signToken({ id: user.id, email: user.email, role: user.role });

    return { 
      user: { id: user.id, name: user.name, email: user.email, role: user.role }, 
      token 
    };
  }
};
