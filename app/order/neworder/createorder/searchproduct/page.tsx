'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Wallet } from 'lucide-react';
import BottomNavbar from '@/app/Bottomnavbar';

interface Product {
  productName: string;
  searchKey: string;
}

export default function CustomerOrder() {
  const [productName, setProductName] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [tempData, setTempData] = useState<Product[]>([]);
  const router = useRouter();

  // Sample valid product data
  const validProducts = [
    { name: 'Product1', key: 'Key123' },
    { name: 'Product2', key: 'Key456' },
    { name: 'Product3', key: 'Key789' },
  ];

  const handleProceed = () => {
    const isValid = validProducts.some(
      (product) => product.name === productName && product.key === searchKey
    );
    
    if (isValid) {
      setTempData([...tempData, { productName, searchKey }]);
      setProductName('');
      setSearchKey('');
      router.push('/order/neworder/createorder/searchorder/selectproduct'); // Navigate to another page
    } else {
      alert('Invalid Product Name or Search Key');
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      {/* Customer Order Section */}
      <div className="bg-green-100 p-6 rounded-lg w-full max-w-md relative">
        <ArrowLeft 
          className="absolute top-4 left-4 cursor-pointer text-blue-500" 
          onClick={() => router.push('/order/neworder/createorder')} // Navigate to desired page
        />
        <h1 className="text-xl font-bold text-center">Customer Order</h1>
        <p className="mt-2 font-medium text-center">Rajendra Shedge</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="font-semibold">Last Purchase Date:</p>
          <p>12-Dec-2024</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <p className="font-semibold">Total Balance Due:</p>
          <div className="flex items-center gap-1 font-bold text-lg">
            <Wallet className="text-gray-700" size={18} /> 12000
          </div>
        </div>
      </div>

      {/* Search Product Section */}
      <div className="w-full max-w-md text-center">
        <h2 className="text-lg font-semibold">Search Product</h2>
        <p className="text-gray-500 text-sm">Search for a product by name or shortcut</p>
        <div className="border-b border-gray-300 my-2"></div>
        
        <p className="text-left text-sm font-medium">Search Product by Product Name</p>
        <Input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="mt-1"
        />
        
        <div className="text-gray-500 my-2">Or</div>
        
        <p className="text-left text-sm font-medium">Search Product by Search Key</p>
        <Input
          type="text"
          placeholder="Product Search Key"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          className="mt-1"
        />
        
        <Button className="bg-blue-500 text-white w-full mt-4 py-2 text-lg" onClick={handleProceed}>
          Proceed
        </Button>
      </div>

      {/* Temporary Data Display */}
      <div className="w-full max-w-md mt-6">
        <h3 className="text-lg font-semibold text-center">Stored Products</h3>
        <ul className="list-disc list-inside bg-gray-100 p-4 rounded-lg">
          {tempData.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item.productName || 'N/A'} - {item.searchKey || 'N/A'}
            </li>
          ))}
        </ul>
      </div>
      <BottomNavbar activeTab={''}></BottomNavbar>
    </div>
  );
}
