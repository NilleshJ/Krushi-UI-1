'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClipboardList } from "lucide-react";
import { useState, useEffect } from "react";
import BottomNavbar from "../Bottomnavbar";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

// Define the Order type
interface Order {
  name: string;
  orderDate: string;
  products: number;
  amount: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const router = useRouter(); // Initialize router

  useEffect(() => {
    // Simulating fetching data from a database
    const fetchedOrders: Order[] = [
      {
        name: "Rajendra Shedge",
        orderDate: "12-Dec-2024",
        products: 12,
        amount: "₹ 12000",
      },
      {
        name: "Rajendra Shedge",
        orderDate: "12-Dec-2024",
        products: 12,
        amount: "₹ 12000",
      },
      {
        name: "Rajendra Shedge",
        orderDate: "12-Dec-2024",
        products: 12,
        amount: "₹ 12000",
      },
      {
        name: "Rajendra Shedge",
        orderDate: "12-Dec-2024",
        products: 12,
        amount: "₹ 12000",
      },
    ];
    setOrders(fetchedOrders);
  }, []);

  // Handle New Order Button click event
  const handleNewOrderClick = () => {
    // Redirect to the "new-order" page (adjust the path as needed)
    router.push("/order/neworder"); // Change to your desired path
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold">Orders</h1>
      <Button
        className="w-full mt-4 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        onClick={handleNewOrderClick} // Add onClick handler to navigate
      >
        <ClipboardList size={20} /> New Order
      </Button>
      <h2 className="text-lg font-semibold mt-6">Pending Orders</h2>
      <ScrollArea className="mt-4 space-y-3">
        {orders.map((order, index) => (
          <Card key={index} className="bg-red-200">
            <CardContent className="p-4">
              <div className="flex justify-between font-semibold">
                <span>{order.name}</span>
                <span className="text-sm">Order Date {order.orderDate}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Products {order.products}</span>
                <span>Invoice Amount <strong>{order.amount}</strong></span>
              </div>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
      <BottomNavbar activeTab={""}></BottomNavbar>
    </div>
  );
}
