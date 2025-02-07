import Image from 'next/image';
import { Home, Search, PlusCircle, User } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="">
            {/* Header Navigation */}
            {/* <header className="sticky inset-x-0 top-0 w-full bg-transparent border-b-2 p-2 border-border flex items-center justify-between">
                <div className="text-2xl font-bold">Sign Up</div>
                <nav className="flex items-center justify-between md:justify-end">
                    <Image
                        src="/profile.png"
                        alt="User Icon"
                        className="rounded-full"
                        width={40}
                        height={40}
                    />
                </nav>
            </header> */}
            {/* Main Content */}
            <main className="flex-1 p-0">
                {children}
            </main>
            {/* Footer Navigation */}
            {/* <div className="fixed bottom-0 left-0 w-full bg-transparent border-t shadow-md p-2 md:hidden">
                <div className="flex justify-between items-center px-4">
                    <Link href="/">
                        <div className="flex flex-col items-center text-gray-600 hover:text-black">
                            <Home className="w-6 h-6" />
                            <span className="text-xs">Monitor</span>
                        </div>
                    </Link>
                    <Link href="/profile">
                        <div className="flex flex-col items-center text-blue-500 hover:text-black">
                            <User className="w-6 h-6" />
                            <span className="text-xs">Sign up</span>
                        </div>
                    </Link>
                </div>
            </div> */}
        </div>
    )
}