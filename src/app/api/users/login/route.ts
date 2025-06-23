import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "@/models/userModels";
import connectToDatabase from "@/app/dbConfig/dbConfig";

connectToDatabase();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;

        // Check if user exists
        const user = await User.findOne({email});
        if(!user) {
            return NextResponse.json({
                message: `User with this email ${email} is not found`,
                success: false
            }, {status: 404});
        }

        // Validating the pssword if the user is found
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return NextResponse.json({
                message: "Invalid password",
                success: false
            }, {status: 401});
        }

        // Creating a session token data
        const sessionTokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        }
        const token = await jwt.sign(sessionTokenData, process.env.TOKEN_SECRET!, {expiresIn: '1d'});
        // Setting the token in cookies
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            user
        });
        response.cookies.set('token', token, { httpOnly: true });

        return response;
    } 
    catch(error: any) {
        return NextResponse.json({
            error: error.message,
            success: false
        }, {status: 500});
    }
}