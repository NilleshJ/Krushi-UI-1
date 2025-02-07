"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import BottomNavbar from "../Bottomnavbar";

// Define the Order interface for strong typing
interface Order {
  productName: string;
  companyName: string;
  stockInHand: number;
  purchasePrice: number;
  daysToExpiry: number;
  sellingPrice: number;
  expiryDate: string;
  taxRate: number;
  batchName: string;
  taxAmount: number;
  mrp: number;
  totalAmount: number;
  quantity: string;
  discount: string;
  total?: string;
}

// Initial order data with default values
const initialProductData: Order = {
  productName: "",
  companyName: "",
  stockInHand: 78,
  purchasePrice: 1000,
  daysToExpiry: 12,
  sellingPrice: 12000,
  expiryDate: "12-Dec-2024",
  taxRate: 12000,
  batchName: "BAT 1234",
  taxAmount: 12000,
  mrp: 1000,
  totalAmount: 12000,
  quantity: "",
  discount: "",
};

const OrderForm: React.FC = () => {
  const router = useRouter(); // Initialize router

  const [orders, setOrders] = useState<Order[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Order>({ ...initialProductData });

  // Handle input changes with proper typing
  const handleInputChange = (field: keyof Order, value: string | number) => {
    setCurrentOrder((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Calculate total amount based on quantity and discount
  const calculateTotal = (): string => {
    const quantity = parseFloat(currentOrder.quantity) || 0;
    const discount = parseFloat(currentOrder.discount) || 0;
    const price = currentOrder.sellingPrice;
    const total = (quantity * price) * (1 - discount / 100);
    return total.toFixed(2);
  };

  // Add current order to orders list and reset the form
  const handleAddOrder = () => {
    if (currentOrder.quantity && currentOrder.productName) {
      setOrders((prev) => [...prev, { ...currentOrder, total: calculateTotal() }]);
      setCurrentOrder({ ...initialProductData });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-[#F2F7F2] min-h-screen">
      {/* Header Section */}
      <div className="bg-[#E6F3F3] p-4">
        <h2 className="text-lg font-medium">Customer Order</h2>
        <div className="text-sm">Rajendra Shedge</div>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-4">
        {/* Product Selection */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="space-y-3">
            <div
              className="flex justify-between items-center border-b pb-2 cursor-pointer"
              onClick={() => router.push("/products")}
            >
              <span className="text-gray-600">Product Name</span>
              <div className="w-6 h-6 border rounded flex items-center justify-center">⌄</div>
            </div>
            <div
              className="flex justify-between items-center border-b pb-2 cursor-pointer"
              onClick={() => router.push("/companies")}
            >
              <span className="text-gray-600">Company Name</span>
              <div className="w-6 h-6 border rounded flex items-center justify-center">⌄</div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-lg p-4 shadow-sm space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-gray-600">Stock in Hand</Label>
              <div className="font-medium">{currentOrder.stockInHand}</div>
            </div>
            <div>
              <Label className="text-gray-600">Purchase Price</Label>
              <div className="font-medium">{currentOrder.purchasePrice}</div>
            </div>
          </div>
        </div>

        {/* Quantity and Discount Section */}
        <div className="bg-white rounded-lg p-4 shadow-sm space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-gray-600">Quantity</Label>
              <Input
                type="number"
                placeholder="Quantity"
                className="mt-1"
                value={currentOrder.quantity}
                onChange={(e) => handleInputChange("quantity", e.target.value)}
              />
            </div>
            <div>
              <Label className="text-gray-600">Discount %</Label>
              <Input
                type="number"
                placeholder="Discount %"
                className="mt-1"
                value={currentOrder.discount}
                onChange={(e) => handleInputChange("discount", e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-gray-600">Total Amount</span>
            <span>{calculateTotal()}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleAddOrder}>
            Confirm and Add another Product
          </Button>
          <Button className="w-full bg-orange-500 hover:bg-orange-600" onClick={() => router.push("/final-list")}>
            Go to Final List
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavbar activeTab={""} />
    </div>
  );
};

export default OrderForm;
