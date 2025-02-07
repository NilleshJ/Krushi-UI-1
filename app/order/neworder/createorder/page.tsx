'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react'; // For the arrow icon
import { useState } from 'react';
import BottomNavbar from '@/app/Bottomnavbar';

export default function CustomerOrder() {
    const router = useRouter();
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(true); // State to track input validity

    // Handle the arrow click event to navigate to another page (back)
    const handleArrowClick = () => {
        router.push('/order/neworder'); // Adjust the route as per your need (e.g., '/' for home page)
    };

    // Handle the "Proceed" button click event
    const handleProceedClick = () => {
        if (isValid && inputValue) {
            router.push('/order/neworder/createorder/searchproduct'); // Navigate to the order confirmation page (adjust the path as needed)
        } else {
            alert('Please enter a valid name or mobile number!');
        }
    };

    // Function to validate input value
    const validateInput = (value: string) => {
        // Regex to validate if the input is either a name (alphabets and spaces) or a valid mobile number (10 digits)
        const nameRegex = /^[A-Za-z\s]+$/; // Name validation: alphabets and spaces
        const mobileNumberRegex = /^[0-9]{10}$/; // Mobile number validation: exactly 10 digits

        if (nameRegex.test(value) || mobileNumberRegex.test(value)) {
            setIsValid(true); // Set input as valid if it matches either pattern
        } else {
            setIsValid(false); // Set input as invalid
        }
    };

    // Handle input change and validate
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        validateInput(e.target.value); // Validate the input as user types
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-4">
            {/* Top container with Arrow Icon and Title aligned horizontally */}
            <div className="flex items-center justify-between w-full">
                {/* Arrow Icon */}
                <ArrowLeft
                    size={24}
                    color="blue"
                    onClick={handleArrowClick}
                    className="cursor-pointer"
                />
                <h1 className="text-2xl font-semibold text-center">Customer Order</h1>
                <div className="w-6"></div> {/* Placeholder for alignment */}
            </div>

            <div className="w-full max-w-md text-center mt-4">
                <h2 className="text-lg font-medium">Customer</h2>
                <p className="text-gray-500 mt-1">please select a customer type to create an order</p>
                <p className="text-gray-500 mt-1">Enter your name or mobile number:</p>

                {/* Label above the input box aligned to the left */}
                <p className="text-left w-full mt-2">Select Customer</p>

                {/* Input TextBox */}
                <input
                    type="text"
                    placeholder="Name or Mobile Number"
                    className={`mt-1 p-2 border rounded-md w-full ${!isValid ? 'border-red-500' : 'border-gray-300'}`}
                    value={inputValue}
                    onChange={handleInputChange}
                />

                {/* Proceed Button */}
                <button
                    onClick={handleProceedClick}
                    className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    disabled={!isValid || inputValue === ''}
                >
                    Proceed
                </button>

                {!isValid && <p className="text-red-500 mt-2">Please enter a valid name or mobile number!</p>}
            </div>

            <BottomNavbar activeTab={''}></BottomNavbar>
        </div>
    );
}
