'use client';

import React, { useState, useEffect } from "react";
import { Search, ArrowLeft, Calendar, Users, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BottomNavbar from "../Bottomnavbar"; // Import the BottomNavbar

interface Product {
  name: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

interface Order {
  date: string;
  invoiceNumber: string;
  orderNumber: number;
  products: Product[];
}

interface Customer {
  name: string;
  lastPurchase: string;
  invoiced: number;
  paid: number;
  due: number;
  orders: Order[];
}

const CustomerApp = () => {
  const [currentView, setCurrentView] = useState<string>("home");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [customers, setCustomers] = useState<Customer[]>([]); // State to store fetched customers
  const [loading, setLoading] = useState<boolean>(false); // Loading state for API call
  const [error, setError] = useState<string>(""); // Error state for API call
  const [outstandingCount, setOutstandingCount] = useState<number>(0); // Outstanding count state
  const [totalCustomers, setTotalCustomers] = useState<number>(0); // Total customers state

  // API call to fetch customer data based on search term
  const fetchCustomers = async () => {
    if (!searchTerm) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://api.example.com/customers?search=${searchTerm}`);
      if (!response.ok) {
        throw new Error("Error fetching customers");
      }
      const data = await response.json();
      setCustomers(data.customers); // Set the customers data from API response
      setOutstandingCount(data.outstandingCount); // Set the outstanding count from API response
      setTotalCustomers(data.totalCustomers); // Set total customers count from API response
    } catch (error) {
      setError("Failed to fetch customer data");
    } finally {
      setLoading(false);
    }
  };

  // Fetch customers when the searchTerm changes
  useEffect(() => {
    fetchCustomers();
  }, [searchTerm]);

  const renderHome = () => (
    <div className="flex flex-col h-full">
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-4">Customer</h1>
        <Input
          placeholder="Search Mobile/Aadhaar Number"
          className="mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h2 className="text-sm mb-2">Pinned</h2>
        <div className="space-y-2">
          <Card
            className="p-3 bg-gradient-to-r from-blue-400 to-blue-300 text-white cursor-pointer"
            onClick={() => setCurrentView("newCustomer")}
          >
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>New Customer</span>
            </div>
          </Card>

          <Card
            className="p-3 bg-gradient-to-r from-orange-400 to-orange-300 cursor-pointer"
            onClick={() => setCurrentView("outstandingCustomers")}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText size={20} />
                <span>Outstanding Customers</span>
              </div>
              <span className="text-white">{outstandingCount}</span>
            </div>
          </Card>

          <Card
            className="p-3 bg-gradient-to-r from-green-400 to-green-300 cursor-pointer"
            onClick={() => setCurrentView("allCustomers")}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>All Customers</span>
              </div>
              <span className="text-white">{totalCustomers}</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderNewCustomer = () => (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-6">New Customer</h1>
      <p className="text-sm text-center mb-4">
        To add a new customer, complete the customer's KYC by validating their Aadhaar number
      </p>
      <Input placeholder="Aadhaar Number" className="mb-4" />
      <Button className="w-full bg-blue-500 hover:bg-blue-600">Proceed</Button>
    </div>
  );

  const renderCustomerCard = (customer: Customer) => (
    <Card className="p-4 mb-2 cursor-pointer" onClick={() => setCurrentView("customerTimeline")}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{customer.name}</h3>
          <p className="text-sm text-gray-500">Last Purchase {customer.lastPurchase}</p>
        </div>
        <div className="text-right">
          <p>₹ {customer.invoiced}</p>
          <p className="text-gray-500">Invoiced</p>
        </div>
        <div className="text-right">
          <p>₹ {customer.paid}</p>
          <p className="text-gray-500">Paid</p>
        </div>
        <div className="text-right">
          <p className="text-red-500">₹ {customer.due}</p>
          <p className="text-gray-500">Due</p>
        </div>
      </div>
    </Card>
  );

  const renderCustomerList = (title: string) => (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <Button variant="ghost" onClick={() => setCurrentView("home")}>
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <Input placeholder="Search Mobile/Aadhaar Number" className="mb-4" />
      <div className="space-y-2">
        {customers.length > 0 ? (
          customers.map((customer, index) => renderCustomerCard(customer))
        ) : (
          <p>No customers found</p>
        )}
      </div>
    </div>
  );

  const renderInvoiceDetails = () => (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <Button variant="ghost" onClick={() => setCurrentView("customerTimeline")}>
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-xl font-semibold">Invoice Details</h1>
      </div>

      <Card className="p-4 mb-4 bg-yellow-50">
        <div className="mb-2">
          <p>Rajendra Shedge</p>
          <p className="text-sm text-gray-500">Invoice Date 12-Dec-2024</p>
          <p className="text-sm text-gray-500">Invoice Number ZSD-Dec-2024</p>
          <p className="text-sm text-gray-500">Order Total ₹ 12000</p>
        </div>
      </Card>

      <Button className="w-full mb-4 bg-blue-500 hover:bg-blue-600">Outstanding Payment Received?</Button>

      <div className="space-y-4">
        {customers[0]?.orders[0]?.products.map((product, index) => (
          <Card key={index} className="p-4">
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <div className="flex justify-between text-sm">
              <div>
                <p>₹ {product.unitPrice}</p>
                <p className="text-gray-500">Unit Price (MRP)</p>
              </div>
              <div className="text-center">
                <p>{product.quantity}</p>
                <p className="text-gray-500">Quantity</p>
              </div>
              <div className="text-right">
                <p>₹ {product.total}</p>
                <p className="text-gray-500">Total Amount</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderView = () => {
    switch (currentView) {
      case "newCustomer":
        return renderNewCustomer();
      case "outstandingCustomers":
        return renderCustomerList("Outstanding Customers");
      case "allCustomers":
        return renderCustomerList("All Customers");
      case "customerTimeline":
        return renderCustomerList("Customer Timeline");
      case "invoiceDetails":
        return renderInvoiceDetails();
      default:
        return renderHome();
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-white flex flex-col">
      {renderView()}

      {/* Add the BottomNavbar here for routing */}
      <BottomNavbar activeTab={currentView} onTabChange={setCurrentView} />
    </div>
  );
};

export default CustomerApp;
