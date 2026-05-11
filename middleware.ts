import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Use ONLY this pattern that we know works
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};