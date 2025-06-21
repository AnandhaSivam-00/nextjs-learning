"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function LoginPage() {

    return (
        <>
            <h1 className="text-5xl font-bold">Login</h1>
            <div className="min-w-sm flex flex-col justify-start items-center gap-y-5 p-5 border-2 border-gray-700 rounded-lg">
                <form method="POST" className="w-full flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-5 w-full">
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="email"><p>Email</p></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="p-2 border border-gray-300 rounded-md"
                                required />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="password"><p>Password</p></label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="p-2 border border-gray-300 rounded-md"
                                required />
                            <Link href="/auth/password-reset" className="text-orange-600 hover:underline mt-1 text-xs place-self-end">
                                <p>Forgot Password?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-3/5 mt-2 border-2 border-black uppercase p-3 hover:bg-black hover:text-white hover:cursor-pointer transition-colors duration-300"
                        >
                            Login
                        </button>
                    </div>
                    <p className="mt-3 text-gray-600">
                        Don't have an account? <Link href="/auth/signup" className="text-orange-600 hover:underline">Register</Link>
                    </p>
                </form>
            </div>
        </>
    )
}