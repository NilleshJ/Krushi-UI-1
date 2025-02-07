"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building, AlertCircle, Search, Lightbulb } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";





export default function CustomerManagement() {
  const router = useRouter();

  // Static Data
  const customerData = [
    { type: "Retail", count: 123, icon: Users, bgColor: "bg-blue-100" },
    { type: "Business", count: 34, icon: Building, bgColor: "bg-green-100" },
  ];

  const pendingPayments = [
    { type: "Retail", count: 9, icon: AlertCircle, bgColor: "bg-red-100" },
    { type: "Business", count: 5, icon: AlertCircle, bgColor: "bg-red-100" },
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mt-14 text-center">Customer Management</h1>

      {/* Customers Section */}
      <div className="grid grid-cols-2 gap-4">
        {customerData.map(({ type, count, icon: Icon, bgColor }) => (
          <Card key={type} className={`p-4 ${bgColor}`}>
            <CardContent className="flex items-center space-x-4">
              <Icon size={24} className="text-gray-700" />
              <div>
                <p className="font-medium">{type}</p>
                <p className="text-xl font-bold">{count}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="w-full" onClick={() => router.push("/New_customer")}>
        Add New Customer
      </Button>

      {/* Pending Payments Section */}
      <h2 className="text-lg font-semibold">Pending Payment Customers</h2>
      <div className="grid grid-cols-2 gap-4">
        {pendingPayments.map(({ type, count, icon: Icon, bgColor }) => (
          <Card key={type} className={`p-4 ${bgColor}`}>
            <CardContent className="flex items-center space-x-4">
              <Icon size={24} className="text-gray-700" />
              <div>
                <p className="font-medium">{type}</p>
                <p className="text-xl font-bold">{count}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Customer Search Report */}
      <Card className="bg-yellow-100 p-4 cursor-pointer">
        <CardContent className="flex items-center space-x-4">
          <Search size={24} className="text-gray-700" />
          <p className="font-medium">Search Background History</p>
        </CardContent>
      </Card>

      {/* Advertisement */}
      <h2 className="text-lg font-semibold">Advertisement</h2>
      <Button className="w-full" onClick={() => router.push("/marketing")}>
        Marketing Campaigns
      </Button>
      <BottomNavbar activeTab = {" "}/>
    </div>
  );
}
