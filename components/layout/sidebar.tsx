'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { DashboardNav } from '@/components/dashboard-nav';
import { navItems as allNavItems } from '@/constants/data';
import { cn } from '@/lib/utils';
import { ArrowLeftToLine } from 'lucide-react';
import { useSidebar } from '@/hooks/useSidebar';
import Link from 'next/link';
import { decryptData } from '@/types/webCrypto';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();
  const [adminType, setAdminType] = useState<string | null>(null);
  const [navItems, setNavItems] = useState(allNavItems)
  
  const handleToggle = () => {
    toggle();
  };

  // useEffect(() => {
  //   // Access localStorage and parse the user info
    
  //   const userInfo = localStorage.getItem('OD_U');
  //   if (userInfo) {
  //     const parsedUserInfo = JSON.parse(userInfo); // Parse the JSON string
  //     const userType = parsedUserInfo.adminType; // Extract adminType
  //     setAdminType(userType);

  //     // Filter nav items based on adminType
  //     const filteredItems =
  //       userType === 'SUPERADMIN'
  //         ? allNavItems
  //         : allNavItems.filter((item) => item.title !== 'Viewers');
  //     setNavItems(filteredItems);
  //   }
  // }, []);
  useEffect(() => {
    // Access encrypted user info from localStorage
    const encryptedUserInfo = localStorage.getItem("OD_U");

    if (encryptedUserInfo) {
        try {
            // Decrypt the data
            const decryptedUserInfo = decryptData(encryptedUserInfo);

            if (decryptedUserInfo) {
                // Set adminType and nav items only if they are different
                setAdminType((prevAdminType) => {
                    if (prevAdminType !== decryptedUserInfo.adminType) {
                        return decryptedUserInfo.adminType;
                    }
                    return prevAdminType;
                });

                setNavItems((prevNavItems) => {
                    const filteredItems =
                        decryptedUserInfo.adminType === "SUPERADMIN"
                            ? allNavItems
                            : allNavItems.filter((item) => item.title !== "Viewers");
                    
                    // Update only if nav items have changed
                    if (JSON.stringify(prevNavItems) !== JSON.stringify(filteredItems)) {
                        return filteredItems;
                    }
                    return prevNavItems;
                });
            } else {
                console.error("Failed to decrypt user info.");
            }
        } catch (error) {
            console.error("Error decrypting user info:", error);
        }
    }
}, []); // Empty dependency array ensures it runs only once

  return (
    <aside
      className={cn(
        `relative  hidden h-screen flex-none border-r bg-card transition-[width] duration-500 md:block`,
        !isMinimized ? 'w-72' : 'w-[72px]',
        className
      )}
    >
      <div className="hidden p-5 py-4 lg:block border-b-2 border-border">
        <Link
          href={'https://github.com/Kiranism/next-shadcn-dashboard-starter'}
          target="_blank"
          className='flex text-primary'
        >
          {!isMinimized ? (
            <Image src="/logo.png" width={200} height={200} alt="icon" className="mr-2 h-6 w-28" />
          ) : (
            <Image src="/favicon.png" width={200} height={200} alt="icon" className="mr-2 h-6 w-6" />
          )}
        </Link>

      </div>
      <div className={cn(
        'absolute -right-3 top-4 z-50 flex items-center justify-center h-7 w-7 cursor-pointer rounded-lg border-2 border-border bg-card text-border '
      )}>
        <ArrowLeftToLine
          className={cn(
            'text-border h-5 w-5',
            isMinimized && 'rotate-180'
          )}
          onClick={handleToggle}
        />
      </div>
      <div className="space-y-4">
        <div className="py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </aside>
  );
}
