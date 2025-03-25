import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname.startsWith("/_next") || url.pathname.startsWith("/api")) {
    return NextResponse.next();
  }
  const existingRoutes = ["/", "/login", "/signup"];
  if (existingRoutes.includes(url?.pathname)) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/404", req.url));
}

export const config = {
  matcher: "/:path*",
};
