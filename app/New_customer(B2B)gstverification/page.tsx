"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

const NewCustomer = () => {
  const router = useRouter();

  // Static Data (Simulating API Response)
  const customerData = {
    businessName: "Reliance Industries Pvt. Ltd.",
    gstinStatus: "Active",
    gstin: "9123456789",
    stateJurisdiction: "Maharashtra",
    address: "Ground Floor, Tukmirpur, No.123/169, PIN 110094",
    stateOfCustomer: "Intra-State",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white mt-48">
      {/* Header */}
      <div className="p-4 flex items-center gap-2 border-b shadow-sm bg-white fixed top-0 left-0 w-full z-10 mt-48">
        <button
          className="flex items-center text-blue-600"
          onClick={() => router.push("/New_customer(B2B)")} // Temporary route
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="ml-2 font-medium">New Customer (Business)</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 mt-14"> {/* Adjusted margin for fixed header */}
        <h3 className="text-center text-lg font-semibold">GST Verification Details</h3>
        <Card className="mt-4 p-4 shadow-md">
          <CardContent>
            <p className="text-sm font-semibold">Business Name</p>
            <p className="text-blue-600">{customerData.businessName}</p>

            <p className="mt-2 text-sm font-semibold">GSTIN Status</p>
            <p className="text-blue-600">{customerData.gstinStatus}</p>

            <p className="mt-2 text-sm font-semibold">GSTIN</p>
            <p className="text-blue-600">{customerData.gstin}</p>

            <p className="mt-2 text-sm font-semibold">State Jurisdiction</p>
            <p className="text-blue-600">{customerData.stateJurisdiction}</p>

            <p className="mt-2 text-sm font-semibold">Address</p>
            <p className="text-blue-600">{customerData.address}</p>

            <p className="mt-2 text-sm font-semibold">State of Customer</p>
            <p className="text-blue-600">{customerData.stateOfCustomer}</p>
          </CardContent>
        </Card>
      </div>

      {/* Sticky Button & Bottom Navbar */}
      <div className="fixed bottom-16 left-0 w-full p-4 bg-white shadow-md mb-32">
        <Button
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => router.push("/New_customer(B2B)congratsmsg")} // Change to actual route
        >
          Proceed
        </Button>
      </div>

      {/* Global Bottom Navbar */}
      <BottomNavbar activeTab="" />
    </div>
  );
};

export default NewCustomer;
