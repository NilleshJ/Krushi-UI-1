"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter

export default function Login() {
  const router = useRouter(); // Initialize router

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload

    // Navigate to the next page (update the path as needed)
    router.push("/storeonwer1sttimelogin/startplan"); 
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
      {/* Card Container */}
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
        <p>Create your password</p>

        {/* Form */}
        <form className="mt-6 w-full px-6 space-y-4" onSubmit={handleLogin}>
          {/* Mobile Number */}
          <Input
            type="text"
            placeholder="New Number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />

          {/* Password */}
          <Input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />

          {/* Login Button */}
          <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
