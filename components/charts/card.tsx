'use client';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from '@/components/ui/card';
import { usePathname } from 'next/navigation';

const CardChart = ({ data }: any) => {
    const path = usePathname();

    return (
        <Card className='h-[29rem]'>
            <CardHeader>
                <CardTitle className="text-sm font-semibold flex items-center justify-between">
                    <div className='flex items-center'>
                        <div className='bg-background p-[0.3rem] rounded-lg mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
                                <path fill="none" stroke="#6b7280" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.928 19.634h2.138a1.165 1.165 0 0 0 1.116-1.555a6.85 6.85 0 0 0-6.117-3.95m0-2.759a3.664 3.664 0 0 0 3.665-3.664a3.664 3.664 0 0 0-3.665-3.674m-1.04 16.795a1.908 1.908 0 0 0 1.537-3.035a8.03 8.03 0 0 0-6.222-3.196a8.03 8.03 0 0 0-6.222 3.197a1.909 1.909 0 0 0 1.536 3.034zM9.34 11.485a4.16 4.16 0 0 0 4.15-4.161a4.151 4.151 0 0 0-8.302 0a4.16 4.16 0 0 0 4.151 4.16" />
                            </svg>
                        </div>
                        Top Users
                    </div>
                    <select id="countries" value={'Semiannual'} className="w-28 bg-card border border-gray-300 text-gray-600 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5">
                        {/* <option value="Monthly">Monthly</option> */}
                        <option value="Semiannual">7 Months</option>
                        {/* <option value="Yearly">Yearly</option> */}
                    </select>
                </CardTitle>
                <CardDescription>
                    Top users and the number of questions they've asked over the last 7 months.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className={`grid grid-cols-1 gap-4 ${path === '/dashboard' ? 'lg:grid-cols-2 xl:grid-cols-2' : 'lg:grid-cols-3 xl:grid-cols-4'}`}>
                    {data?.map((item: any) => {
                        return (
                            <Card key={item?.id} className='card text-lg font-bold leading-none sm:text-xl p-4'>
                                <div className='text-slate-700 text-sm font-normal mb-1 capitalize'>{item?.name}</div>
                                {item?.questionCount}
                            </Card>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
export default CardChart;