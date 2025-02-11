"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, DollarSignIcon, TimerIcon , ArrowLeft } from "lucide-react";


const CustomersPage = () => {
  const router = useRouter();

  // Static data (API logic can replace this)
  const customers = [
    {
      id: 1,
      name: "<Customer Name>",
      phone: "9923056365",
      due: 12300,
    },
    {
      id: 2,
      name: "<Customer Name>",
      phone: "9923056365",
      due: 12300,
    },
    {
      id: 3,
      name: "<Customer Name>",
      phone: "9923056365",
      due: 12300,
    },
    {
      id: 4,
      name: "<Customer Name>",
      phone: "9923056365",
      due: 12300,
    },
    {
      id: 5,
      name: "<Customer Name>",
      phone: "9923056365",
      due: 12300,
    },
  ];

  return (
    <div className="p-4 pb-20 min-h-screen">
      {/* Header */}
      <div className="w-full max-w-md">
        <button
          className="flex items-center text-blue-600"
          onClick={() => router.push("/customer")} // Temporary route
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="ml-2 font-medium">Customers</span>
        </button>
      </div>

      {/* Search */}
      <div className="mt-4">
        <Input placeholder="Mobile Number/Name" className="w-full" />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mt-2">
        <Button className="flex-1 bg-blue-500 text-white">All</Button>
        <Button className="flex-1 bg-gray-200 text-gray-700">Profitable</Button>
        <Button className="flex-1 bg-gray-200 text-gray-700">Frequent</Button>
      </div>

      {/* Customers List */}
      <div className="mt-4 space-y-3">
        {customers.map((customer) => (
          <Card key={customer.id} className="p-4 flex justify-between items-center">
            <CardContent className="flex items-center space-x-3 w-full">
              <div className="flex flex-col flex-1">
                <p className="font-medium">{customer.name}</p>
                <p
                  className="text-blue-500 cursor-pointer"
                  onClick={() => router.push(`/customer/${customer.id}`)}
                >
                  {customer.phone}
                </p>
                <p className="text-sm text-gray-600">Due ₹{customer.due}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => router.push("/financial_insights")}
                >
                  <DollarSignIcon size={20} />
                </Button>
                
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => router.push("/purchase_insights")}
                >
                  <TimerIcon size={20} />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => router.push("/purchase_insights")}
                >
                  <ShoppingCart size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Global Bottom Navigation */}
      
    </div>
  );
};

export default CustomersPage;
