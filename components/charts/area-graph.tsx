'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import BarChart from './bar-chart';

const AreaGraph = ({ userData }: any) => {

  const barChartDataDailyTraffic = [
    {
      name: "Daily Traffic",
      data: [20, 30, 40, 20, 45, 50, 30]
    }
  ];

  const barChartOptionsDailyTraffic = {
    chart: {
      toolbar: {
        show: false
      }
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined
      },
      onDatasetHover: {
        style: {
          fontSize: "12px",
          fontFamily: undefined
        }
      },
      theme: "dark"
    },
    xaxis: {
      categories: userData?.growthData ? userData.growthData.map((userData: any) => userData?.period?.slice(0, 3)) : [],
      show: false,
      labels: {
        show: true,
        style: {
          colors: "#A3AED0",
          fontSize: "14px",
          fontWeight: "500"
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false,
      color: "black",
      labels: {
        show: true,
        style: {
          colors: "#CBD5E0",
          fontSize: "14px"
        }
      }
    },
    grid: {
      show: false,
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true
        }
      },
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "vertical",
        shadeIntensity: 0.5,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
        colorStops: barChartDataDailyTraffic[0].data.map((value) => {
          // Set gradient color for the highest value bar
          if (value !== 50) {
            return [
              {
                offset: 0,
                color: "#4318FF",
                opacity: 1
              },
              {
                offset: 100,
                color: "rgba(67, 24, 255, 1)",
                opacity: 0.28
              }
            ];
          }
          return [
            {
              offset: 0,
              color: "#cbd5e1", // Default gradient start color for other bars
              opacity: 0.5
            },
            {
              offset: 100,
              color: "#cbd5e1", // Default gradient end color for other bars
              opacity: 0.5
            }
          ];
        })
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "40px"
      }
    }
  };

  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle className="text-sm font-semibold flex items-center justify-between">
          <div className='flex items-center'>
            <div className='bg-background p-[0.3rem] rounded-lg mr-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
                <path fill="none" stroke="#6b7280" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.928 19.634h2.138a1.165 1.165 0 0 0 1.116-1.555a6.85 6.85 0 0 0-6.117-3.95m0-2.759a3.664 3.664 0 0 0 3.665-3.664a3.664 3.664 0 0 0-3.665-3.674m-1.04 16.795a1.908 1.908 0 0 0 1.537-3.035a8.03 8.03 0 0 0-6.222-3.196a8.03 8.03 0 0 0-6.222 3.197a1.909 1.909 0 0 0 1.536 3.034zM9.34 11.485a4.16 4.16 0 0 0 4.15-4.161a4.151 4.151 0 0 0-8.302 0a4.16 4.16 0 0 0 4.151 4.16" />
              </svg>
            </div>
            Total Users
          </div>
          <select id="countries" className="w-24 bg-card border border-gray-300 text-gray-600 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5">
            <option selected value='Weekly'>7 Months</option>
          </select>
        </CardTitle>
        <CardDescription>
          Track subscriber growth across the past 7 months
        </CardDescription>
        <div className='flex gap-x-2'>
          <div className='text-lg font-bold leading-none sm:text-2xl'>
            {userData?.totalUsersCount}
          </div>
          <div className='flex items-center text-slate-500 pt-2'>
            <p className="w-20 font-medium text-[0.8rem] px-1 text-success bg-successForeground border border-successForeground rounded-md flex items-center">
              +15.8%
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className='ml-1'>
                <path fill="#16c7c8" d="M21.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 6h-5a1 1 0 0 0 0 2h2.59L13 13.59l-3.29-3.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 12.41l3.29 3.3a1 1 0 0 0 1.42 0L20 9.41V12a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38" />
              </svg>
            </p>
            <span className='text-sm ml-2'>+749 increased</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[255px] m-auto">
          <BarChart
            chartData={
              [{
                name: 'Subscriber\'s Count',
                data: userData?.growthData ? userData.growthData.map((userData: any) => userData?.count) : []
              }]
            }
            chartOptions={barChartOptionsDailyTraffic}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default AreaGraph;