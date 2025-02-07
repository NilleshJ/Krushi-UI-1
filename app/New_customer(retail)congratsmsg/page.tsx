"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";
export default function NewCustomerPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      {/* Header Section */}
      <div className="w-full max-w-md">
        <button
          className="flex items-center text-blue-600"
          onClick={() => router.push("/New_customer(retail)verification")} // Temporary route
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="ml-2 font-medium">New Customer (Retail)</span>
        </button>
      </div>

      {/* Success Message */}
      <div className="flex flex-col items-center mt-10 space-y-4">
        <img
          src="/handshake.png" // Replace with actual success icon path
          alt="Success"
          className="w-16 h-16"
        />
        <h2 className="text-lg font-semibold">Congratulations!</h2>
        <p className="text-gray-600">
          The customer’s account has been successfully created
        </p>
      </div>

      {/* Done Button */}
      <div className="w-full fixed bottom-20 px-4">
        <Button
          className="w-full bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => router.push("/customer")} // Change to your desired route
        >
          Done
        </Button>
      </div>
      <BottomNavbar activeTab = {" "}/>
    </div>
  );
}
