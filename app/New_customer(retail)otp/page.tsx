"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import BottomNavbar from "@/app/Bottomnavbar";

export default function OtpVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>(
    new Array(6).fill(null)
  );

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field automatically
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      {/* Header Section */}
      <div className="w-full max-w-md">
        <button
          className="flex items-center text-blue-600"
          onClick={() => router.push("/New_customer(retail)")}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="ml-2 font-medium">New Customer (Retail)</span>
        </button>
      </div>

      {/* Instruction Text */}
      <p className="text-center text-gray-600 mt-4 px-4">
        To add a new customer, complete the customer's KYC by validating their Aadhaar number.
      </p>

      <p className="text-center text-gray-800 font-medium mt-3">
        Enter the OTP sent to the customer’s mobile number
      </p>

      {/* OTP Input Fields */}
      <div className="flex gap-2 mt-4">
        {otp.map((digit, index) => (
          <Input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            value={digit}
            className="w-10 h-10 text-center text-xl border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleBackspace(index, e)}
          />
        ))}
      </div>

      {/* Proceed Button */}
      <Button
        className="w-full max-w-md mt-6 bg-blue-600 hover:bg-blue-700"
        onClick={() => router.push("/New_customer(retail)verification")}
        disabled={otp.some((digit) => digit === "")} // Disable if OTP is incomplete
      >
        Proceed
      </Button>
      <BottomNavbar activeTab = {" "}/>
    </div>
  );
}
