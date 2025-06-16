"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import printforgeLogDesktop from '@/public/printforge-logo 1.svg';
import printforgeLogoMobile from '@/public/printforge-logo mobile.svg'

export default function NavBar() {
    const pathName = usePathname();

    return (
        <nav className="flex flex-row justify-between items-center bg-white">
            <Link href='/' prefetch={false}>
                <div className="hidden p-2 md:block">
                    <Image src={printforgeLogDesktop} alt="PrintForge Logo - Desktop" width={150} height={150} />
                </div>
                <div className="block p-2 md:hidden">
                    <Image src={printforgeLogoMobile} alt="PrintForge Logo - Mobile" width={50} height={50} />
                </div>
            </Link>
            <ul className="flex flex-row justify-between items-center gap-x-5 me-2">
                <li className={`p-3 hover:text-gray-500 ${pathName === '/modals' ? 'text-orange-600 border-b-2 border-orange-600' : ''}`}>
                    <Link href="/models" prefetch={false}>3D Modals</Link>
                </li>
                <li className={`p-3 hover:text-gray-500 ${pathName === '/about' ? 'text-orange-600 border-b-2 border-orange-600' : ''}`}>
                    <Link href="/about" prefetch={false}>About</Link>
                </li>
            </ul>
        </nav>
    )
}