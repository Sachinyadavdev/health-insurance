import { userController } from '@/modules/users/controller';

export async function GET(req: Request) {
  return userController.getProfile(req);
}
