"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function Navbar() {
    const pathnames = usePathname()
    const router = useRouter()
    const handleLogin = () => {
        router.push('/login')
    }
    return (
        <nav className="w-full py-4 bg-gray-800">
            <div className="flex max-w-7xl mx-auto justify-between items-center ">
                <h1 className="font-medium text-white text-2xl">Navbar</h1>
                <ul className="space-x-5 flex items-center">
                    <Link href="/">
                        <li className={`cursor-pointer ${pathnames === "/" ? "text-blue-400" : "text-white"}`}>Home</li>
                    </Link>
                    <Link href="/about">
                        <li className={`cursor-pointer ${pathnames === "/about" ? "text-blue-400" : "text-white"}`}>About</li>
                    </Link>
                    <Link href="/about/profile">
                        <li className={`cursor-pointer ${pathnames === "/profile" ? "text-blue-400" : "text-white"}`}>Profile</li>
                    </Link>
                    <button className="px-6 py-1 bg-blue-500 text-white rounded" onClick={handleLogin} type="button">Login</button>
                </ul>
            </div>
        </nav>
    )
}