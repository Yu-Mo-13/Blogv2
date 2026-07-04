import { get } from "@vercel/edge-config";
import { NextResponse, type NextRequest } from "next/server";

const MAINTENANCE_PATH = "/maintenance";
const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === MAINTENANCE_PATH || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  try {
    const isInMaintenanceMode = await get<boolean>("isInMaintenanceMode");

    if (isInMaintenanceMode === true) {
      const url = request.nextUrl.clone();
      url.pathname = MAINTENANCE_PATH;
      url.search = "";

      const response = NextResponse.rewrite(url, { status: 503 });
      response.headers.set("Retry-After", "3600");
      return response;
    }
  } catch {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};
