import jwt from 'jsonwebtoken';
import { env } from '@/config/env';

export const signToken = (payload: any, expiresIn: string = '1d') => {
  return jwt.sign(payload, env.JWT_SECRET as string, { expiresIn: expiresIn as any });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, env.JWT_SECRET as string);
  } catch (error: any) {
    return null;
  }
};
