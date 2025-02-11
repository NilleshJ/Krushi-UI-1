"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, ArrowLeft, TrendingUp, Users, LayoutGrid, TimerIcon, DollarSignIcon } from "lucide-react";
import { Bar, BarChart as ReBarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PurchaseInsights = () => {
  const router = useRouter();

  // Static Data
  const customer = {
    name: "Rajendra Shedge",
    duesAtStore: 12000,
    duesInMarket: 65000,
    paymentRiskScore: 70,
  };

  const purchaseData = [
    { category: "Seeds", myStore: 50, market: 30 },
    { category: "Pesticides", myStore: 30, market: 50 },
    { category: "Fertilizers", myStore: 70, market: 40 },
  ];

  const revenueData = {
    thisYear: { total: 23760, profit: 5000, profitability: 10 },
    lifetime: { total: 703450, profit: 134000, profitability: 22 },
  };

  const missedSales = [
    { category: "Seeds", cash: 70, credit: 30 },
    { category: "Pesticides", cash: 90, credit: 10 },
    { category: "Fertilizers", cash: 10, credit: 90 },
  ];

  const productInsights = [
    { name: "<Product Name 1>", customer: 10, others: 5.6 },
    { name: "<Product Name 2>", customer: 5, others: 20.56 },
    { name: "<Product Name 3>", customer: 25, others: 8.45 },
  ];

  return (
    <div className="relative h-screen flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white z-10 p-4 shadow-md">
        {/* Header */}
        <div className="flex items-center gap-3">
          <ArrowLeft size={24} className="cursor-pointer" onClick={() => router.push("/customermanagement-customer")} />
          <h1 className="text-2xl font-bold">Purchase Insights</h1>
        </div>

        {/* Customer Info */}
        <div className="mt-2">
          <p className="text-lg font-semibold">{customer.name}</p>
          <div className="flex flex-col space-y-1 mt-1">
            <p className="text-gray-600 flex items-center gap-2">
              <TrendingUp size={16} /> Dues at my Store: 
              <span className="text-red-500 font-semibold">₹{customer.duesAtStore}</span>
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <Users size={16} /> Dues in the Market: 
              <span className="text-red-500 font-semibold">₹{customer.duesInMarket}</span>
            </p>
            <p className="text-red-600 font-semibold">
              Payment Risk Score: {customer.paymentRiskScore}%
            </p>
          </div>
        </div>

        {/* Action Icons Below Purchase Insights */}
        <h2>Purchase Insights</h2>
        <div className="flex justify-between mt-2">
          <Button
            variant="outline"
            className="w-1/2 flex gap-2 justify-center items-center"
            onClick={() => router.push("/Timeline")}
          >
            <TimerIcon size={20} /> Timeline
          </Button>
          <Button
            variant="outline"
            className="w-1/2 flex gap-2 justify-center items-center"
            onClick={() => router.push("/financial_insights")}
          >
            <DollarSignIcon size={20} /> Currency-Finance
          </Button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto flex-1 p-4 bg-gray-50">
        {/* Category-wise Purchase */}
        <h2 className="text-lg font-semibold flex items-center gap-2">
          Category-Wise Purchase <LayoutGrid size={20} />
        </h2>
        <div className="w-full h-40 bg-white p-3 rounded-lg shadow">
          <ResponsiveContainer width="100%" height="100%">
            <ReBarChart data={purchaseData} barSize={30}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="myStore" fill="#4285F4" name="My Store" />
              <Bar dataKey="market" fill="#FB923C" name="Market" />
            </ReBarChart>
          </ResponsiveContainer>
        </div>

        {/* Total Revenue */}
        <h2 className="text-lg font-semibold mt-4">Total Revenue</h2>
        <div className="grid grid-cols-2 gap-3">
          <Card className="shadow">
            <CardContent className="p-3">
              <p className="text-gray-500">This Year</p>
              <p className="text-lg font-bold">₹{revenueData.thisYear.total}</p>
              <p>Profit: ₹{revenueData.thisYear.profit}</p>
              <p>Profitability: {revenueData.thisYear.profitability}%</p>
            </CardContent>
          </Card>
          <Card className="shadow">
            <CardContent className="p-3">
              <p className="text-gray-500">Life Time</p>
              <p className="text-lg font-bold">₹{revenueData.lifetime.total}</p>
              <p>Profit: ₹{revenueData.lifetime.profit}</p>
              <p>Profitability: {revenueData.lifetime.profitability}%</p>
            </CardContent>
          </Card>
        </div>

        {/* Missed Sales Insights */}
        <h2 className="text-lg font-semibold mt-4">Missed Sales Insights (Past 30 Days)</h2>
        <div className="bg-white p-3 shadow rounded-md">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-2">Category</th>
                <th className="p-2 text-green-600">Cash</th>
                <th className="p-2 text-red-500">Credit</th>
              </tr>
            </thead>
            <tbody>
              {missedSales.map(({ category, cash, credit }) => (
                <tr key={category} className="border-b">
                  <td className="p-2">{category}</td>
                  <td className="p-2 text-green-600">{cash}%</td>
                  <td className="p-2 text-red-500">{credit}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Product Insights */}
        <h2 className="text-lg font-semibold mt-4">Product Insights (Past 365 Days)</h2>
        <div className="flex gap-2">
          <Button className="bg-blue-500 text-white">Power Items</Button>
          <Button className="bg-gray-200 text-gray-700">Frequency Driver</Button>
          <Button className="bg-gray-200 text-gray-700">Quantity Drivers</Button>
        </div>

        <table className="w-full mt-2 border">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-2">Product</th>
              <th className="p-2">This Customer</th>
              <th className="p-2">Avg. Others</th>
            </tr>
          </thead>
          <tbody>
            {productInsights.map(({ name, customer, others }) => (
              <tr key={name} className="border-b">
                <td className="p-2">{name}</td>
                <td className="p-2">{customer}</td>
                <td className="p-2">{others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseInsights;
