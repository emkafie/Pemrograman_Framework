import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextRequest,
  NextResponse,
  NextMiddleware,
} from "next/server";

const roleAccess: any = {
  "/admin": ["admin"],
  "/editor": ["admin", "editor"],
};

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    if (requireAuth.some((path) => pathname.startsWith(path))) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      if (!token) {
        const Url = new URL("/auth/login", req.url);
        Url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(Url);
      }
      let allowedRoles = ["all"]; // Default fallback
      for (const [path, roles] of Object.entries(roleAccess)) {
        if (pathname.startsWith(path)) {
          allowedRoles = roles as string[];
          break;
        }
      }

      if (allowedRoles[0] !== "all" && !allowedRoles.includes(token.role as string)) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
    return middleware(req, next);
  };
}
