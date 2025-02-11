"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

export default function NewCustomer() {
  const [customerType, setCustomerType] = useState<string>("");
  const router = useRouter();

  const handleProceed = () => {
    console.log("Proceed Clicked with Type:", customerType); // Debugging
    if (customerType === "retailer") {
      router.push("/New_customer(retail)");
    } else if (customerType === "business") {
      router.push("/New_customer(B2B)");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      {/* Header */}
      <div className="flex items-center w-full max-w-md mb-6">
        <Button variant="ghost" size="icon" onClick={() => router.push("/customer")}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-2xl font-bold flex-1 text-center">New Customer</h1>
      </div>

      {/* Customer Type Selection */}
      <Card className="w-full max-w-md p-4">
        <CardContent className="space-y-4">
          <label className="text-gray-700 font-medium">Customer Type</label>
          <Select
            onValueChange={(value) => {
              console.log("Selected Customer Type:", value); // Debugging
              setCustomerType(value);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Customer Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="retailer">Retailer</SelectItem>
              <SelectItem value="business">Business (B2B)</SelectItem>
            </SelectContent>
          </Select>

          {/* Proceed Button */}
          <Button className="w-full mt-4" onClick={handleProceed} disabled={!customerType}>
            Proceed
          </Button>
        </CardContent>
      </Card>

      {/* Bottom Navbar */}
      <BottomNavbar activeTab="" />
    </div>
  );
}
