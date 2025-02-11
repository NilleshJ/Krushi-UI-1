"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, IndianRupee } from "lucide-react";


// Define invoice structure
interface Invoice {
  invoiceNo: string;
  invoiceAmount: number;
  paidAmount: number;
  dueAmount: number;
  invoiceDate: string;
}

// Static invoices data
const invoices: Invoice[] = [
  {
    invoiceNo: "WSDT/2024-25/0012",
    invoiceAmount: 230,
    paidAmount: 0,
    dueAmount: 230,
    invoiceDate: "12-Dec-2024",
  },
  {
    invoiceNo: "WSDT/2024-25/0012",
    invoiceAmount: 230,
    paidAmount: 0,
    dueAmount: 230,
    invoiceDate: "12-Dec-2024",
  },
  {
    invoiceNo: "WSDT/2024-25/0012",
    invoiceAmount: 230,
    paidAmount: 0,
    dueAmount: 230,
    invoiceDate: "12-Dec-2024",
  },
];

// Static customer summary
const customerSummary = {
  name: "Rajendra Shedge",
  totalInvoiceAmount: 12000,
  totalAmountReceived: 10000,
  totalAmountPayable: 2000,
  lastPaymentDate: "12-Dec-2025",
};

const OutstandingInvoices = () => {
  const router = useRouter();
  const [invoiceList, setInvoiceList] = useState<Invoice[]>([]);

  // Fetch invoices (simulated API call)
  useEffect(() => {
    setTimeout(() => {
      setInvoiceList(invoices);
    }, 500);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="p-4 bg-red-100 sticky top-0 z-10 flex items-center gap-2 shadow-md">
        <ArrowLeft size={24} className="cursor-pointer" onClick={() => router.push("/payment_due")} />
        <h1 className="text-lg font-semibold">Outstanding Invoices</h1>
      </div>

      {/* Customer Summary */}
      <div className="p-4 bg-red-50 rounded-b-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{customerSummary.name}</h2>
          <IndianRupee size={24} />
        </div>
        <div className="mt-2 space-y-1">
          <p className="flex justify-between">
            Total Invoice Amount: <span className="font-semibold">₹{customerSummary.totalInvoiceAmount}</span>
          </p>
          <p className="flex justify-between">
            Total Amount Received: <span className="font-semibold">₹{customerSummary.totalAmountReceived}</span>
          </p>
          <p className="flex justify-between text-red-600 font-bold">
            Total Amount Payable: <span>₹{customerSummary.totalAmountPayable}</span>
          </p>
        </div>
      </div>

      {/* Invoice List */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Invoices</h2>
        <p className="text-gray-600 text-sm mb-2">
          Last Payment Date: <span className="font-semibold">{customerSummary.lastPaymentDate}</span>
        </p>

        {invoiceList.length === 0 ? (
          <p className="text-center text-gray-500">Loading invoices...</p>
        ) : (
          invoiceList.map((invoice, index) => (
            <Card key={index} className="mb-3">
              <CardContent className="p-3">
                <p className="text-sm text-gray-600">Invoice No.</p>
                <p className="font-semibold">{invoice.invoiceNo}</p>
                <p className="text-gray-600">Invoice Amount: ₹{invoice.invoiceAmount}</p>
                <p className="text-gray-600">Paid Amount: ₹{invoice.paidAmount}</p>
                <p className="font-semibold text-red-600">Due: ₹{invoice.dueAmount}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Bottom Navbar (Global File) */}
      
    </div>
  );
};

export default OutstandingInvoices;
