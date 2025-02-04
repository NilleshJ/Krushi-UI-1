"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const PaymentSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup function to clear timeout if the component unmounts
  }, [router]);

  return (
    <div
      className="flex flex-col items-center justify-between bg-white min-h-screen p-4"
      style={{
        width: "393px",
        height: "auto",
        margin: "auto",
      }}
    >
      {/* First Logo */}
      <div className="mt-0 mb-4">
        <Image src="/accm.png" alt="logo" width={115} height={116} />
      </div>

      {/* Payment Successful Container */}
      <div className="p-4 bg-white border rounded-lg shadow-md text-center w-full flex flex-col items-center mb-6">
        <div className="mb-4">
          <Image
            alt="paymentsuccessful"
            src="/paymentsucess.png"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
        <h2 className="text-green-500 font-semibold text-xl">Payment Successful</h2>
        <p className="mt-2 text-lg">UPI</p>
      </div>

      {/* UPI and Transaction Details Container */}
      <div className="flex flex-col items-center justify-start bg-white p-6 mx-auto border rounded-lg shadow-md w-full mb-6">
        {/* UPI Logo */}
        <div className="mb-4">
          <Image src="/upi-logo.png" alt="UPI Logo" width={50} height={50} className="mx-auto" />
        </div>

        {/* Amount */}
        <div className="text-xl font-semibold text-gray-800 mb-2">₹1000.00</div>

        {/* Transaction ID */}
        <div className="text-sm text-gray-500 mb-4">Transaction ID: 1234567890</div>

        {/* View Details Button */}
        <Button variant="outline" className="mb-4 w-full border-blue-500 text-blue-500">
          View Details
        </Button>

        {/* Print & Send Buttons */}
        <div className="flex w-full justify-between gap-4">
          <div className="w-1/2">
            <Button variant="outline" className="w-full flex items-center justify-center">
              <Image src="/print-icon.png" alt="Print Icon" width={24} height={24} className="mr-2" />
              Print Receipt
            </Button>
          </div>

          <div className="w-1/2">
            <Button variant="outline" className="w-full flex items-center justify-center">
              <Image src="/send-icon.png" alt="Send Icon" width={24} height={24} className="mr-2" />
              Send e-Receipt
            </Button>
          </div>
        </div>
      </div>

      {/* Redirecting Home Button and Razorpay Footer */}
      <div className="flex flex-col items-center justify-end w-full mt-auto">
        <button className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 mb-2">
          Redirecting Home in 5s...
        </button>
        <p className="text-gray-500 mb-2">Powered by Razorpay</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
