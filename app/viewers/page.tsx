"use client";

import { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { addMonths } from 'date-fns';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import { getViewers } from '@/app/api/sign-in';
import Image from "next/image"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { useRouter } from 'next/navigation';
import PageContainer from '@/components/layout/page-container';

export default function Page() {
    const router = useRouter();
    const [data, setData] = useState<any>(null); // Specify more specific type based on expected data
    const [loading, setLoading] = useState(false);
    const [isSession, setSession] = useState(true);
    const [isToast, setToast] = useState(false);
    const [isUpdate, setUpdate] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('success');
    const [sortBy, setSortBy] = useState('questionCount');
    const [order, setOrder] = useState('desc');
    const [date, setDate] = useState<DateRange | undefined>({
        from: addMonths(new Date(), -6), // 6 days before the current date
        to: new Date(), // current date 
    });
    const [totalCount, setTotalCount] = useState(0);

    // useEffect(() => {
    //   const session = typeof window !== "undefined" && localStorage.getItem("OD_T");
    //   const loginSession: any = session && session !== "undefined" ? session : null;
    //   if (!loginSession) {
    //     router.push("/");
    //     typeof window !== "undefined" && localStorage.removeItem("OD_T");
    //   }
    // }, []);

    const getData = async (page: any, range: any, pageSize: any) => {
        if (!loading) {
            setLoading(true);
            try {
                const obj = {
                    startDateStr: moment(range?.from).format('L'),
                    endDateStr: moment(range?.to).format('L'),
                    pageNumber: page,
                    pageSize: pageSize,
                    name: search,
                    sortBy: sortBy,
                    order: order
                }
                const result = await getViewers(obj);
                if (result?.status === 401) {
                    router.push('/');
                    typeof window !== "undefined" && localStorage.removeItem("OD_T");
                    typeof window !== "undefined" && localStorage.removeItem("OD_U");
                } else {
                    setData(result?.data?.data?.usersListResponse);
                    setTotalCount(result?.data?.data?.totalCount);
                }
            } catch (error) {
                setToast(true);
                setType('error');
                setMessage('An error occurred while fetching data.');
                // localStorage.removeItem("OD_T");
                // router.push("/");
            } finally {
                setLoading(false);
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        getData(1, date, pageSize); // Only call getData when loading is false
    }, [sortBy, order, pageNumber, search]); // Trigger getData when date changes

    const handleChangeDate = (range: DateRange) => {
        setDate(range);
        getData(1, range, pageSize);
    }

    // const refetchData = () => {
    //     getData(pageNumber, date); // Call the getData function with the current state values
    // };


    return (
        <>
            {/* { !isSession ? ( */}
            <>
                {/* <div className="md:hidden">
                    <Image
                        src="/examples/tasks-light.png"
                        width={1280}
                        height={998}
                        alt="Playground"
                        className="block dark:hidden"
                    />
                    <Image
                        src="/examples/tasks-dark.png"
                        width={1280}
                        height={998}
                        alt="Playground"
                        className="hidden dark:block"
                    />
                </div> */}
                <PageContainer scrollable={true}>
                <div className="h-full lg:flex-1 lg:flex-col space-y-8 md:flex">
                    <div className="lg:flex lg:items-center lg:justify-between space-y-2">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Viewers</h2>
                            <p className="text-muted-foreground text-sm">
                                Manage All Viewers Here
                            </p>
                        </div>
                        <Button onClick={(e) => router.push('/viewers/create-new')}
                            variant="outline" size="sm"
                            className="lg:ml-auto flex h-9 lg:flex bg-primary text-card hover:bg-primary-foreground hover:shadow-xl hover:text-card w-[fit-content]"
                        >
                            Add Viewer
                        </Button>
                    </div>
                    <DataTable search={search} setSearch={setSearch} changeDate={handleChangeDate} totalCount={totalCount} getter={getData} date={date} clickable={true} data={data || []} columns={columns(setSortBy, setOrder, getData, date, pageSize)} changePageSize={setPageSize} />
                </div>
                {loading && (
                    <div className="absolute inset-0 bg-gray-500 bg-opacity-5 flex items-center justify-center z-50">
                        <div className="text-primary mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24">
                                <circle cx="12" cy="3" r="0" fill="currentColor">
                                    <animate id="svgSpinners6DotsScale0" fill="freeze" attributeName="r" begin="0;svgSpinners6DotsScale2.end-0.5s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" />
                                </circle>
                                <circle cx="16.5" cy="4.21" r="0" fill="currentColor">
                                    <animate id="svgSpinners6DotsScale1" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" />
                                </circle>
                                <circle cx="7.5" cy="4.21" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale2" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale4.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle>
                                <circle cx="19.79" cy="7.5" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale3" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale1.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle>
                                <circle cx="4.21" cy="7.5" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale4" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale6.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle>
                                <circle cx="21" cy="12" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale5" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale3.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle>
                                <circle cx="3" cy="12" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale6" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale8.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle>
                                <circle cx="19.79" cy="16.5" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale7" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale5.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle>
                                <circle cx="4.21" cy="16.5" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale8" fill="freeze" attributeName="r" begin="svgSpinners6DotsScalea.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle>
                                <circle cx="16.5" cy="19.79" r="0" fill="currentColor"><animate id="svgSpinners6DotsScale9" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale7.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" /></circle>
                                <circle cx="7.5" cy="19.79" r="0" fill="currentColor">
                                    <animate id="svgSpinners6DotsScalea" fill="freeze" attributeName="r" begin="svgSpinners6DotsScaleb.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" />
                                </circle><circle cx="12" cy="21" r="0" fill="currentColor">
                                    <animate id="svgSpinners6DotsScaleb" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale9.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0" />
                                </circle>
                            </svg>
                        </div>
                    </div>
                )}
                </PageContainer>
            </>
            {/* ) : (
            <div className="flex h-screen items-center justify-center">
              <div className="flex items-center justify-center h-screen">
                <div className="relative">
                  <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                  <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-primary animate-spin">
                  </div>
                </div>
              </div>
            </div>
          )
        } */}
        </>
    );
}