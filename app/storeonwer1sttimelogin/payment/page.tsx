'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter(); // Initialize router

  const handlePaymentSuccess = () => {
    router.push("/storeonwer1sttimelogin/paymentsuccessfull"); 
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-[393px] h-[852px] mx-auto">
        {/* Header Section */}
        <CardHeader className="flex flex-col items-center">
          <Image src="/accm.png" alt="Logo" width={115} height={116} />
          <CardTitle className="mt-4 text-xl font-semibold">
            Order ID: 123455
          </CardTitle>
        </CardHeader>

        {/* User Info Section */}
        <CardContent className="text-left space-y-2">
          <p>
            <span className="font-semibold">Full Name</span> <br />
            Dhiraj Patil
          </p>
          <p>
            <span className="font-semibold">Business Name</span> <br />
            Reliance Industries Pvt. Ltd.
          </p>
          <p>
            <span className="font-semibold">Plan</span> <br />
            Premium, annual subscription
          </p>
          <p className="font-semibold text-lg mt-2">₹ 2,000/Year</p>
        </CardContent>
        
        <CardContent className="mt-4">
          <p className="font-semibold mb-2">Pay with</p>
        </CardContent>
        
        {/* Payment Options */}
        <CardContent className="mt-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/card.jpeg", alt: "Card", label: "Card" },
              { src: "/upi.png", alt: "UPI", label: "UPI" },
              { src: "/paymentlink.png", alt: "Payment Link", label: "Payment Link" },
              { src: "/bharatqr.png", alt: "Bharat QR", label: "Bharat QR" },
              { src: "/cash.jpeg", alt: "Cash", label: "Cash" },
              { src: "/cheque.jpeg", alt: "Cheque", label: "Cheque" },
              { src: "/standardEMI.png", alt: "Standard EMI", label: "Standard EMI" },
              { src: "/brandemi.png", alt: "Brand EMI", label: "Brand EMI" },
              { src: "/brandoffer.png", alt: "Brand Offers", label: "Brand Offers" }
            ].map((payment, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex flex-col items-center mb-4"
                onClick={handlePaymentSuccess}
              >
                <Image src={payment.src} alt={payment.alt} width={24} height={24} />
                <span>{payment.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
