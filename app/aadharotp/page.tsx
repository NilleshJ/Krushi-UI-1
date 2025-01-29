"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Updated to use the Next.js <Image /> component

export default function SignUp() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move focus to the next input box if the value is filled
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move focus to the previous box on backspace
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-between px-4">
      {/* Header Section */}
      <div className="flex items-center justify-between w-full max-w-xs mt-6">
        <div className="text-3xl w-32 h-9 font-bold mt-10">Sign Up</div>
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <Image
            src="/profile.png"
            alt="User Icon"
            className="rounded-full"
            width={64}
            height={64} // Recommended usage for <Image />
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="text-center w-96 h-16 mt-40 text-gray-600 px-4">
        Enter the OTP sent to the customer's mobile number
      </div>

      {/* Form Section */}
      <form className="flex flex-col items-center gap-4 mt-16 w-full max-w-xs">
        <div className="flex justify-between gap-2 w-full">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              value={digit}
              maxLength={1}
              className="w-10 h-10 border border-gray-300 text-center text-lg rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleOtpChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white hover:bg-blue-600"
        >
          Proceed
        </Button>
      </form>

      {/* Footer Navigation */}
      <div className="flex justify-between w-full max-w-xs mt-auto mb-4">
        <div className="flex flex-col items-center">
          <Image src="/monitor1.png" alt="Monitor Icon" width={24} height={24} />
          <div className="text-sm text-gray-500">Monitor</div>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/signupp.png" alt="Sign Up Icon" width={24} height={24} />
          <div className="text-sm text-blue-500">SignUp</div>
        </div>
      </div>
    </div>
  );
}
