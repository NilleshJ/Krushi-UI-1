"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, IndianRupee } from "lucide-react";


// Static invoice details
const invoiceData = {
  invoiceNo: "WSDT/2024-25/0012",
  invoiceDate: "12-Dec-2024",
  invoiceAmount: 12000,
  gstAmount: 1000,
  amountReceived: 10000,
  amountPayable: 2000,
  customerName: "Rajendra Shedge",
};

const InvoiceDetails = () => {
  const router = useRouter();
  const [amountReceived, setAmountReceived] = useState("");
  const [amountPayable, setAmountPayable] = useState(invoiceData.amountPayable.toString());

  const handleSave = () => {
    //alert("Payment details saved! (API logic to be implemented)");
    router.push("/customer");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="p-4 bg-red-100 sticky top-0 z-10 flex items-center gap-2 shadow-md">
        <ArrowLeft size={24} className="cursor-pointer" onClick={() => router.push("/invoice_details(red)")} />
        <h1 className="text-lg font-semibold">Invoice Details</h1>
      </div>

      {/* Invoice Summary */}
      <div className="p-4 bg-red-50 rounded-b-lg">
        <h2 className="text-xl font-bold">{invoiceData.customerName}</h2>
        <div className="mt-2 space-y-1">
          <p className="flex justify-between">
            Invoice No.: <span className="font-semibold">{invoiceData.invoiceNo}</span>
          </p>
          <p className="flex justify-between">
            Invoice Date: <span className="font-semibold">{invoiceData.invoiceDate}</span>
          </p>
          <p className="flex justify-between">
            Invoice Amount: <span className="font-semibold">₹{invoiceData.invoiceAmount}</span>
          </p>
          <p className="flex justify-between">
            GST Amount: <span className="font-semibold">₹{invoiceData.gstAmount}</span>
          </p>
          <p className="flex justify-between">
            Amount Received: <span className="font-semibold">₹{invoiceData.amountReceived}</span>
          </p>
          <p className="flex justify-between text-red-600 font-bold">
            Amount Payable: <span>₹{invoiceData.amountPayable}</span>
          </p>
        </div>
      </div>

      {/* Payment Update Form */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Outstanding Payment Received?</h2>
        
        <div className="mb-4">
          <label className="text-sm font-semibold">Amount Received</label>
          <Input
            type="number"
            placeholder="Amount Received"
            value={amountReceived}
            onChange={(e) => setAmountReceived(e.target.value)}
            className="mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-semibold">Amount Payable</label>
          <Input
            type="number"
            placeholder="Amount Payable"
            value={amountPayable}
            onChange={(e) => setAmountPayable(e.target.value)}
            className="mt-1"
          />
        </div>

        <Button className="w-full" onClick={handleSave}>
          Save
        </Button>
      </div>

      {/* Bottom Navbar (Global File) */}
      
    </div>
  );
};

export default InvoiceDetails;
