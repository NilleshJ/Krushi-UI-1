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
            <header className="sticky inset-x-0 top-0 w-full bg-transparent border-b-2 p-2 border-border flex items-center justify-between">
                <div className="text-2xl font-bold">Today</div>
                <nav className="flex items-center justify-between md:justify-end">
                    <Image
                        src="/profile.png"
                        alt="User Icon"
                        className="rounded-full"
                        width={40}
                        height={40}
                    />
                </nav>
            </header>
            {/* Main Content */}
            <main className="flex-1 p-0">
                {children}
            </main>
            
        </div>
    )
}