'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";
import { useRouter } from "next/navigation";

export default function CustomerOrder() {
    const router = useRouter(); // Initialize router

    // Handle navigation for each customer type
    const handleCustomerSelect = (customerType: string) => {
        if (customerType === 'retail') {
            router.push("/order/neworder/createorder"); // Retail customer navigation
        } else if (customerType === 'business') {
            router.push("/order/neworder/createorder"); // Business customer navigation (update path as needed)
        }
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-4">
            <h1 className="text-2xl font-semibold text-center mt-4">Customer Order</h1>
            <div className="w-full max-w-md text-center mt-4">
                <div className="w-full max-w-md text-center text-blue-500">
                    <ArrowLeft size={24} />
                </div>
                <h2 className="text-lg font-medium mt-2">Customer</h2>
                <p className="text-gray-500 mt-1">
                    Please select a type of customer to create an order
                </p>
                <div className="flex gap-4 mt-6 justify-center">
                    {/* Retail Customer Card */}
                    <Card 
                        className="w-40 bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
                        onClick={() => handleCustomerSelect('retail')} // Navigate on Retail click
                    >
                        <CardContent className="p-4 flex flex-col items-center">
                            <span className="text-3xl">☁️</span>
                            <span className="mt-2">Retail Customer</span>
                        </CardContent>
                    </Card>

                    {/* Business Customer Card */}
                    <Card 
                        className="w-40 bg-orange-500 text-white cursor-pointer hover:bg-orange-600"
                        onClick={() => handleCustomerSelect('business')} // Navigate on Business click
                    >
                        <CardContent className="p-4 flex flex-col items-center">
                            <span className="text-3xl">🏪</span>
                            <span className="mt-2">Business Customer</span>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <BottomNavbar activeTab={""} />
        </div>
    );
}
