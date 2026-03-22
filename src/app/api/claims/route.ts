import { claimController } from '@/modules/claims/controller';

export async function GET(req: Request) {
  return claimController.getUserClaims(req);
}

export async function POST(req: Request) {
  return claimController.submitClaim(req);
}
