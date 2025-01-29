'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { decryptData } from '@/types/webCrypto';

const UserNav = () => {
  const router = useRouter();
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

  const handleLogOut = () => {
    router.push('/');
    typeof window !== "undefined" && localStorage.removeItem("OD_T");
    typeof window !== "undefined" && localStorage.removeItem("OD_U")
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full ml-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={''}
                alt={''}
              />
              <AvatarFallback>{user && user?.firstName?.charAt(0)}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none capitalize">
                {name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => router.push('/settings')}>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/settings')}>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleLogOut()} className='cursor-pointer'>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
export default UserNav;