'use client';
import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BottomNavbar from "../Bottomnavbar"; // Adjusted import for BottomNavbar

const PaymentTracking = () => {
  const [screen, setScreen] = useState("search");
  const [searchInput, setSearchInput] = useState("");
  const [customerData, setCustomerData] = useState<any>(null); // To store customer data
  const [isLoading, setIsLoading] = useState(false); // Loading state for API calls
  const [error, setError] = useState<string>(""); // Error state

  // Function to fetch customer details based on search input
  const fetchCustomerData = async () => {
    if (!searchInput) return; // Don't proceed if search input is empty
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(`https://api.example.com/customer/${searchInput}`);
      if (!response.ok) {
        throw new Error("Customer not found");
      }
      const data = await response.json();
      setCustomerData(data);
      setScreen("history"); // Switch to history screen if data is found
    } catch (error) {
      setError("Failed to fetch customer data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen bg-gray-50">
      {/* Search Screen */}
      {screen === "search" ? (
        <div className="p-4 flex flex-col h-full bg-white">
          <h1 className="text-lg font-semibold mb-4">Search Outstanding</h1>
          <p className="text-sm text-gray-600 mb-2">
            You can search for the outstanding payments of only your customers
            shared with other community members.
          </p>
          <Input
            placeholder="Aadhar Number/Mobile Number"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="h-10 px-2 text-sm mb-4"
          />
          <Button
            className="w-full h-10 text-sm bg-blue-500 hover:bg-blue-600"
            onClick={fetchCustomerData}
            disabled={isLoading}
          >
            {isLoading ? "Searching..." : "Proceed"}
          </Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      ) : (
        /* History Screen */
        <div className="flex flex-col h-full">
          <div className="flex items-center p-4 bg-white">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick={() => setScreen("search")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <span className="text-sm text-blue-600 font-semibold">
              Search Outstanding
            </span>
          </div>

          <div className="p-4">
            {/* Customer Card */}
            {customerData ? (
              <>
                <Card className="mb-4">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="font-medium text-sm">{customerData.customerName}</h2>
                      <span className="text-xs text-gray-500">
                        Last Purchase {customerData.payments[0].date}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-green-600">₹ {customerData.payments[0].amount}</span>
                      <span className="text-red-500">₹ {customerData.payments[0].due}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Paid</span>
                      <span>Due</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Overall Due */}
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Overall Due</span>
                    <span className="font-semibold">₹ {customerData.totalDue}</span>
                  </div>
                  <div className="text-xs text-gray-500">{customerData.customerName}</div>
                </div>

                {/* Store Cards */}
                {customerData.stores.map((store: any, index: number) => (
                  <div
                    key={index}
                    className="bg-blue-50 rounded-lg p-4 mb-2 text-sm"
                  >
                    <div className="flex justify-between">
                      <span>{store.name}</span>
                      <span>₹ {store.amount}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Associated with {customerData.customerName}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p className="text-center text-gray-500">No customer data available.</p>
            )}
          </div>
        </div>
      )}

      {/* BottomNavbar */}
      <div className="absolute bottom-0 w-full">
        <BottomNavbar activeTab="payment" />
      </div>
    </div>
  );
};

export default PaymentTracking;
