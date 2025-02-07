"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import BottomNavbar from "@/app/Bottomnavbar";

export default function CustomerOrder() {
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");

  const order = {
    productName: "Product Name 1",
    companyName: "Company Name",
    stockInHand: 76,
    daysToExpiry: 12,
    expiryDate: "12-Dec-2024",
    batchName: "BAT-1234",
    purchasePrice: 1000,
    sellingPrice: 1000,
    taxRate: 12000,
    taxAmount: 12000,
    mrp: 1000,
    totalAmount: 12000,
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md relative">
      {/* Header */}
      <div className="bg-blue-100 p-4 rounded-t-md border-b relative">
        <div className="absolute left-3 top-3 text-xl">⬅</div>
        <h1 className="text-lg font-bold text-center">Customer Order</h1>
        <p className="text-sm text-gray-600 text-center font-semibold">Rajendra Shedge</p>
      </div>

      {/* Quantity and Discount Section */}
      <h2 className="text-md font-bold text-center mt-4">Quantity and Discount</h2>

      {/* Order Details Card */}
      <Card className="p-4 mt-2">
        <p className="font-bold">{order.productName}</p>
        <p className="text-gray-600">{order.companyName}</p>

        <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
          <p>Stock in Hand: <strong>{order.stockInHand}</strong></p>
          <p>Days to Expiry: <strong>{order.daysToExpiry}</strong></p>
          <p>Expiry Date: <strong>{order.expiryDate}</strong></p>
          <p>Batch Name: <strong>{order.batchName}</strong></p>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-3 text-sm border-t pt-2">
          <p>Purchase Price: ₹{order.purchasePrice}</p>
          <p>Selling Price: ₹{order.sellingPrice}</p>
          <p>Tax Rate: {order.taxRate}</p>
          <p>Tax Amount: ₹{order.taxAmount}</p>
          <p>M.R.P.: ₹{order.mrp}</p>
          <p className="font-bold">Total Amount: ₹{order.totalAmount}</p>
        </div>
      </Card>

      {/* Input Fields for Quantity and Discount */}
      <div className="flex gap-2 mt-4">
        <Input 
          type="number" 
          placeholder="Quantity" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
          className="w-1/2"
        />
        <Input 
          type="number" 
          placeholder="Discount %" 
          value={discount} 
          onChange={(e) => setDiscount(e.target.value)} 
          className="w-1/2"
        />
      </div>

      {/* Total Amount */}
      <div className="flex justify-between items-center mt-4">
        <p className="font-semibold text-lg">Total Amount:</p>
        <p className="text-lg font-bold text-blue-600">₹123</p>
      </div>

      {/* Buttons */}
      <div className="space-y-2 mt-4">
        <Button className="w-full bg-blue-500 hover:bg-blue-600">
          Confirm and Add another Product
        </Button>
        <Button className="w-full bg-orange-500 hover:bg-orange-600">
          Go to Final List
        </Button>
      </div>

      <BottomNavbar activeTab={""}></BottomNavbar>
    </div>
  );
}
