"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

function GstVerificationComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [gstDetails, setGstDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const gstNumber = searchParams.get("gstNumber");

  useEffect(() => {
    if (gstNumber) {
      // Simulate fetching GST details
      setTimeout(() => {
        setGstDetails({
          gstNumber,
          businessName: "XYZ Pvt Ltd",
          state: "Karnataka",
          registrationDate: "2022-03-01",
        });
        setLoading(false);
      }, 1000);
    }
  }, [gstNumber]);

  const handleProceed = () => {
    router.push("/congratulationsmsg"); // Navigate to the next step
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      {loading ? (
        <p>Loading GST details...</p>
      ) : gstDetails ? (
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-md text-gray-800">
          <h2 className="text-xl font-semibold mb-4">GST Details</h2>
          <p><strong>GST Number:</strong> {gstDetails.gstNumber}</p>
          <p><strong>Business Name:</strong> {gstDetails.businessName}</p>
          <p><strong>State:</strong> {gstDetails.state}</p>
          <p><strong>Registration Date:</strong> {gstDetails.registrationDate}</p>
        </div>
      ) : (
        <p>No GST details found.</p>
      )}

      {/* Proceed Button */}
      <Button
        className="mt-6 bg-blue-500 text-white hover:bg-blue-600"
        onClick={handleProceed}
      >
        Proceed
      </Button>
    </div>
  );
}

export default function GstVerificationPage() {
  return (
    <Suspense fallback={<div className="text-center text-lg">Loading...</div>}>
      <GstVerificationComponent />
    </Suspense>
  );
}