import { NextResponse } from 'next/server';
import { paymentService } from './service';

export const paymentController = {
  makePayment: async (req: Request) => {
    try {
      const userId = req.headers.get('x-user-id');
      if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

      const body = await req.json();
      const { userPolicyId, amount } = body;
      
      if (!userPolicyId || !amount) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }

      const payment = await paymentService.processPayment(userId, userPolicyId, amount);
      return NextResponse.json(payment, { status: 201 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  },

  getUserPayments: async (req: Request) => {
    try {
      const userId = req.headers.get('x-user-id');
      if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

      const payments = await paymentService.getUserPayments(userId);
      return NextResponse.json(payments, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }
};
