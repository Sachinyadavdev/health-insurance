# HealthGuard Insurance App - Run Instructions

## Prerequisites
- Node.js 18.x or later
- A running MySQL Database (local or cloud)

## 1. Environment Setup
Rename or create a `.env` file in the root of the project with the following variables:
```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/health_insurance"
JWT_SECRET="your_very_secure_secret_key"
NODE_ENV="development"
```
*(Note: I have generated a local `.env` file pointing to `localhost:3306`. Update it if your database credentials differ.)*

## 2. Install Dependencies
```bash
npm install
```

## 3. Database Initialization (Prisma)
Generate the Prisma Client so your application can securely type-check and query the database:
```bash
npx prisma generate
```

Push the schema to your MySQL database to create all the necessary tables (`users`, `policies`, `userPolicies`, `claims`, `payments`, `documents`):
```bash
npx prisma db push
```

## 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 5. Next Steps
- Visit `/signup` to create a new user account.
- Visit `/login` to access the personalized `/dashboard`.
- The dashboard is protected via Next.js Middleware which automatically verifies JWT tokens stored in HTTP-only cookies.
- Visit `/plans` to see the beautiful animated framing of health plans.
