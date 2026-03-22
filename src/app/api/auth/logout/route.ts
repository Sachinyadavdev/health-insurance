import { authController } from '@/modules/auth/controller';

export const dynamic = 'force-dynamic';

export async function POST() {
  return authController.logout();
}
