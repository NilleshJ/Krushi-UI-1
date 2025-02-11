"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, IndianRupee } from "lucide-react";

const InvoiceDetails = () => {
  const router = useRouter();

  // Static Invoice Data
  const invoice = {
    customerName: "Rajendra Shedge",
    invoiceNo: "WSDT/2024-25/0012",
    invoiceDate: "12-Dec-2024",
    invoiceAmount: 12000,
    gstAmount: 1000,
    amountReceived: 10000,
    amountPayable: 2000,
  };

  // Static Purchased Items
  const purchasedItems = [
    {
      productName: "Product Name 1",
      quantity: 12,
      sellingPrice: 1000,
      totalAmount: 12000,
    },
    {
      productName: "Product Name 1",
      quantity: 12,
      sellingPrice: 1000,
      totalAmount: 12000,
    },
  ];

  return (
    <div className="relative h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 p-4 shadow-md flex items-center gap-3">
        <ArrowLeft size={24} className="cursor-pointer" onClick={() => router.push("/Timeline")} />
        <h1 className="text-2xl font-bold">Invoice Details</h1>
      </div>

      {/* Invoice Details */}
      <div className="p-4">
        <Card className="p-4">
          <p className="text-lg font-semibold">{invoice.customerName}</p>
          <div className="mt-2 space-y-1 text-gray-600">
            <p>Invoice No. <span className="font-semibold">{invoice.invoiceNo}</span></p>
            <p>Invoice Date <span className="font-semibold">{invoice.invoiceDate}</span></p>
            <p className="flex items-center">
              Invoice Amount <span className="ml-auto font-semibold">₹{invoice.invoiceAmount}</span>
            </p>
            <p className="flex items-center">
              GST Amount <span className="ml-auto font-semibold">₹{invoice.gstAmount}</span>
            </p>
            <p className="flex items-center">
              Amount Received <span className="ml-auto font-semibold">₹{invoice.amountReceived}</span>
            </p>
            <p className="flex items-center text-red-600 font-semibold">
              Amount Payable <span className="ml-auto">₹{invoice.amountPayable}</span>
            </p>
          </div>
        </Card>

        {/* Items Purchased */}
        <h2 className="mt-6 text-lg font-bold">Items Purchased</h2>
        {purchasedItems.map((item, index) => (
          <Card key={index} className="mt-3 bg-gray-100">
            <CardContent className="p-4 space-y-1 text-gray-700">
              <p className="font-semibold">{item.productName}</p>
              <p>Quantity <span className="ml-auto font-semibold">{item.quantity}</span></p>
              <p>Selling Price <span className="ml-auto font-semibold">₹{item.sellingPrice}</span></p>
              <p>Total Amount <span className="ml-auto font-semibold">₹{item.totalAmount}</span></p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InvoiceDetails;
