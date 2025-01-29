'use client';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import HalfChart from './half-pie-graph';

const HalfGraph = () => {

    return (
        <Card className='h-[29rem]'>
            <CardHeader>
                <CardTitle className="text-sm font-semibold flex items-center justify-between">
                    <div className='flex items-center'>
                        <div className='bg-background p-[0.3rem] rounded-lg mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
                                <path fill="#6b7280" d="M18 10h-1V4H7v6H6a2 2 0 0 0-2 2v7h16v-7a2 2 0 0 0-2-2M9 6h6v4H9zm9 11H6v-5h12zm-1-2h-4v-2h4z" />
                            </svg>
                        </div>
                        Sales Distribution
                    </div>
                    <select id="countries" className="w-20 bg-card border border-gray-300 text-gray-600 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5">
                        <option selected value='Weekly'>Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </CardTitle>
                <div className='grid grid-cols-3 gap-4 lg:grid-cols-2 xl:grid-cols-3 pt-6'>
                    <div className='text-lg font-bold leading-none sm:text-xl'>
                        <div className='text-slate-400 text-sm font-normal border-l-4 border-[#887cfd] pl-2 mb-1'>Website</div>
                        <span className='text-slate-500 font-normal'>$</span> 374.82
                    </div>
                    <div className='text-lg font-bold leading-none sm:text-xl'>
                        <div className='text-slate-400 text-sm font-normal border-l-4 border-[#16c8c7] pl-2 mb-1'>Mobile App</div>
                        <span className='text-slate-500 font-normal'>$</span> 241.73
                    </div>
                    <div className='text-lg font-bold leading-none sm:text-xl'>
                        <div className='text-slate-400 text-sm font-normal border-l-4 border-[#cbd5e1] pl-2 mb-1'>Other</div>
                        <span className='text-slate-500 font-normal'>$</span> 214.73
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="-mt-16">
                    <HalfChart />
                </div>
            </CardContent>
        </Card>
    );
}
export default HalfGraph;