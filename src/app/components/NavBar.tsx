"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "../redux/hooks";

import printforgeLogDesktop from '@/public/printforge-logo 1.svg';
import printforgeLogoMobile from '@/public/printforge-logo mobile.svg'
import { LogoutIcon } from "@/public/custom icon/Icon";
import { logoutAuthUser } from "../redux/features/authSlice";

export default function NavBar() {
    const pathName = usePathname();
    const dispatch = useAppDispatch();

    return (
        <nav className="flex flex-row justify-between items-center bg-white">
            <Link href='/' prefetch={false}>
                <div className="hidden px-2 md:block">
                    <Image src={printforgeLogDesktop} alt="PrintForge Logo - Desktop" width={150} height={150} />
                </div>
                <div className="block px-2 md:hidden">
                    <Image src={printforgeLogoMobile} alt="PrintForge Logo - Mobile" width={50} height={50} />
                </div>
            </Link>
            <ul className="flex flex-row justify-between items-center gap-x-2 md:gap-x-5 me-2">
                <li className={`p-3 hover:text-gray-500 ${pathName === '/models' ? 'text-orange-600 border-b-2 border-orange-500' : ''}`}>
                    <Link href="/models" prefetch={false}>3D Models</Link>
                </li>
                <li className={`p-3 hover:text-gray-500 ${pathName === '/about' ? 'text-orange-600 border-b-2 border-orange-500' : ''}`}>
                    <Link href="/about" prefetch={false}>About</Link>
                </li>
                <li className={`p-3 hover:text-gray-500 ${pathName === '/profile' ? 'text-orange-600 border-b-2 border-orange-500' : ''}`}>
                    <Link href="/profile" prefetch={false}>Profile</Link>
                </li>
                <li 
                    className="p-2 hover:text-orange-600 cursor-pointer border-1 border-white hover:border-orange-500"
                    onClick={() => dispatch(logoutAuthUser())}
                >
                    <LogoutIcon width="24" height="24" />
                </li>
            </ul>
        </nav>
    )
}