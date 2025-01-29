"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BottomNavbar from "@/app/Bottomnavbar";

// Define the type for customer data
interface Customer {
  customerName: string;
  previousAmountDue: number;
}

export default function ProductPage() {
  // Temporary data to simulate database data
  const tempData = [
    {
      customerName: "Rajendra Shedge",
      previousAmountDue: 0,
    },
    {
      customerName: "John Doe",
      previousAmountDue: 500,
    },
    {
      customerName: "Jane Smith",
      previousAmountDue: 200,
    },
  ];

  // State for fetched data
  const [customerData, setCustomerData] = useState<Customer | null>(null);

  // Simulate data fetching
  useEffect(() => {
    // Simulate a delay for fetching data
    setTimeout(() => {
      setCustomerData(tempData[0]); // Load the first customer as an example
    }, 1000);
  }, []);

  return (
    <div
      className="flex flex-col bg-white min-h-screen p-4"
      style={{
        width: "393px", // Set page width
        height: "auto", // Adjust height to fit content
        margin: "auto", // Center the layout horizontally
      }}
    >
      {/* Header Section */}
      <h1 className="text-xl font-bold text-center mb-4">Purchase Order</h1>

      {/* Navigation Link */}
      <div className="w-full flex items-center mb-6">
        <a
          href="/purchase/orders"
          className="text-blue-500 text-lg font-medium"
          style={{
            marginRight: "auto", // Align link to the left
          }}
        >
          &lt; Orders
        </a>
      </div>

      {/* Customer Card */}
      {customerData ? (
        <div className="w-[300px] mb-6 p-4 bg-blue-100 rounded-lg flex flex-col items-start">
          <h2 className="text-lg font-semibold">{customerData.customerName}</h2>
          <p className="text-gray-500">Previous Amount Due</p>
          <span className="text-green-500 text-lg font-bold">
            ₹{customerData.previousAmountDue}
          </span>
        </div>
      ) : (
        <p className="text-gray-500 text-center mb-6">Loading customer data...</p>
      )}

      {/* Product Search Section */}
      <h2 className="text-center font-semibold mb-2 ">Product</h2>
      <p className="text-gray-700 text-center mb-6">
        Search for a product by name or shortcut
      </p>

      {/* Input Fields */}
      <Input
        type="text"
        placeholder="Product Name"
        className=" mb-4"
      />
      <p className="text-center">or4</p>
      <Input
        type="text"
        placeholder="Short Key"
        className=" mb-4"
      />

      {/* Search Button */}
      <Button className="bg-blue-500 text-white ">Search</Button>

      {/* Bottom Navbar */}
      <BottomNavbar activeTab={""}></BottomNavbar>
    </div>
  );
}
