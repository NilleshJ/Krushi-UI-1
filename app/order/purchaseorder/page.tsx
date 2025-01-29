"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BottomNavbar from "@/app/Bottomnavbar";

export default function CustomerPage() {
  return (
    <div
      className="flex flex-col bg-white min-h-screen p-4"
      style={{
        width: "393px", // Set page width
        height: "auto", // Adjust height based on content
        margin: "auto", // Center the layout horizontally
      }}
    >
      {/* Title */}
      <h1 className="text-xl font-bold text-center mb-4">Purchase Order</h1>

      {/* Navigation Link and Customer Heading */}
      <div className="flex items-center w-full mb-6">
        {/* Navigation Link */}
        <a
          href="/order"
          className="text-blue-500 text-lg font-medium"
          style={{
            marginRight: "auto", // Push link to the left
          }}
        >
          &lt; Order
        </a>
        {/* Empty Space for Proper Alignment */}
      </div>

      {/* Customer Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold">Customer</h2>
        <p className="text-gray-700 text-center mb-6">
          Please select a customer to create an order
        </p>

        {/* Input Field */}
        <Input
          type="text"
          placeholder="Mobile Number/Aadhaar Number"
          className="w-[300px] mb-4"
        />
        {/* Button */}
        <Button className="bg-blue-500 text-white w-[300px]">Proceed</Button>
      </div>

      {/* Bottom Navbar */}
      <BottomNavbar activeTab={""} />
    </div>
  );
}
