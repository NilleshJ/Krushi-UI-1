"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils"; // Utility function for conditional styling

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(null); // Clear errors if validation passes
    console.log("Sign-up data:", formData);

    // TODO: Implement API request for sign-up
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-sm shadow-lg p-6 bg-white rounded-2xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Create an Account</h2>
          <p className="text-gray-500 text-sm">Sign up to get started</p>
        </div>

        <CardContent className="mt-4 space-y-4">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-xl"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-xl"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter a strong password"
                value={formData.password}
                onChange={handleChange}
                className="rounded-xl"
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="rounded-xl"
              />
            </div>

            <Button
              type="submit"
              className={cn(
                "w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition",
                !formData.name || !formData.email || !formData.password || !formData.confirmPassword
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              )}
              disabled={!formData.name || !formData.email || !formData.password || !formData.confirmPassword}
            >
              Sign Up
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link href="/signin" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
