import { authController } from '@/modules/auth/controller';

export async function POST() {
  return authController.logout();
}
