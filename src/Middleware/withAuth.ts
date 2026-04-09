import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextRequest,
  NextResponse,
  NextMiddleware,
} from "next/server";

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      if (!token) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
      }
    }
    const res = await middleware(req, next);
    return res || NextResponse.next();
  };
}
