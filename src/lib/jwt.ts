import jwt from 'jsonwebtoken';
import { env } from '@/config/env';

export const signToken = (payload: object, expiresIn: string = '1d') => {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};
