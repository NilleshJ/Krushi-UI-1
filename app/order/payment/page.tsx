"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, DollarSign } from "lucide-react";
import BottomNavbar from '@/app/Bottomnavbar';

const PaymentPage = () => {
  const router = useRouter();

  // Temporary data array (to be replaced with real database fetch)
  const [orderData, setOrderData] = useState({
    customerName: "Rajendra Shedge",
    totalItems: 123,
    totalAmount: 123,
  });

  useEffect(() => {
    // Mock fetching data (Replace this with actual API call later)
    const fetchData = async () => {
      // Simulated response
      const response = {
        customerName: "Rajendra Shedge",
        totalItems: 123,
        totalAmount: 123,
      };
      setOrderData(response);
    };
    
    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen rounded-flex">
      {/* Header Section */}
      <div className="bg-[#DFF5E1] p-4 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center">
            <ArrowLeft size={24} className="text-blue-500 mr-2 cursor-pointer" onClick={() => router.push('/order/finallist')} />
            <h2 className="text-lg font-medium">Customer Order</h2>
          </div>
          <p className="text-sm text-gray-700 ml-8 mt-4">{orderData.customerName}</p> {/* Moved name below */}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-center font-medium my-4">Payment</h3>

        {/* Total Items & Total Amount */}
        <div className="bg-yellow-200 p-3 rounded-lg flex justify-between mb-4">
          <div>
            <p className="text-gray-600">Total Items</p>
            <p className="text-blue-600 font-bold">{orderData.totalItems}</p>
          </div>
          <div>
            <p className="text-gray-600">Total Amount</p>
            <p className="flex items-center gap-1 text-blue-600 font-bold">
              <DollarSign size={14} /> {orderData.totalAmount}
            </p>
          </div>
        </div>

        {/* Payment Options */}
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 mb-2" onClick={() => router.push('/full-payment')}>
          <CheckCircle size={20} /> Full Payment
        </Button>
        <Button className="w-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center gap-2" onClick={() => router.push('/credit')}>
          <DollarSign size={20} /> Credit
        </Button>
      </div>

      <BottomNavbar activeTab={''} />
    </div>
  );
};

export default PaymentPage;
