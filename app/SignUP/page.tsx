"use client";
import React from "react";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";   
import Image from "next/image"; 
export default function Home() {
  return (
    <div className=" flex flex-col items-center h-screen justify-between px-4">
      {/* Logo Section */}
      <div className="flex justify-center mt-20"> 
        <Image
          src="accm.png" 
          alt="Logo"
          width={116}
          height={115}
          className="rounded-lg"
        />
      </div>

      {/* Form Section */}
      <form className="flex flex-col items-center gap-4 mt-8 w-full max-w-xs">
        {/* Mobile Number Input */}
        <Input
          type="text"
          placeholder="Mobile Number"
          className="w-full"
        />
        {/* Password Input */}
        <Input
          type="password"
          placeholder="Password"
          className="w-full"
        />
        {/* Login Button */}
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white hover:bg-blue-600"
        >
          Login
        </Button>
      </form>

      {/* Footer Section */}
      <div className="flex justify-center mb-4 text-sm text-gray-500">
        Account Manager
      </div>
    </div>
  );
}
