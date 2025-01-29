'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))'
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))'
  },
  label: {
    color: 'hsl(var(--background))'
  }
} satisfies ChartConfig;

interface ChartData {
  id: string;
  name: string;
  questionCount: number;
}

interface CardChartProps {
  data: ChartData[]; // Dynamically passed data array
}

const UserCardChart = ({ data }: CardChartProps) => {

  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-sm font-semibold">
          <div className="flex items-center">
            <div className="mr-2 rounded-lg bg-background p-[0.3rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#6b7280"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.928 19.634h2.138a1.165 1.165 0 0 0 1.116-1.555a6.85 6.85 0 0 0-6.117-3.95m0-2.759a3.664 3.664 0 0 0 3.665-3.664a3.664 3.664 0 0 0-3.665-3.674m-1.04 16.795a1.908 1.908 0 0 0 1.537-3.035a8.03 8.03 0 0 0-6.222-3.196a8.03 8.03 0 0 0-6.222 3.197a1.909 1.909 0 0 0 1.536 3.034zM9.34 11.485a4.16 4.16 0 0 0 4.15-4.161a4.151 4.151 0 0 0-8.302 0a4.16 4.16 0 0 0 4.151 4.16"
                />
              </svg>
            </div>
            Top Users
          </div>
          <select
            id="countries"
            value={'Semiannual'}
            className="block w-28 rounded-lg border border-gray-300 bg-card p-1.5 text-xs text-gray-600 focus:border-blue-500 focus:ring-blue-500"
          >
            {/* <option value="Monthly">Monthly</option> */}
            <option value="Semiannual">7 Months</option>
            {/* <option value="Yearly">Yearly</option> */}
          </select>
        </CardTitle>
        <CardDescription>
          Top users and the number of questions they've asked over the last 7
          months.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              right: 50
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
              hide={true}
              height={10}
            />
            <XAxis dataKey="questionCount" type="number" hide={true} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="questionCount"
              layout="vertical"
              fill="rgb(59 130 246 / 0.5)"
              radius={4}
            //width={20}
            >
              <LabelList
                dataKey="name"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label] capitalize"
                fontSize={12}
              />
              <LabelList
                dataKey="questionCount"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default UserCardChart;
