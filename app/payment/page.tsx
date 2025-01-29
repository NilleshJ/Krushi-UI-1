import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PaymentPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4"
   
    >
      <Card className="w-[350px]"
      
    style={{
      width: "393px", // Set page width
      height: "852px", // Set page height
      margin: "auto", // Center the layout horizontally if needed
    }}
      >
        {/* Header Section */}
        <CardHeader className="flex flex-col items-center">
          <Image
            src="/accm.png" // Replace with your logo path
            alt="Logo"
            width={115}
            height={116}
          />
          <CardTitle className="mt-4 text-xl font-semibold">
            Order ID :123455
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
            <Button variant="outline" className="flex flex-col items-center mb-4">
              <Image src="/card.jpeg" alt="Card" width={24} height={24} />
              <span>Card</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center mb-4">
              <Image src="/upi.png" alt="UPI" width={24} height={24} />
              <span>UPI</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center mb-4">
              <Image src="/paymentlink.png" alt="Payment Link" width={24} height={24} />
              <span>Payment Link</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center mb-4">
              <Image src="/bharatqr.png" alt="Bharat QR" width={24} height={24} />
              <span>Bharat QR</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center mb-4">
              <Image src="/cash.jpeg" alt="Cash" width={24} height={24} />
              <span>Cash</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center mb-4">
              <Image src="/cheque.jpeg" alt="Cheque" width={24} height={24} />
              <span>Cheque</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center mb-4">
              <Image src="/standardEMI.png" alt="Standard EMI" width={24} height={24} />
              <span>Standard EMI</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center mb-4">
              <Image src="/brandemi.png" alt="Brand EMI" width={24} height={24} />
              <span>Brand EMI</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center mb-4">
              <Image src="/brandoffer.png" alt="Brand Offers" width={24} height={24} />
              <span>Brand Offers</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
