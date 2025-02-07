"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart } from "lucide-react"; // For bar chart icon
import { useState } from "react";
import Header from "./layout"; // Importing Header layout
import BottomNavbar from "@/app/Bottomnavbar";

const Dashboard = () => {
  // Static sales data
  const [salesData] = useState([
    { day: "Sun", value: 1500 },
    { day: "Mon", value: 2500 },
    { day: "Tue", value: 3000 },
    { day: "Wed", value: 7000 },
    { day: "Thu", value: 200 },
    { day: "Fri", value: 500 },
    { day: "Sat", value: 100 },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
     

      <div className="p-4 flex flex-col gap-4">
        {/* Total Sales */}
        <Card className="p-4">
          <h2 className="text-lg font-semibold">Total Sale</h2>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold">2,194</p>
            <BarChart className="w-6 h-6 text-gray-600" />
          </div>
          <p className="text-sm text-gray-500">21–27 Dec 2024</p>

          {/* Sales Chart */}
          <div className="flex items-end gap-2 mt-4">
            {salesData.map((data) => (
              <div
                key={data.day}
                className="bg-red-500 w-8 rounded"
                style={{ height: `${(data.value / 7000) * 100}px` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            {salesData.map((data) => (
              <span key={data.day}>{data.day}</span>
            ))}
          </div>
        </Card>

        {/* Average Order Value */}
        <Card className="p-4">
          <h2 className="text-lg font-semibold">Average Order Value</h2>
          <p className="text-sm text-gray-500">You averaged 2,224 steps per day over the last 7 days.</p>

          {/* Steps Chart */}
          <div className="flex items-end gap-2 mt-4">
            {[1800, 2200, 2500, 2000, 2700, 2300, 2800].map((value, idx) => (
              <div
                key={idx}
                className="bg-gray-400 w-8 rounded"
                style={{ height: `${(value / 2800) * 100}px` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
              <span key={idx}>{day}</span>
            ))}
          </div>
        </Card>
      </div>
      <BottomNavbar activeTab = {" "}/>
    </div>
  );
};

export default Dashboard;
