"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUp() {
  const [gstNumber, setGstNumber] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // GST Validation Regex
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!gstRegex.test(gstNumber)) {
      setError("Please enter a valid GST number");
    } else {
      setError("");
      // Navigate to the next page
      router.push("/gstverification"); // Replace with your actual route
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      {/* Description Section */}
      <div className="text-center w-full max-w-md text-gray-600 px-4 mb-6">
        <p>
          To create a new store, complete the customer's business verification
          by validating their GST number.
        </p>
      </div>

      {/* Form Section */}
      <form
        className="flex flex-col items-center w-full max-w-md"
        onSubmit={handleSubmit}
      >
        {/* GST Number Input */}
        <Input
          type="text"
          placeholder="GST Number"
          value={gstNumber}
          onChange={(e) => setGstNumber(e.target.value)}
          className={`w-full px-4 py-3 text-lg mt-4 ${
            error ? "border-red-500" : ""
          }`}
        />
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        
        {/* Proceed Button */}
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white hover:bg-blue-600 py-3 text-lg mt-4"
        >
          Proceed
        </Button>
      </form>
    </div>
  );
}
