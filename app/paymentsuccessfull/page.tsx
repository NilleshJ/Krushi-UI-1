import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const PaymentSuccess = () => {
  return (
    <div
      className="flex flex-col items-center justify-between bg-white min-h-screen p-4"
      style={{
        width: "393px", // Set page width
        height: "auto", // Set the height to auto to fit the content
        margin: "auto", // Center the layout horizontally if needed
      }}
    >
      {/* First Logo */}
      <div className="mt-0 mb-4">
        <Image
          src="/accm.png" // Replace with your logo path
          alt="logo"
          width={115}
          height={116}
        />
      </div>

      {/* Payment Successful Container */}
      <div className="p-4 bg-white border rounded-lg shadow-md text-center w-full flex flex-col items-center mb-6">
        <div className="mb-4">
          <Image
            alt="paymentsuccessful"
            src="/paymentsucess.png" // Replace with your second logo path
            width={100}
            height={100}
            className="mx-auto" // Center the logo
          />
        </div>
        <h2 className="text-green-500 font-semibold text-xl">Payment Successful</h2>
        <p className="mt-2 text-lg">UPI</p>
      </div>

      {/* UPI and Transaction Details Container */}
      <div className="flex flex-col items-center justify-start bg-white p-6 mx-auto border rounded-lg shadow-md w-full mb-6">
        {/* UPI Logo */}
        <div className="mb-4">
          <Image
            src="/upi-logo.png" // Replace with your UPI logo path
            alt="UPI Logo"
            width={50}
            height={50}
            className="mx-auto" // Center the logo
          />
        </div>

        {/* Amount */}
        <div className="text-xl font-semibold text-gray-800 mb-2">₹1000.00</div> {/* Replace with actual amount */}

        {/* Transaction ID */}
        <div className="text-sm text-gray-500 mb-4">
          Transaction ID: 1234567890 {/* Replace with actual transaction ID */}
        </div>

        {/* View Details Button */}
        <Button variant="outline" className="mb-4 w-full border-blue-500 text-blue-500">
          View Details
        </Button>

        {/* Two smaller divs for the Print and Send buttons */}
        <div className="flex w-full justify-between gap-4">
          {/* Print Recipient Button */}
          <div className="w-1/2">
            <Button variant="outline" className="w-full flex items-center justify-center">
              <Image
                src="/print-icon.png" // Replace with actual icon path
                alt="Print Icon"
                width={24}
                height={24}
                className="mr-2" // Adds margin to the right of the icon
              />
              Print Recipient
            </Button>
          </div>

          {/* Send e-Recipient Button */}
          <div className="w-1/2">
            <Button variant="outline" className="w-full flex items-center justify-center">
              <Image
                src="/send-icon.png" // Replace with actual icon path
                alt="Send Icon"
                width={24}
                height={24}
                className="mr-2" // Adds margin to the right of the icon
              />
              Send e-Recipient
            </Button>
          </div>
        </div>
      </div>

      {/* Redirecting Home Button and Razorpay paragraph at the bottom */}
      <div className="flex flex-col items-center justify-end w-full mt-auto">
        <button className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 mb-2"> {/* Reduced margin-bottom */}
          Redirecting Home in 5s
        </button>

        <p className="text-gray-500 mb-2">Powered by Razorpay</p> {/* Reduced margin-bottom */}
      </div>
    </div>
  );
};

export default PaymentSuccess;
