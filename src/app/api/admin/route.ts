import { adminController } from '@/modules/admin/controller';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return adminController.getOverview(req);
}
