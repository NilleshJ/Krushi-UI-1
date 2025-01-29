"use client"; // This makes sure this is a client component in Next.js

import React from "react";
import { useRouter } from "next/navigation"; // For navigation
import { Calendar, Users, FileText, Search } from "lucide-react";

// Define prop types for the BottomNavbar component
interface BottomNavbarProps {
  activeTab: string;
  onTabChange?: (tab: string) => void; // Optional if navigation is handled internally
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({ activeTab }) => {
  const router = useRouter(); // Next.js router for navigation

  const tabs = [
    { id: "today", icon: Calendar, label: "Today", route: "/today" },
    { id: "customer", icon: Users, label: "Customer", route: "/customer" },
    { id: "order", icon: FileText, label: "Order", route: "/order" },
    { id: "search", icon: Search, label: "Search", route: "/search" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map(({ id, icon: Icon, label, route }) => (
          <button
            key={id}
            onClick={() => router.push(route)} // Navigate to the page
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === id ? "text-blue-500" : "text-gray-500"
            }`}
          >
            <Icon size={20} />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
