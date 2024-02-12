import { withAuth } from "next-auth/middleware"
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        console.log(req.nextauth.token)
        if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "admisn") {
            return NextResponse.redirect(new URL("/403", req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                console.log(NextRequest.nextUrl);
                return (
                    !!token
                )
            }
        },
    }
)

export const config = { matcher: ["/admin/:path*", "/test1"] }

// import { withAuth } from "next-auth/middleware";
// import { NextRequest, NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req) {
//     if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "admin") {
//       return NextResponse.rewrite(
//         new URL("/auth/login?message=Not Authorized", req.url)
//       );
//     }

//     if (req.nextUrl.pathname.startsWith("/user") && req.nextauth.token?.role !== "user") {
//       return NextResponse.rewrite(
//         new URL("/auth/login?message=Not Authorized", req.url)
//       );
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   }
// );

// export const config = {
//   matcher: ["/admin/:path*", "/user/:path*"],
// };