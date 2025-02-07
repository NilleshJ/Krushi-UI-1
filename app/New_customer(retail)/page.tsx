"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import BottomNavbar from "@/app/Bottomnavbar";

export default function NewCustomer() {
  const router = useRouter();
  const [aadhaar, setAadhaar] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      {/* Header Section */}
      <div className="w-full max-w-md">
        <button
          className="flex items-center text-blue-600"
          onClick={() => router.push("/New_customer")} // Change this to your previous route
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="ml-2 font-medium">New Customer (Retail)</span>
        </button>
      </div>

      {/* Instruction Text */}
      <p className="text-center text-gray-600 mt-4 px-4">
        To add a new customer, complete the customer's KYC by validating their Aadhaar number.
      </p>

      {/* Input Field */}
      <div className="w-full max-w-md mt-6">
        <Input
          type="text"
          placeholder="Aadhaar Number"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={aadhaar}
          onChange={(e) => setAadhaar(e.target.value)}
        />
      </div>

      {/* Proceed Button */}
      <Button
        className="w-full max-w-md mt-4 bg-blue-600 hover:bg-blue-700"
        onClick={() => router.push("/New_customer(retail)otp")} // Change this to your next route
      >
        Proceed
      </Button>

      {/* Global Bottom Navbar (Imported Automatically) */}
      <BottomNavbar activeTab = {" "}/>
    </div>
    
  );
}
