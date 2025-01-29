"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Login() {
  return (
    <div
      className="flex items-center justify-center bg-gray-100"
      style={{
        width: "393px", // Set page width
        height: "852px", // Set page height
        margin: "auto", // Center the layout horizontally if needed
      }}
    >
      {/* Card Container */}
      <div className="flex flex-col items-center bg-white p-8 shadow-lg rounded-lg w-full h-full">
        {/* Logo */}
        <div className="flex items-center justify-center mt-4">
          <Image
            src="/accm.png" // Add your logo path here
            alt="Logo"
            width={116}
            height={115}
            style={{
              width: "116px",
              height: "115px",
              opacity: 1,
            }}
          />
        </div>

        {/* Form */}
        <form className="mt-6 w-full px-6 space-y-4">
          {/* Mobile Number */}
          <Input
            type="text"
            placeholder="Mobile Number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />

          {/* Password */}
          <Input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />

          {/* Login Button */}
          <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
            Login
          </Button>
        </form>

        <div className="mt-4">
        <footer
        className="text-center text-gray-600 py-4"
        style={{
          marginTop: "auto", // Push footer to the bottom
        }}
      >
        Store Owner First Time Login
      </footer>
        {/* <p className="text-center text-gray-600 mt-4 mb-6">Store first-time login</p> */}
        </div>
      </div>
    </div>
  );
}
