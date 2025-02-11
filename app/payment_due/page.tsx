"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, IndianRupee, Phone } from "lucide-react";

// Static data
const customers = [
  { id: 1, name: "Rajendra Shedge", phone: "9923056365", dueAmount: 12300 },
  { id: 2, name: "Suresh Patil", phone: "9876543210", dueAmount: 8500 },
  { id: 3, name: "Amit Kumar", phone: "9012345678", dueAmount: 6700 },
  { id: 4, name: "Vikas Sharma", phone: "7890123456", dueAmount: 12000 },
];

const PaymentDue = () => {
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
        <h1 className="text-lg font-semibold">Payment Due</h1>
      </div>

      {/* Search Bar */}
      <Input
        type="text"
        placeholder="Mobile Number/Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />

      {/* Due Payments List */}
      <div className="space-y-3">
        {filteredCustomers.map((customer) => (
          <Card
            key={customer.id}
            className="bg-red-50 border border-red-200 cursor-pointer"
            onClick={() => router.push("/outstanding_invoice")}
          >
            <CardContent className="p-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold">{customer.name}</p>
                <a href={`tel:${customer.phone}`} className="text-blue-600 text-sm flex items-center gap-1">
                  <Phone size={14} /> {customer.phone}
                </a>
              </div>
              <div className="text-red-600 font-semibold flex items-center gap-1">
                Due <IndianRupee size={16} /> {customer.dueAmount}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Navbar (Global Component) */}
    </div>
  );
};

export default PaymentDue;
