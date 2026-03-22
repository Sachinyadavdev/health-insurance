import { adminController } from '@/modules/admin/controller';

export async function GET(req: Request) {
  return adminController.getOverview(req);
}
