"use client";

import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { decryptData } from '@/types/webCrypto';

const UserNav = dynamic(() => import('./user-nav'), { ssr: false });
const MobileSidebar = dynamic(() => import('./mobile-sidebar'), { ssr: false });

export default function Header() {
  const [user, setUser] = useState<any>(null); // Initialize user state
  const [name, setName] = useState("Welcome");
  const [isUpdated, setUpdate] = useState(false);

  useEffect(() => {
    const encryptedUserInfo = localStorage.getItem("OD_U");
    if (encryptedUserInfo) {
      const userInfo = decryptData(encryptedUserInfo);
      if (userInfo) {
        setUser(userInfo);
        setName([userInfo?.firstName, userInfo?.lastName].filter(Boolean).join(' ') || 'Welcome');
        setUpdate(!isUpdated);
      }
    }
  }, [])

  return (
    <header className="sticky inset-x-0 top-0 w-full bg-card border-b-2 p-0.5 border-border flex justify-between pl-7">
      <form className="flex items-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          </div>
          <input type="text" id="simple-search" className="bg-card border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-1.5" placeholder="Search..." required />
        </div>
      </form>
      <nav className="flex items-center justify-between px-4 py-2.5 md:justify-end">
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>
        <div className="flex items-center justify-between gap-2">
          <UserNav />
          <div className="flex-col space-y-1 hidden lg:flex">
            <p className="text-sm font-medium leading-none capitalize">
              {name}
            </p>
            <p className="text-xs leading-none text-slate-500">
              {user?.email}
            </p>
          </div>
          {/* <ThemeToggle /> */}
        </div>
      </nav>
    </header>
  );
}
