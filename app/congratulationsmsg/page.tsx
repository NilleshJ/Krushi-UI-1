"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; 
export default function SignUp() {
  return (
    <div className="flex flex-col items-center h-screen justify-between px-4">
      {/* Header Section */}
      <div className="flex items-center justify-between w-full max-w-xs mt-6">
        <div className="text-3xl font-bold mt-10">Sign Up</div>
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <Image
            src="profile.png"
            alt="User Icon"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center mt-12">
        <img
          src="handshake.png"
          alt="Logo"
          className="rounded-lg w-28 h-28"
        />
      </div>

      {/* Description Section */}
      <div className="text-center w-full max-w-sm text-gray-600 mt-8 px-4">
        <p className="text-lg font-semibold">Congratulations!</p>
        <p className="mt-4">
          The customer's account has been successfully created. They can now
          log in using their Aadhaar-registered mobile number.
        </p>
        <p className="mt-4">
          A first-time password has been sent via SMS to the customer's mobile.
        </p>
      </div>

      {/* Proceed Button */}
      <div className="flex flex-col items-center w-full max-w-xs mt-12">
        <Button
          type="button"
          className="w-full bg-blue-500 text-white hover:bg-blue-600"
        >
          Proceed
        </Button>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between w-full max-w-xs mt-auto mb-4">
        {/* Monitor Icon */}
        <div className="flex flex-col items-center">
          <img
            src="monitor1.png"
            alt="Monitor Icon"
            className="w-6 h-6"
          />
          <div className="text-sm text-gray-500">Monitor</div>
        </div>

        {/* Sign Up Icon */}
        <div className="flex flex-col items-center">
          <img
            src="signupp.png"
            alt="Sign Up Icon"
            className="w-6 h-6"
          />
          <div className="text-sm text-blue-500">SignUp</div>
        </div>
      </div>
    </div>
  );
}
