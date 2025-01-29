"use client";

import React from "react";
import { Button } from "@/components/ui/button"; 
import Image from "next/image";   

export default function SignUp() {
  return (
    <div className="flex flex-col items-center h-screen justify-between px-4">
      {/* Header Section */}
      <div className="flex items-center justify-between w-full max-w-xs mt-6">
        <div className="text-3xl w-32 h-9 font-bold mt-10">Sign Up</div>
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          {/* Placeholder for User Icon */}
          <Image
            src="/profile.png" 
            alt="User Icon"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
        {/* Form Section */}
      <form className="flex flex-col items-center gap-4 mt-16 w-full max-w-xs">
        
        {/* Proceed Button */}
        <Button
          type="submit"
          className="w-full mt-96 bg-blue-500 text-white hover:bg-blue-600"
        >
          Proceed
        </Button>
      </form>
     

      {/* Footer Navigation */}
      <div className="flex justify-between w-full max-w-xs mt-auto mb-4">
        {/* Monitor Icon */}
        <div className="flex flex-col items-center">
          <img
            src="/monitor1.png" 
            alt="Monitor Icon"
            className="w-6 h-6"
          />
          <div className="text-sm text-gray-500">Monitor</div>
        </div>

        {/* Sign Up Icon */}
        <div className="flex flex-col items-center">
          <img
            src="/signupp.png" 
            alt="Sign Up Icon"
            className="w-6 h-6"
          />
          <div className="text-sm text-blue-500">SignUp</div>
        </div>
      </div>
    </div>
  );
}
