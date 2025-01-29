'use client';
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "../Bottomnavbar";
import axios from "axios";

const PurchaseOrder = () => {
  const [screen, setScreen] = useState<string>("orders");
  const [orders, setOrders] = useState<any[]>([]); // Store orders data
  const [customers, setCustomers] = useState<any[]>([]); // Store customers data
  const [products, setProducts] = useState<any[]>([]); // Store product search results
  const [selectedCustomer, setSelectedCustomer] = useState<string>("");
  const [orderTotal, setOrderTotal] = useState<number>(0);

  // Fetch orders when the component mounts or screen changes
  useEffect(() => {
    if (screen === "orders") fetchOrders();
    if (screen === "customer") fetchCustomers();
  }, [screen]);

  // API Calls
  const fetchOrders = async () => {
    try {
      const response = await axios.get("/api/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("/api/customers");
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const searchProducts = async (query: string) => {
    try {
      const response = await axios.get(`/api/products?search=${query}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Screens
  const OrdersScreen = () => (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Orders</h1>
      <Button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white mb-4"
        onClick={() => setScreen("customer")}
      >
        New Order
      </Button>
      <h2 className="font-medium mb-2">Pending Orders</h2>
      {orders.map((order, index) => (
        <div key={order.id} className="bg-white rounded-lg shadow-sm border p-4 mb-2">
          <div className="flex justify-between">
            <div>
              <p className="font-medium">{order.customerName}</p>
              <p className="text-sm text-gray-600">Products: {order.productCount}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Order Date: {order.date}</p>
              <p className="font-medium">Invoice Amount: ₹ {order.totalAmount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const CustomerScreen = () => (
    <div className="p-4">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          onClick={() => setScreen("orders")}
          className="text-blue-500 p-0"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Orders
        </Button>
      </div>
      <h1 className="text-xl font-semibold mb-4">Customer</h1>
      <p className="text-gray-600 mb-4">Please select a customer to create an order</p>
      <Input
        placeholder="Search by Mobile Number or Aadhaar Number"
        className="mb-4"
        onChange={(e) => setSelectedCustomer(e.target.value)}
      />
      <ul className="divide-y divide-gray-200">
        {customers.map((customer) => (
          <li
            key={customer.id}
            className="py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => setScreen("product")}
          >
            {customer.name} - {customer.phone}
          </li>
        ))}
      </ul>
    </div>
  );

  const ProductSearchScreen = () => {
    const [query, setQuery] = useState("");

    return (
      <div className="p-4">
        <div className="flex items-center mb-4">
          <Button
            variant="ghost"
            onClick={() => setScreen("customer")}
            className="text-blue-500 p-0"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Orders
          </Button>
        </div>
        <h2 className="text-xl font-semibold mb-4">Search Products</h2>
        <Input
          placeholder="Enter Product Name or Short Key"
          value={query}
          className="mb-4"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          onClick={() => searchProducts(query)}
        >
          Search
        </Button>
        <div className="mt-4">
          {products.map((product) => (
            <Card key={product.id} className="mb-2">
              <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <p>Price: ₹{product.price}</p>
                <Button
                  className="mt-2 bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => setScreen("addProduct")}
                >
                  Add to Order
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50">
      {screen === "orders" && <OrdersScreen />}
      {screen === "customer" && <CustomerScreen />}
      {screen === "product" && <ProductSearchScreen />}
      {/* Other Screens */}
      <BottomNavbar activeTab={screen} onTabChange={setScreen} />
    </div>
  );
};

export default PurchaseOrder;
