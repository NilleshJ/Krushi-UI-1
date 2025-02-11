"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

const products = [
  {
    id: 1,
    name: "Product Name 1",
    company: "Company Name",
    stock: 76,
    expiryDays: 12,
    expiryDate: "12-Dec-2024",
    batch: "BAT-1234",
    purchasePrice: 1000,
    sellingPrice: 1000,
    taxRate: 12000,
    totalAmount: 12000,
    mrp: 10000,
    indicators: {
      inventoryTurnover: 16,
      daysToSell: 35,
      grossProfitMargin: "33%",
      salesVelocity: 50000,
    },
  },
];

export default function CustomerOrder() {
  const router = useRouter();
  const customerName = "Rajendra Shedge"; // Customer Name

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* ✅ Updated Header with Customer Name (Left) & Title (Centered) */}
      <div className="bg-green-300 w-full p-4 rounded-lg flex flex-col shadow-md relative">
        <div className="flex items-center justify-center relative">
          <ArrowLeft
            className="cursor-pointer text-blue-600 absolute left-4"
            onClick={() => router.push("/order/neworder/createorder/searchproduct")}
          />
          <h2 className="text-xl font-bold text-center flex-1">Customer Order</h2>
        </div>

        {/* ✅ Customer Name Below Title (Left-Aligned) */}
        <p className="mt-1 text-lg font-semibold text-black text-left pl-6">{customerName}</p>
      </div>

      <h3 className="mt-4 text-md font-semibold">Select Product</h3>

      {/* ✅ Product List */}
      {products.map((product) => (
        <Card
          key={product.id}
          className="w-full max-w-sm p-4 my-3 cursor-pointer bg-white shadow-lg rounded-lg"
          onClick={() => router.push(`/order/quantitydiscount`)}
        >
          <p className="font-bold">{product.name}</p>
          <p className="text-sm text-gray-600">{product.company}</p>
          <div className="grid grid-cols-2 gap-2 text-sm mt-2">
            <p>Stock in Hand: {product.stock}</p>
            <p>Purchase Price: {product.purchasePrice}</p>
            <p>Days to Expiry: {product.expiryDays}</p>
            <p>Selling Price: {product.sellingPrice}</p>
            <p>Expiry Date: {product.expiryDate}</p>
            <p>Tax Rate: {product.taxRate}</p>
            <p>Batch Name: {product.batch}</p>
            <p>M.R.P: {product.mrp}</p>
            <p className="col-span-2 font-bold">Total Amount: {product.totalAmount}</p>
          </div>

          <div className="mt-4 bg-yellow-100 p-3 rounded-md text-sm">
            <p className="font-semibold text-gray-700">
              Consider following indicators when offering discounts
            </p>
            <p>Inventory Turnover: {product.indicators.inventoryTurnover}</p>
            <p>Days to Sell: {product.indicators.daysToSell} Days</p>
            <p>Gross Profit Margin: {product.indicators.grossProfitMargin}</p>
            <p>Sales Velocity: {product.indicators.salesVelocity}</p>
          </div>
        </Card>
      ))}
      <BottomNavbar activeTab={""}></BottomNavbar>
    </div>
  );
}
