"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, IndianRupee } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

export default function CustomerOrderPage() {
  const router = useRouter();

  // Temporary storage for order data
  const [orders, setOrders] = useState<any[]>([]);

  // Function to add order data and navigate
  const handleAddOrder = () => {
    const newOrder = {
      product: "Product Name 1",
      company: "Company Name",
      quantity: 1,
      discount: 0,
      gst: "5%",
      total: 123,
    };

    setOrders([...orders, newOrder]);
    router.push("/order/list"); // Navigate after adding order
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6">
      {/* Header */}
      <div className="w-full max-w-md bg-green-100 rounded-md p-4 relative">
        <div className="flex items-center space-x-2">
          {/* Arrow in Blue Color */}
          <ArrowLeft className="cursor-pointer text-blue-600" onClick={() => router.push("/order/neworder/createorder/searchproduct/selectproduct")} />
          <h2 className="text-lg font-semibold">Customer Order</h2>
        </div>
        <p className="mt-1 text-sm font-medium text-left">Rajendra Shedge</p>
      </div>

      {/* Product Details */}
      <Card className="w-full max-w-md mt-6 bg-gray-100 shadow-md">
        <CardContent className="p-4">
          <h3 className="font-semibold">&lt;Product Name 1&gt;</h3>
          <p className="text-gray-500">&lt;Company Name&gt;</p>
        </CardContent>
      </Card>

      {/* Quantity & Discount */}
      <div className="w-full max-w-md mt-4 px-4  p-4 ">
        <h4 className="font-medium text-center">Quantity and Discount</h4>

        <div className="flex space-x-2 mt-2">
          <Input className="flex-1" placeholder="Quantity" />
          <Input className="flex-1" placeholder="Discount %" />
        </div>

        {/* GST & Tax Section */}
        <div className="mt-4 flex items-center justify-between">
          <Select>
            <SelectTrigger className="w-1/3">
              <SelectValue placeholder="GST Rate" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">GST 5%</SelectItem>
              <SelectItem value="12">GST 12%</SelectItem>
              <SelectItem value="18">GST 18%</SelectItem>
            </SelectContent>
          </Select>

          {/* Tax Type & Tax Amount */}
          <div className="w-2/3 flex justify-between text-sm">
            <div>
              <p className="font-medium">Tax Type</p>
              <p>CGST (9%)</p>
              <p>SGST (9%)</p>
              <p className="font-semibold">Total Tax</p>
            </div>
            <div>
              <p className="font-medium">Tax Amount</p>
              <p>1000</p>
              <p>1000</p>
              <p className="font-semibold">2000</p>
            </div>
          </div>
        </div>

        {/* Total Amount */}
        <div className="flex justify-between items-center mt-4">
          <p className="font-semibold">Total Amount</p>
          <div className="flex items-center space-x-1">
            <IndianRupee className="w-4 h-4" />
            <span className="text-lg font-bold">123</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 space-y-2">
        <Button
  className="w-full bg-blue-600 hover:bg-blue-700"
  onClick={() => {
    handleAddOrder(); 
    router.push("/order/neworder/createorder/searchproduct");
  }}
>
  Confirm and Add another Product
</Button>

          <Button className="w-full bg-orange-500 hover:bg-orange-600" onClick={() => router.push("/order/finallist")}>
            Go to Final List
          </Button>
        </div>
      </div>
      <BottomNavbar activeTab={""}></BottomNavbar>
    </div>
  );
}
