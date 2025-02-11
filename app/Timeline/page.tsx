"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, DollarSignIcon, ShoppingCart, ExternalLink, TrendingUp, Users } from "lucide-react";

const Timeline = () => {
  const router = useRouter();

  // Static Data
  const customer = {
    name: "Rajendra Shedge",
    duesAtStore: 12000,
    duesInMarket: 65000,
    paymentRiskScore: 70,
  };

  const timelineData = [
    {
      month: "Aug 2025",
      invoices: [
        {
          date: "12-Aug",
          invoiceID: "AXR/2025-26/002",
          totalAmount: 12300,
          items: 32,
          status: "paid",
        },
        {
          date: "08-Aug",
          invoiceID: "AXR/2025-26/002",
          totalAmount: 12300,
          items: 32,
          status: "unpaid",
        },
        {
          date: "04-Aug",
          invoiceID: "AXR/2025-26/002",
          totalAmount: 12300,
          items: 32,
          status: "pending",
        },
      ],
    },
    {
      month: "Jun 2025",
      invoices: [
        {
          date: "08-Jun",
          invoiceID: "AXR/2025-26/002",
          totalAmount: 12300,
          items: 32,
          status: "paid",
        },
        {
          date: "04-Jun",
          invoiceID: "AXR/2025-26/002",
          totalAmount: 12300,
          items: 32,
          status: "paid",
        },
      ],
    },
  ];

  // Color Mapping & Links for Different Invoice Status
  const statusColors: Record<string, { color: string; link: string }> = {
    paid: { color: "border-green-500 bg-green-100", link: "/Invoice_details" },
    unpaid: { color: "border-red-500 bg-red-100", link: "/invoice_details(red)" },
    pending: { color: "border-yellow-500 bg-yellow-100", link: "/invoice_details/pending" },
  };

  return (
    <div className="relative h-screen flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white z-10 p-4 shadow-md">
        {/* Header */}
        <div className="flex items-center gap-3">
          <ArrowLeft size={24} className="cursor-pointer" onClick={() => router.push("/customermanagement-customer")} />
          <h1 className="text-2xl font-bold">Timeline</h1>
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
            <p className="text-red-600 font-semibold">Payment Risk Score: {customer.paymentRiskScore}%</p>
          </div>
        </div>

        {/* Action Icons Below Purchase Insights */}
        <h2>Timeline</h2>
        <div className="flex justify-between mt-2">
          <Button
            variant="outline"
            className="w-1/2 flex gap-2 justify-center items-center"
            onClick={() => router.push("/financial_insights")}
          >
            <DollarSignIcon size={20} /> Finance
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

      {/* Scrollable Timeline */}
      <div className="overflow-y-auto flex-1 p-4 bg-gray-50">
        {timelineData.map((monthData, index) => (
          <div key={index}>
            <h2 className="text-md font-semibold text-gray-600 border-b pb-1 mt-4">{monthData.month}</h2>
            {monthData.invoices.map((invoice, i) => (
              <Card key={i} className={`mt-3 border-l-4 ${statusColors[invoice.status].color}`}>
                <CardContent className="p-4">
                  <div className="flex justify-between">
                    <p className="text-gray-600">{invoice.date}</p>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => router.push(statusColors[invoice.status].link)}
                    >
                      <ExternalLink size={20} />
                    </Button>
                  </div>
                  <p className="text-black font-medium">Invoice ID: {invoice.invoiceID}</p>
                  <p className="text-gray-600">Total Amount: ₹{invoice.totalAmount}</p>
                  <p className="text-gray-600">No. of Items: {invoice.items}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
