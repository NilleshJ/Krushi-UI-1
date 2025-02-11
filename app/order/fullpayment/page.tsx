'use client';

import { useRouter } from 'next/navigation';
import BottomNavbar from '@/app/Bottomnavbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, DollarSign, QrCode, CreditCard, FileText } from 'lucide-react';

export default function CustomerOrder() {
  const router = useRouter();

  // Temporary Data Array
  const tempOrders = [
    { id: 1, customer: 'Rajendra Shedge', totalItems: 123, totalAmount: 123 },
  ];

  return (
    <div className="w-full max-w-lg bg-white shadow-lg p-8 mt-8 rounded-lg">
      {/* Header Section */}
      <div className="flex items-center bg-green-100 p-6 rounded-lg text-center mb-4">
        <ArrowLeft 
          size={24} 
          className="text-blue-500 mr-4 cursor-pointer" 
          onClick={() => router.push('/order/payment')} // Change path as needed
        />
        <div>
          <h2 className="text-xl font-semibold">Customer Order</h2>
          <p className="text-md text-gray-700">{tempOrders[0].customer}</p>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-yellow-100 p-6 mt-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold">Full Payment</h3>
        <div className="flex justify-between text-sm mt-3">
          <span>Total Items</span>
          <span>{tempOrders[0].totalItems}</span>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>Total Amount</span>
          <span>₹ {tempOrders[0].totalAmount}</span>
        </div>
      </div>

      {/* Payment Options */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <Button className="bg-green-500 text-white flex items-center justify-center gap-3 p-3 rounded-lg text-lg">
          <DollarSign size={20} /> Cash
        </Button>
        <Button className="bg-orange-500 text-white flex items-center justify-center gap-3 p-3 rounded-lg text-lg">
          <QrCode size={20} /> UPI
        </Button>
        <Button className="bg-red-500 text-white flex items-center justify-center gap-3 p-3 rounded-lg text-lg">
          <CreditCard size={20} /> Card
        </Button>
        <Button className="bg-blue-500 text-white flex items-center justify-center gap-3 p-3 rounded-lg text-lg">
          <FileText size={20} /> Cheque
        </Button>
      </div>

      {/* Save and Send Invoice Button */}
      <Button className="bg-blue-600 text-white w-full mt-8 py-3 rounded-lg text-lg">
        Save and send Invoice
      </Button>

      {/* Bottom Navbar */}
      <BottomNavbar activeTab={''} />
    </div>
  );
}
