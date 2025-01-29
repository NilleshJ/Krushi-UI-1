// pages/outstanding-customers.tsx
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const OutstandingCustomers = () => {
  const customers = [
    {
      name: "Rajendra Shedge",
      lastPurchase: "12-Dec-2024",
      invoiced: 12000,
      paid: 9000,
      due: 3000,
    },
    {
      name: "Rajendra Shedge",
      lastPurchase: "12-Dec-2024",
      invoiced: 12000,
      paid: 9000,
      due: 3000,
    },
    {
      name: "Rajendra Shedge",
      lastPurchase: "12-Dec-2024",
      invoiced: 12000,
      paid: 9000,
      due: 3000,
    },
    {
      name: "Rajendra Shedge",
      lastPurchase: "12-Dec-2024",
      invoiced: 12000,
      paid: 9000,
      due: 3000,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-center mb-4">
        Outstanding Customers
      </h1>
      <div className="flex items-center space-x-2 mb-4">
        <button className="text-blue-500 text-sm">&lt; Customer</button>
        <Input
          type="text"
          placeholder="Search Mobile/ Aadhaar Number"
          className="flex-grow"
        />
      </div>
      <div className="space-y-4">
        {customers.map((customer, index) => (
          <Card key={index} className="border border-gray-200">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-medium">{customer.name}</h2>
                  <p className="text-xs text-gray-500">
                    Last Purchase: {customer.lastPurchase}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm">
                    ₹{customer.invoiced} <span className="text-gray-500">Invoiced</span>
                  </p>
                  <p className="text-sm">
                    ₹{customer.paid} <span className="text-gray-500">Paid</span>
                  </p>
                  <p className="text-red-500 text-lg font-bold">
                    ₹{customer.due} <span className="text-gray-500">Due</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
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
  );
};

export default OutstandingCustomers;
