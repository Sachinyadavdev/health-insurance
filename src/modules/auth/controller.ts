import { NextResponse } from 'next/server';
import { authService } from './service';
import { signupSchema, loginSchema } from './validation';

export const authController = {
  signup: async (req: Request) => {
    try {
      const body = await req.json();
      const validation = signupSchema.safeParse(body);
      
      if (!validation.success) {
        return NextResponse.json({ error: validation.error.format() }, { status: 400 });
      }

      const result = await authService.signup(validation.data);
      
      const response = NextResponse.json({ user: result.user }, { status: 201 });
      response.cookies.set('token', result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/'
      });
      
      return response;
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  },

  login: async (req: Request) => {
    try {
      const body = await req.json();
      const validation = loginSchema.safeParse(body);
      
      if (!validation.success) {
        return NextResponse.json({ error: validation.error.format() }, { status: 400 });
      }

      const result = await authService.login(validation.data);
      
      const response = NextResponse.json({ user: result.user }, { status: 200 });
      response.cookies.set('token', result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/'
      });
      
      return response;
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  },
  
  logout: async () => {
    const response = NextResponse.json({ message: 'Logged out successfully' });
    response.cookies.set('token', '', { maxAge: 0, path: '/' });
    return response;
  }
};
