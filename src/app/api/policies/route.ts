import { policyController } from '@/modules/policies/controller';

export const dynamic = 'force-dynamic';

export async function GET() {
  return policyController.getAllPolicies();
}

export async function POST(req: Request) {
  return policyController.buyPolicy(req);
}
