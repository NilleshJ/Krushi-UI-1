"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Use next/image for optimized image handling
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function SignUp() {
  const router = useRouter();

  const handleProceed = () => {
    // Navigate to the next page
    router.push("/signin"); // Replace "/next-page" with your actual route
  };

  return (
    <div className="flex flex-col items-center justify-between h-full px-4">

      {/* Logo Section */}
      <div className="flex justify-center mt-12">
        <Image
          src="/handshake.png" // Ensure the image path is correct
          alt="Logo"
          className="rounded-lg w-28 h-28"
          width={112} // Set width for better image handling with next/image
          height={112} // Set height for next/image optimization
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
          onClick={handleProceed} // Call handleProceed on click
        >
          Done
        </Button>
      </div>

    </div>
  );
}
