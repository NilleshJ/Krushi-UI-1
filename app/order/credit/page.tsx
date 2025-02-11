'use client';

import { useRouter } from 'next/navigation';
import BottomNavbar from '@/app/Bottomnavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarDays, IndianRupee, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function CustomerOrder() {
  const router = useRouter();

  // Temporary array to store mock data
  const [orderData, setOrderData] = useState([
    {
      id: 1,
      totalItems: 123,
      totalAmount: 123,
      partialPayment: '',
      outstanding: '',
      dueDate: '',
      dueDays: '7 Days',
    },
  ]);

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4">
      <div className="w-full bg-white shadow-lg p-4 mt-6">
        
        {/* Green Header with Arrow */}
        <div className="bg-green-100 p-4 rounded-t-2xl flex justify-between items-center">
          {/* Left Side Arrow */}
          <ArrowLeft
            className="text-blue-600 cursor-pointer"
            size={24}
            onClick={() => router.push('/your-target-page')}
          />
          <div className="text-center flex-grow">
            <h2 className="text-lg font-semibold">Customer Order</h2>
            <p className="text-sm text-gray-700">Rajendra Shedge</p>
          </div>
        </div>

        {/* Credit Section */}
        <div className="bg-yellow-100 p-3 mt-2 rounded-lg">
          <h3 className="text-md font-semibold text-center">Credit</h3>
          <div className="flex justify-between text-sm mt-2">
            <span>Total Items</span>
            <span>{orderData[0].totalItems}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>Total Amount</span>
            <span className="flex items-center gap-1">
              <IndianRupee size={14} /> {orderData[0].totalAmount}
            </span>
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-4 space-y-3">
          <div>
            <label className="text-sm font-medium">Partial Payment</label>
            <Input placeholder="Payment" className="mt-1" />
          </div>
          <div>
            <label className="text-sm font-medium">Outstanding</label>
            <Input placeholder="Due Amount" className="mt-1" />
          </div>
          <div>
            <label className="text-sm font-medium">Due Date</label>
            <div className="relative mt-1">
              <Input placeholder="Expiry Date" className="pr-10" />
              <CalendarDays className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
            <p className="text-red-500 text-xs mt-1">{orderData[0].dueDays}</p>
          </div>
        </div>

        {/* Save Button */}
        <Button className="bg-blue-600 text-white w-full mt-4 py-2 rounded-lg">
          Save and Send Invoice
        </Button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavbar activeTab={''} />
    </div>
  );
}
