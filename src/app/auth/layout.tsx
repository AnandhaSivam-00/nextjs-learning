"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import LoginBanner from "@/public/login-banner.png";
import { GoogleIcon } from "@/public/custom icon/Icon";
import { GitHubIcon } from "@/public/custom icon/Icon";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const pathName = usePathname();

    return (
        <main className="grid md:grid-cols-2 gap-5">
            <section className="m-auto w-auto h-full p-2 flex flex-col justify-center items-start gap-y-5">
                {children}
                <div className={`w-full flex justify-center items-center ${pathName === '/auth/password-reset' ? 'hidden' : 'block'}`}>
                    <p className="text-gray-600 text-base">Or</p>
                </div>
                <div className={`w-full flex justify-center items-center ${pathName === '/auth/password-reset' ? 'hidden' : 'block'}`}>
                    <button className="w-1/2 flex justify-center item-center gap-x-3 border-2 border-black p-2 rounded-md hover:cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
                        <GoogleIcon width="25" height="25"/> 
                        <p>Google</p>
                    </button>
                    <button className="w-1/2 flex justify-center item-center gap-x-3 border-2 border-black p-2 rounded-md hover:cursor-pointer ml-2 hover:bg-black hover:text-white transition-colors duration-300">
                        <GitHubIcon width="25" height="25"/>
                        <p>GitHub</p>
                    </button>
                </div>
            </section>
            <section className="mx-auto w-full h-full">
                <Image
                    src={LoginBanner}
                    alt="Login Banner"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                />
            </section>
        </main>
    )
}