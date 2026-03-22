import { NextResponse } from 'next/server';
import { policyService } from './service';

export const policyController = {
  getAllPolicies: async () => {
    try {
      const policies = await policyService.getAllPolicies();
      return NextResponse.json(policies, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  },

  buyPolicy: async (req: Request) => {
    try {
      // In real scenario, authenticate with middleware
      const userId = req.headers.get('x-user-id');
      if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      const body = await req.json();
      if (!body.policyId) {
        return NextResponse.json({ error: 'Missing policyId' }, { status: 400 });
      }

      const userPolicy = await policyService.buyPolicy(userId, body.policyId);
      return NextResponse.json(userPolicy, { status: 201 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }
};
