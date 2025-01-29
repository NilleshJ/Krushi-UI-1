"use client"
import Image from "next/image"
import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Truck, Info, CreditCard, Settings, Store } from "lucide-react"

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between w-full px-4 sm:px-6 mt-6">
        <div className="text-3xl font-bold">Browse</div>
        {/* Profile picture */}
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <Image src="/profile.png" alt="User Icon" className="rounded-full" width={64} height={64} />
        </div>
      </div>
      {/* Content */}
      <main className="flex-1 p-4 space-y-6 mt-4">
        {/* Inventory Section */}
        <section>
          <h2 className="text-sm font-semibold text-gray-700">Inventory</h2>
          <div className="space-y-2">
            <Card>
              <CardContent className="flex items-center justify-between">
                <span className="flex items-center">
                  <Package className="w-5 h-5 mr-2 text-gray-500" />
                  Products
                </span>
                <Button variant="ghost" size="sm">
                  {">"}
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between">
                <span className="flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-gray-500" />
                  Inventory
                </span>
                <Button variant="ghost" size="sm">
                  {">"}
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between">
                <span className="flex items-center">
                  <Info className="w-5 h-5 mr-2 text-gray-500" />
                  Suppliers
                </span>
                <Button variant="ghost" size="sm">
                  {">"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Account Section */}
        <section>
          <h2 className="text-sm font-semibold text-gray-700">Account</h2>
          <div className="space-y-2">
            <Card>
              <CardContent className="flex items-center justify-between">
                <span className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-gray-500" />
                  Subscription
                </span>
                <Button variant="ghost" size="sm">
                  {">"}
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between">
                <span className="flex items-center">
                  <Info className="w-5 h-5 mr-2 text-gray-500" />
                  Customer KYC
                </span>
                <Button variant="ghost" size="sm">
                  {">"}
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between">
                <span className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-gray-500" />
                  Store Information
                </span>
                <Button variant="ghost" size="sm">
                  {">"}
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between">
                <span className="flex items-center">
                  <Store className="w-5 h-5 mr-2 text-gray-500" />
                  Store Owner
                </span>
                <Button variant="ghost" size="sm">
                  {">"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around p-2">
        <button className="flex flex-col items-center text-blue-500">
          <img src="today.png" alt="Today" className="w-6 h-6" />
          <span className="text-xs">Today</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <img src="customer.png" alt="Customer" className="w-6 h-6" />
          <span className="text-xs">Customer</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <img src="order.png" alt="Order" className="w-6 h-6" />
          <span className="text-xs">Order</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <img src="search.png" alt="Search" className="w-6 h-6" />
          <span className="text-xs">Search</span>
        </button>
      </div>
    </div>
  )
}

export default Page

