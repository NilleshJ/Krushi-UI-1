"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios"; // For API calls


export default function SignUp() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [aadharNumber, setAadharNumber] = useState(""); // Store Aadhaar number
  const [error, setError] = useState<string | null>(null); // Error state for validation messages
  const router = useRouter();

  // Create refs for each OTP input for easy focus management
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle OTP input change
  const handleOtpChange = (value: string, index: number) => {
    // Only update if the new value is empty or a valid single digit (0-9)
    if (value === "" || /^[0-9]$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // If a digit is entered and it isn't the last field, move focus to the next field
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Handle keydown for backspace to move focus to the previous input if current is empty
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  // Handle paste event for OTP input fields
  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>, index: number) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("Text").trim();
    // Check if pasted data is numeric
    if (/^\d+$/.test(pastedData)) {
      const pastedDigits = pastedData.split("");
      const updatedOtp = [...otp];
      let currentIndex = index;
      pastedDigits.forEach((digit) => {
        if (currentIndex < updatedOtp.length) {
          updatedOtp[currentIndex] = digit;
          currentIndex++;
        }
      });
      setOtp(updatedOtp);
      // Move focus to the next empty input or last input
      if (currentIndex < otp.length) {
        inputRefs.current[currentIndex]?.focus();
      } else {
        inputRefs.current[otp.length - 1]?.focus();
      }
    }
  };

  // OTP validation function
  const validateOtp = () => {
    if (otp.some((digit) => digit === "")) {
      setError("OTP must be 6 digits.");
      return false;
    }
    setError(null);
    return true;
  };

  // Verify OTP function with routing to the next page
  const verifyOtp = async () => {
    if (!validateOtp()) return;

    setLoading(true);
    try {
      // API call to verify OTP
      const response = await axios.post("/api/verify-aadhar-otp", {
        aadharNumber,
        otp: otp.join(""),
      });

      if (response.status === 200) {
        // Redirect to the next page upon successful OTP verification
        router.push("/aadharverification"); // Replace with your desired route
      } else {
        setError("Failed to verify OTP. Please try again.");
      }
    } catch (err: any) {
      console.error("Error verifying OTP:", err);
      setError("An error occurred while verifying the OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-gray-50">
      {/* Description Section */}
      <div className="text-center text-lg text-gray-600 mb-8">
        <p>
          To complete the Aadhaar verification process, please enter the OTP sent to your registered mobile number.
        </p>
      </div>

      {/* OTP Input Section */}
      <form
        className="flex flex-col items-center gap-6 w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          verifyOtp();
        }}
      >
        {/* Error Message */}
        {error && <div className="text-red-600 mb-4">{error}</div>}

        <div className="flex justify-center gap-3 w-full">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              value={digit}
              maxLength={1}
              className="w-14 h-14 border border-gray-300 text-center text-2xl font-medium rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleOtpChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={(e) => handlePaste(e, index)}
              inputMode="numeric"
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 text-lg rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
          disabled={loading || otp.some((digit) => digit === "")}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </Button>
      </form>
    </div>
  );
}
