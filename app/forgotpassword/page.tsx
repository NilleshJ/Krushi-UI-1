"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for programmatic navigation
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  const [formData, setFormData] = useState({
    mobile: "",
  });

  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Initialize router

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Mobile input validation - ensure only numeric and 10 digits
  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    setFormData({ ...formData, mobile: value });
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { mobile } = formData;

    if (!mobile) {
      setError("Mobile number is required.");
      return;
    }

    // Validate mobile number (exactly 10 digits)
    if (mobile.length !== 10) {
      setError("Invalid mobile number. Must be 10 digits.");
      return;
    }

    setError(null);
    console.log("Forgot password data:", formData);

    // TODO: Implement API request for sending OTP or password reset email
    // Navigate to the OTP verification page (example path)
    router.push("/otp-verification"); // Change to your OTP verification page
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-xs shadow-lg p-6 rounded-2xl">
        <div className="flex flex-col items-center">
          <img src="/accm.png" alt="Logo" className="w-16 h-16 mb-2" />
          <h2 className="text-2xl font-semibold">Forgot Password</h2>
        </div>

        <div className="mt-4 space-y-4">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                name="mobile"
                type="text"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleMobileChange}
                className="rounded-lg"
                maxLength={10} // Restrict input length to 10 digits
                inputMode="numeric" // Only numeric input
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              Send OTP
            </Button>
          </form>

          <div className="text-center mt-2">
            <p className="text-sm">
              Remembered your password?{" "}
              <a
                onClick={() => router.push("/signin")}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-4">© 2025 Deavnet Solutions</p>
      </div>
    </main>
  );
}
