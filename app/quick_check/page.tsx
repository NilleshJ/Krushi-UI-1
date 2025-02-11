"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, IndianRupee } from "lucide-react";

// Static data
const customers = [
  { 
    id: 1, 
    name: "Rajendra Shedge", 
    phone: "9923056365", 
    storeDue: 12000, 
    marketDue: 65000, 
    riskScore: 70, 
    overdueDays: 36 
  },
  { 
    id: 2, 
    name: "Suresh Patil", 
    phone: "9876543210", 
    storeDue: 8500, 
    marketDue: 45000, 
    riskScore: 50, 
    overdueDays: 28 
  },
];

const QuickCheck = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Filter customers based on search input
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.phone.includes(search)
  );

  return (
    <div className="flex flex-col min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <ArrowLeft size={24} className="cursor-pointer" onClick={() => router.push("/customer")} />
        <h1 className="text-lg font-semibold">Quick Check</h1>
      </div>

      {/* Search Bar */}
      <Input
        type="text"
        placeholder="Mobile Number/Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />

      {/* Customer Details */}
      <div className="space-y-3">
        {filteredCustomers.map((customer) => (
          <Card key={customer.id} className="bg-gray-50 border border-gray-200">
            <CardContent className="p-4">
              <p className="text-sm font-semibold">{customer.name}</p>

              <div className="mt-2 space-y-1">
                <p className="flex justify-between">
                  Dues at my Store: <span className="font-semibold flex items-center gap-1"><IndianRupee size={16} /> {customer.storeDue}</span>
                </p>
                <p className="flex justify-between text-red-600 font-semibold">
                  Dues in the Market: <span className="flex items-center gap-1"><IndianRupee size={16} /> {customer.marketDue}</span>
                </p>
                <p className="flex justify-between text-red-500 font-bold">
                  Payment Risk Score: <span>{customer.riskScore}%</span>
                </p>
                <p className="flex justify-between">
                  Avg. No. of Days Payment Overdue: <span>{customer.overdueDays}</span>
                </p>
              </div>

              {/* Insights Button */}
              <Button className="w-full mt-4" onClick={() => router.push("/financial_insights")}>
                Insights
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Navbar (Global Component) */}
    </div>
  );
};

export default QuickCheck;
