"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import BottomNavbar from "@/app/Bottomnavbar";

// Temporary mock API function
const fetchAadhaarDetails = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        fullName: "Dhiraj Patil",
        aadhaarNumber: "12345 4567 7899",
        phoneNumber: "9123456789",
        address: "Abc Floor, Satara\nxyx pqo\nPin 123455",
      });
    }, 1000); // Simulating network delay
  });
};

export default function AadhaarVerification() {
  const router = useRouter();
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAadhaarDetails().then((data) => {
      setDetails(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      {/* Header Section */}
      <div className="w-full max-w-md">
        <button
          className="flex items-center text-blue-600"
          onClick={() => router.push("/New_customer(retail)otp")} // Temporary route
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="ml-2 font-medium">New Customer (Retail)</span>
        </button>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-center mt-4">
        Aadhaar Verification Details
      </h2>

      {/* Loading State */}
      {loading ? (
        <p className="text-gray-600 mt-4">Fetching details...</p>
      ) : (
        <div className="w-full max-w-md mt-4 space-y-3">
          <div>
            <p className="font-medium">Full Name</p>
            <p className="text-blue-600">{details.fullName}</p>
          </div>

          <div>
            <p className="font-medium">Aadhar Number</p>
            <p className="text-blue-600">{details.aadhaarNumber}</p>
          </div>

          <div>
            <p className="font-medium">Phone Number</p>
            <p className="text-blue-600">{details.phoneNumber}</p>
          </div>

          <div>
            <p className="font-medium">Address</p>
            <p className="text-blue-600 whitespace-pre-line">{details.address}</p>
          </div>
        </div>
      )}

      {/* Proceed Button */}
      <Button
        className="w-full max-w-md mt-6 bg-blue-600 hover:bg-blue-700"
        onClick={() => router.push("/New_customer(retail)congratsmsg")} // Temporary route
        disabled={loading} // Disable while loading
      >
        Proceed
      </Button>
      <BottomNavbar activeTab = {" "}/>
    </div>
  );
}
