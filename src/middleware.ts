import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("refresh_token");
  const url = request.nextUrl;

  const isLoginPage = url.pathname.startsWith("/login");
  const isRegisterPage = url.pathname.startsWith("/register");

  if (!token?.value && !isLoginPage && !isRegisterPage) {
    return NextResponse.redirect(new URL("/login", url));
  }
  if (token?.value && (isLoginPage || isRegisterPage)) {
    return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
