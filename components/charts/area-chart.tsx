"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
    free: {
        label: "Free Users",
        color: "#4896fe",
    },
    paid: {
        label: "Paid Users",
        color: "#4318FF",
    },
} satisfies ChartConfig

const Component = ({ data }: any) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-sm font-semibold items-center flex">
                    <div className='bg-background p-[0.4rem] rounded-lg mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                            <path fill="#6b7280" d="M3 20v-1h18v1zm1-2.77V12h2v5.23zm4.654 0V7h2v10.23zm4.673 0V10h2v7.23zm4.673 0V4h2v13.23z" />
                        </svg>
                    </div>
                    Free & Paid User Chart
                </CardTitle>
                <CardDescription>
                    Showing total free and paid subscription for the last 6 months.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={data}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="#4318FF"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#4318FF"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="#4896fe"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#4896fe"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="paid"
                            type="natural"
                            fill="url(#fillMobile)"
                            fillOpacity={0.4}
                            stroke="#4896fe"
                            stackId="a"
                        />
                        <Area
                            dataKey="free"
                            type="natural"
                            fill="url(#fillDesktop)"
                            fillOpacity={0.4}
                            stroke="#4318FF"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
export default Component;