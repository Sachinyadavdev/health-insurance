import { paymentController } from '@/modules/payments/controller';

export async function GET(req: Request) {
  return paymentController.getUserPayments(req);
}

export async function POST(req: Request) {
  return paymentController.makePayment(req);
}
