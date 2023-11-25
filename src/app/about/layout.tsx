import Link from "next/link";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav className="fixed left-0 px-4 top-14 z-10 h-screen w-40 bg-gray-800 " >
                <ul className="space-y-4 flex flex-col text-white">
                    <Link href="/">
                        <li className="cursor-pointer">Home</li>
                    </Link>
                    <Link href="/about">
                        <li className="cursor-pointer">About</li>
                    </Link>
                    <Link href="/about/profile">
                        <li className="cursor-pointer">Profile</li>
                    </Link>
                </ul>
            </nav>
            {children}
        </div>
    )
}