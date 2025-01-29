'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { getQuestionMetrics } from '@/app/api/dashboard';

export const description = 'An interactive bar chart';

const chartConfig = {
  views: {
    label: '# of Questions'
  },
  questions: {
    label: 'Questions',
    color: '#ff0000'
  },
  answers: {
    label: 'Answers',
    color: '#0c6600'
  },
  error: {
    label: 'Errors',
    color: 'hsl(var(--error))'
  }
} satisfies ChartConfig;

const BarGraph = ({ chartData, questionsData, total }: any) => {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>('questions');

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col gap-1 pl-6 py-5 sm:py-6">
          <CardTitle className="text-sm font-semibold items-center flex">
            <div className='bg-background p-[0.4rem] rounded-lg mr-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                <path fill="#6b7280" d="M3 20v-1h18v1zm1-2.77V12h2v5.23zm4.654 0V7h2v10.23zm4.673 0V10h2v7.23zm4.673 0V4h2v13.23z" />
              </svg>
            </div>
            Questions
          </CardTitle>
          <CardDescription>
            Track the total number of questions.
          </CardDescription>
        </div>
        <div className="flex">
          {['questions', 'answers', 'error'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className={`cursor-auto relative flex flex-1 min-w-28 flex-col justify-center gap-1 border-t px-2 py-4 text-left even:border-l ${chart === "questions" ? 'bg-[#fcfdff]' : chart === 'error' ? 'bg-[#fffdfb]' : 'bg-[#fcfffb]'} sm:border-l sm:border-t-0 sm:px-8 sm:py-6`}
              // onClick={() => setActiveChart(chart)}
              >
                <span className={`text-sm text-muted-foreground border-l-4 ${chart === "questions" ? 'border-[#4896fe]' : chart === 'error' ? 'border-red-600' : 'border-[#0c6600]'} pl-2 mb-1`}>
                  {chartConfig[chart]?.label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-2xl">
                  {total && total[key]}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={activeChart === "questions" ? `#4896fe` : '#4318FF'} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
export default BarGraph;