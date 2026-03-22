import { authController } from '@/modules/auth/controller';

export async function POST(req: Request) {
  return authController.login(req);
}
