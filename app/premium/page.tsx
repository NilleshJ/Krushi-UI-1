"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SubscriptionPage() {
  const router = useRouter(); // Initialize router

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    router.push("/storeonwer1sttimelogin/payment"); 
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-white min-h-screen p-4"
      style={{
        width: "393px", // Set page width
        height: "852px", // Set page height
        margin: "auto", // Center the layout horizontally if needed
      }}
    >
      {/* Logo */}
      <div className="mb-4">
        <Image src="/accm.png" alt="Logo" width={116} height={115} />
      </div>

      {/* Title */}
      <p className="text-center text-gray-700 font-medium mb-6">
        Please select and subscribe to the store management plan that best
        suits your needs.
      </p>

      {/* Subscription Plan Container */}
      <div
        className="relative w-[314px] h-[458px] rounded-lg shadow-lg p-4"
        style={{
          background:
            "linear-gradient(180deg, rgba(67, 148, 241, 0.46) 0%, rgba(122, 39, 139, 0.46) 100%)",
        }}
      >
        {/* Airplane Image */}
        <div className="absolute top-4 left-4">
          <Image src="/airoplane.png" alt="Airplane" width={40} height={40} />
        </div>

        {/* Plan Title */}
        <div className="mt-16">
          <p className="text-left text-black font-semibold text-lg">
            Premium Plan
          </p>
        </div>

        {/* Plan Price */}
        <div className="absolute bottom-8 left-4 text-black">
          <p className="text-xl font-bold">₹ 2,000/Year</p>
        </div>
      </div>

      {/* Get Started Button */}
      <Button
        className="w-[314px] bg-blue-500 text-white font-medium py-2 rounded-lg mt-6"
        onClick={handleLogin}
      >
        Get Started
      </Button>
    </div>
  );
}
