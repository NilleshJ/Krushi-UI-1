"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, ArrowLeft, TrendingUp, Users, ShoppingCart, TimerIcon } from "lucide-react";
import { Bar, BarChart as ReBarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const FinancialInsights = () => {
  const router = useRouter();

  // Static Data
  const customer = {
    name: "Rajendra Shedge",
    duesAtStore: 12000,
    duesInMarket: 65000,
    paymentRiskScore: 70,
  };

  const snapshot30Days = [
    { label: "Purchase Frequency", myStore: 12, market: 32 },
    { label: "Average Order Value", myStore: 3500.45, market: 1605.56 },
    { label: "% of Upfront Invoices", myStore: 10, market: 6 },
    { label: "% of Credit Invoices", myStore: 90, market: 94 },
    { label: "% of Credit on Time", myStore: 12, market: 6 },
    { label: "% of Credit Dues", myStore: 12, market: 6 },
    { label: "Debt to Sales Ratio", myStore: 0.2, market: 0.4 },
  ];

  const snapshot365Days = [
    { label: "Purchase Frequency", myStore: 12, market: 32 },
    { label: "Profitability", myStore: "12%", market: "32%" },
    { label: "Average Net Revenue", myStore: 1200, market: 400 },
    { label: "Average Order Value", myStore: 3500.45, market: 1605.56 },
    { label: "Debt to Sales Ratio", myStore: 0.2, market: 0.4 },
  ];

  const orderValueTrend = [
    { name: "Jan", myStore: 2000, market: 1000 },
    { name: "Feb", myStore: 4000, market: 2000 },
    { name: "Mar", myStore: 6000, market: 3000 },
    { name: "Apr", myStore: 3000, market: 2000 },
  ];

  const duesMarketPieData = [
    { name: "Store A", value: 30, color: "#4285F4" },
    { name: "Store B", value: 20, color: "#FB923C" },
    { name: "Store C", value: 25, color: "#34D399" },
    { name: "Store D", value: 15, color: "#A78BFA" },
    { name: "Store E", value: 10, color: "#F87171" },
  ];

  return (
    <div className="relative h-screen flex flex-col">
       {/* Sticky Header */}
       <div className="sticky top-0 bg-white z-10 p-4 shadow-md">
        {/* Header */}
        <div className="flex items-center gap-3">
          <ArrowLeft size={24} className="cursor-pointer" onClick={() => router.push("/customermanagement-customer")} />
          <h1 className="text-2xl font-bold">Financial Insights</h1>
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
        <h2>Financial Insights</h2>
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
            onClick={() => router.push("/purchase_insights")}
          >
            <ShoppingCart size={20} /> Cart
          </Button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto flex-1 p-4 bg-gray-50">
        {/* Snapshot (30 Days) */}
        <h2 className="text-lg font-semibold">Snapshot: Past 30 Days</h2>
        <Card>
          <CardContent className="p-4">
            {snapshot30Days.map((item, index) => (
              <div key={index} className="flex justify-between border-b py-2">
                <p className="text-gray-600">{item.label}</p>
                <p className="text-black font-medium">{item.myStore} | {item.market}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Snapshot (365 Days) */}
        <h2 className="text-lg font-semibold mt-4">Snapshot: Past 365 Days</h2>
        <Card>
          <CardContent className="p-4">
            {snapshot365Days.map((item, index) => (
              <div key={index} className="flex justify-between border-b py-2">
                <p className="text-gray-600">{item.label}</p>
                <p className="text-black font-medium">{item.myStore} | {item.market}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Average Order Value */}
        <h2 className="text-lg font-semibold mt-4">Average Order Value</h2>
        <div className="w-full h-40 bg-white p-3 rounded-lg shadow">
          <ResponsiveContainer width="100%" height="100%">
            <ReBarChart data={orderValueTrend} barSize={30}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="myStore" fill="#4285F4" name="My Store" />
              <Bar dataKey="market" fill="#FB923C" name="Market" />
            </ReBarChart>
          </ResponsiveContainer>
        </div>
        {/* Order Value and % Change Trend */}
<h2 className="text-lg font-semibold mt-4">Order Value and % Change Trend</h2>
<Card className="mb-4"> {/* Added margin-bottom here */}
  <CardContent className="p-3">
    <ResponsiveContainer width="100%" height={150}>
      <LineChart data={orderValueTrend}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="myStore" stroke="#4285F4" name="My Store" />
        <Line type="monotone" dataKey="market" stroke="#FB923C" name="Market" />
      </LineChart>
    </ResponsiveContainer>
  </CardContent>
</Card>

        {/* Dues in the Market */}
        <h2 className="text-lg font-semibold mt-4">Dues in the Market</h2>
        <div className="w-full h-40 bg-white p-3 rounded-lg shadow">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={duesMarketPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
                {duesMarketPieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FinancialInsights;
