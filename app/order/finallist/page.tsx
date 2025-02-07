"use client"; // Required for client components in App Router

import { useState } from "react";
import { useRouter } from "next/navigation"; // Corrected import
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Pencil } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

export default function FinalList() {
  const router = useRouter(); // Corrected router usage

  // Temporary state to store order data
  const [orders, setOrders] = useState([
    { id: 1, productName: "Product Name 1", quantity: 10, totalAmount: 1000 },
    { id: 2, productName: "Product Name 2", quantity: 5, totalAmount: 500 },
  ]);

  return (
    <div className="p-4 bg-white min-h-screen relative pb-20">
      {/* Header */}
      <div className="bg-green-100 p-4 rounded-lg relative">
        {/* Back Button */}
        <ArrowLeft
          className="cursor-pointer text-blue-600 absolute left-4 top-1/2 transform -translate-y-1/2"
          onClick={() => router.push("/order/quatitydiscount")}
        />
        <h2 className="text-lg font-bold text-center">Customer Order</h2>
        <p className="text-gray-600 text-center">Rajendra Shedge</p>
      </div>

      {/* Final List Title */}
      <h3 className="mt-4 font-semibold">Final List</h3>

      {/* Order List */}
      <div className="space-y-4 mt-2">
        {orders.map((item) => (
          <Card key={item.id} className="flex justify-between items-center p-4 bg-gray-100 shadow-sm border border-gray-300">
            <CardContent className="p-0">
              <p className="font-semibold">{item.productName}</p>
              <p>Quantity: <span className="font-bold">{item.quantity}</span></p>
              <p>Total Amount: <span className="font-bold">₹{item.totalAmount}</span></p>
            </CardContent>

            {/* Updated Edit Button */}
            <div className="relative">
              <Button className="rounded-lg bg-yellow-500 hover:bg-yellow-600 p-2 shadow-lg border border-blue-500">
                <Pencil size={24} className="text-black" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Fixed Bottom Section (Above Navbar) */}
      <div className="fixed bottom-14 left-0 w-full px-4 bg-white pb-2">
        {/* Summary Section */}
        <div className="bg-yellow-200 p-4 rounded-lg flex justify-between">
          <div>
            <p className="font-semibold">Total Items</p>
            <p className="text-lg font-bold">{orders.reduce((sum, item) => sum + item.quantity, 0)}</p>
          </div>
          <div>
            <p className="font-semibold">Total Amount</p>
            <p className="text-lg font-bold">₹{orders.reduce((sum, item) => sum + item.totalAmount, 0)}</p>
          </div>
        </div>

        {/* Proceed Button */}
        <Button
          className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white"
          onClick={() => router.push("/order/payment")}
        >
          Proceed for Payment
        </Button>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavbar activeTab={""} />
    </div>
  );
}
