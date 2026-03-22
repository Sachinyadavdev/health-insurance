import { NextResponse } from 'next/server';
import { userService } from './service';

export const userController = {
  getProfile: async (req: Request) => {
    try {
      // In a real app, userId should come from the verified JWT token attached to the request by a middleware
      const userId = req.headers.get('x-user-id');
      if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      const profile = await userService.getProfile(userId);
      return NextResponse.json(profile, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }
};
