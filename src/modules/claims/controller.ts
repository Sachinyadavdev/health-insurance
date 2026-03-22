import { NextResponse } from 'next/server';
import { claimService } from './service';

export const claimController = {
  submitClaim: async (req: Request) => {
    try {
      const userId = req.headers.get('x-user-id');
      if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

      const body = await req.json();
      const { userPolicyId, amount, description } = body;
      
      if (!userPolicyId || !amount || !description) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }

      const claim = await claimService.submitClaim(userId, userPolicyId, amount, description);
      return NextResponse.json(claim, { status: 201 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  },

  getUserClaims: async (req: Request) => {
    try {
      const userId = req.headers.get('x-user-id');
      if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

      const claims = await claimService.getUserClaims(userId);
      return NextResponse.json(claims, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }
};
