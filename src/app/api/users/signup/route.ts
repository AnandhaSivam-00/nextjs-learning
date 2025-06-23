import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import connectToDatabase from "@/app/dbConfig/dbConfig";
import User from "@/models/userModels";

connectToDatabase();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;

        const user = await User.findOne({email});
        if(user) {
            return NextResponse.json({message: "User with the email already exists!"}, {status: 400});
        }

        // Password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        const savedUser = await new User({ username, email, password: hashedPassword }).save();
        return NextResponse.json({
            message: "User created successfully!",
            success: true,
            savedUser
        }, {status: 201});
    } 
    catch(error: any) {
        return NextResponse.json({
            error: error.message,
            success: false
        }, {status: 500});
    }
}
