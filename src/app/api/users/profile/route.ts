import { userController } from '@/modules/users/controller';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return userController.getProfile(req);
}
