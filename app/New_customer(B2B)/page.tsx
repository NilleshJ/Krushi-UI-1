"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BottomNavbar from "@/app/Bottomnavbar";

const NewCustomer = () => {
  const router = useRouter();
  const [gstNumber, setGstNumber] = useState("");
  const [error, setError] = useState("");

  // Static list (Replace this with API call later)
  const validGSTNumbers = ["22AAAAA0000A1Z5", "33BBBBB1111B2Z6"];

  // Handle GST Validation
  const handleProceed = () => {
    if (!gstNumber) {
      setError("GST Number is required");
      return;
    }

    if (!/^([0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1})$/.test(gstNumber)) {
      setError("Invalid GST Number format");
      return;
    }

    if (!validGSTNumbers.includes(gstNumber)) {
      setError("GST Number not found");
      return;
    }

    setError("");
    router.push("/New_customer(B2B)gstverification"); // Navigate on success
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      {/* Header Section */}
      <div className="w-full max-w-md">
        <button
          className="flex items-center text-blue-600"
          onClick={() => router.push("/New_customer")} // Temporary route
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="ml-2 font-medium">New Customer (business)</span>
        </button>
      </div>

      {/* Info Text */}
      <p className="text-gray-600 text-sm mt-3 text-center px-4">
        To add a new Business Customer, complete the customer's business verification by validating their GST number.
      </p>

      {/* Input Card */}
      <Card className="p-4 mt-4 w-full max-w-lg">
        <Input
          placeholder="GST Number"
          value={gstNumber}
          onChange={(e) => setGstNumber(e.target.value)}
          className="w-full text-center text-lg px-4 py-2"
        />
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      </Card>

      {/* Proceed Button */}
      <Button className="w-full max-w-lg mt-4" onClick={handleProceed}>
        Proceed
      </Button>
      
      {/* Bottom Navbar */}
      <BottomNavbar activeTab="" />
    </div>
  );
};

export default NewCustomer;
