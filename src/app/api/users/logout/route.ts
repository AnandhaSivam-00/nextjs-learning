import { NextResponse, NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
    try {
        const response = NextResponse.json({
            message: "Logout successful",
            success: true
        });

        // Clear the token cookie
        response.cookies.set('token', '', { httpOnly: true, expires: new Date(0) });
        console.log(response);
        
        return response;
    }
    catch(error: any) {
        return NextResponse.json({
            message: error.message,
            success: false
        }, {status: 500});
    }
}