"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";


// Define invoice data structure
interface Invoice {
  invoiceNo: string;
  invoiceDate: string;
  invoiceAmount: number;
  gstAmount: number;
  amountReceived: number;
  amountPayable: number;
  items: { name: string; quantity: number; sellingPrice: number; totalAmount: number }[];
}

// Static invoice data (until API is available)
const invoiceData: Invoice = {
  invoiceNo: "WSDT/2024-25/0012",
  invoiceDate: "12-Dec-2024",
  invoiceAmount: 12000,
  gstAmount: 1000,
  amountReceived: 10000,
  amountPayable: 2000,
  items: [
    { name: "Product Name 1", quantity: 12, sellingPrice: 1000, totalAmount: 12000 },
    { name: "Product Name 1", quantity: 12, sellingPrice: 1000, totalAmount: 12000 },
  ],
};

const InvoiceDetails = () => {
  const router = useRouter();
  const [invoice, setInvoice] = useState<Invoice | null>(null);

  // Fetch API logic (Currently using static data)
  useEffect(() => {
    // Simulating API Call
    setTimeout(() => {
      setInvoice(invoiceData);
    }, 500);
  }, []);

  if (!invoice) {
    return <p className="text-center mt-10">Loading Invoice Details...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="p-4 bg-red-100 sticky top-0 z-10 flex items-center gap-2 shadow-md">
        <ArrowLeft size={24} className="cursor-pointer" onClick={() => router.push("/outstanding_invoice")} />
        <h1 className="text-lg font-semibold">Invoice Details</h1>
      </div>

      {/* Invoice Information */}
      <div className="p-4 bg-red-100 rounded-b-lg">
        <h2 className="text-xl font-bold">{invoiceData.invoiceNo}</h2>
        <p className="text-gray-600">{invoiceData.invoiceDate}</p>

        <div className="mt-2 space-y-1">
          <p className="flex justify-between">
            Invoice Amount: <span className="font-semibold">₹{invoice.invoiceAmount}</span>
          </p>
          <p className="flex justify-between">
            GST Amount: <span className="font-semibold">₹{invoice.gstAmount}</span>
          </p>
          <p className="flex justify-between">
            Amount Received: <span className="font-semibold">₹{invoice.amountReceived}</span>
          </p>
          <p className="flex justify-between text-red-600 font-bold">
            Amount Payable: <span>₹{invoice.amountPayable}</span>
          </p>
        </div>
      </div>

      {/* Payment Button with Navigation */}
      <div className="p-4">
        <Button 
          className="w-full bg-blue-600 text-white flex items-center gap-2"
          onClick={() => router.push("/outstanding_payment_received")} // Navigate on Click
        >
          <CheckCircle size={18} /> Outstanding Payment Received?
        </Button>
      </div>

      {/* Items Purchased */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Items Purchased</h2>
        {invoice.items.map((item, index) => (
          <Card key={index} className="mb-3">
            <CardContent className="p-3">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-600">Selling Price: ₹{item.sellingPrice}</p>
              <p className="font-semibold">Total Amount: ₹{item.totalAmount}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Navbar (Global File) */}
      
    </div>
  );
};

export default InvoiceDetails;
