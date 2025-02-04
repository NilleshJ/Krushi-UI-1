"use client";

import { useRouter } from "next/navigation"; // Import useRouter
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Login() {
  const router = useRouter(); // Initialize useRouter

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload

    // Example: Navigate to 'storeowner1stimelogin' after login
    router.push("/storeonwer1sttimelogin/password");
  };

  return (
    <div
      className="flex items-center justify-center bg-gray-100"
      style={{
        width: "393px", 
        height: "852px", 
        margin: "auto", 
      }}
    >
      <div className="flex flex-col items-center bg-white p-8 shadow-lg rounded-lg w-full h-full">
        {/* Logo */}
        <div className="flex items-center justify-center mt-4">
          <Image
            src="/accm.png"
            alt="Logo"
            width={116}
            height={115}
            style={{
              width: "116px",
              height: "115px",
              opacity: 1,
            }}
          />
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-6 w-full px-6 space-y-4">
          {/* Mobile Number */}
          <Input type="text" placeholder="Mobile Number" className="w-full border border-gray-300 rounded-lg px-3 py-2" />

          {/* Password */}
          <Input type="password" placeholder="Password" className="w-full border border-gray-300 rounded-lg px-3 py-2" />

          {/* Login Button */}
          <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg" onClick={() => router.push("/storeonwer1sttimelogin/password")}>
            Login
          </Button>
        </form>

  
      </div>
    </div>
  );
}
