import { paymentController } from '@/modules/payments/controller';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return paymentController.getUserPayments(req);
}

export async function POST(req: Request) {
  return paymentController.makePayment(req);
}
