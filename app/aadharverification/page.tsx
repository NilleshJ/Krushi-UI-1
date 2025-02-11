"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

// Disable SSR to avoid the prerendering issue
const AadharVerification = dynamic(() => Promise.resolve(AadharVerificationComponent), { ssr: false });

function AadharVerificationComponent() {
  const [userDetails, setUserDetails] = useState<any>(null);
  const searchParams = useSearchParams();
  const aadharNumber = searchParams.get("aadharNumber");
  const router = useRouter();

  useEffect(() => {
    // Mock user details since API isn't set up yet
    if (aadharNumber) {
      setTimeout(() => {
        setUserDetails({
          name: "John Doe",
          phone: "9876543210",
          aadhaarNumber: aadharNumber,
          address: "123 Main St, City, Country",
        });
      }, 1000); // Simulate loading delay
    }
  }, [aadharNumber]);

  return (
    <div className="flex flex-col min-h-screen px-4 bg-gray-50 pt-6 pb-20 md:px-6 md:pt-8 lg:px-8 lg:pt-10">
      <div className="flex-grow flex flex-col items-center justify-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          User Details
        </h2>

        {/* Show loading screen while fetching data */}
        {!userDetails ? (
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg font-medium text-gray-600">Loading...</p>
            <button
              onClick={() =>
                setUserDetails({
                  name: "Test User",
                  phone: "1234567890",
                  aadhaarNumber: "1234-5678-9012",
                  address: "Sample Address",
                })
              }
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Load Dummy Data
            </button>
          </div>
        ) : (
          <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 mb-6">
            <p className="text-lg text-gray-700 mb-2">
              <strong>Name:</strong> {userDetails.name}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Phone:</strong> {userDetails.phone}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Aadhaar Number:</strong> {userDetails.aadhaarNumber}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Address:</strong> {userDetails.address}
            </p>
          </div>
        )}
      </div>

      <div className="w-full max-w-md flex justify-center mt-auto mb-24">
        <button
          onClick={() => router.push(`/gstno`)} // Navigate to the next page
          className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default AadharVerification;
