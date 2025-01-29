'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format, isAfter } from 'date-fns';
import * as React from 'react';

export function CalendarDateRangePicker({ date, setDate, className }: any) {
  const today = new Date(); // Current date without time part
  today.setHours(0, 0, 0, 0);
  const [defaultMonth, setDefaultMonth] = React.useState(today);

  const handleClear = () => {
    setDate(undefined); // Clear the selected date
    setDefaultMonth(today); // Reset to the current month
  };

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-[260px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={defaultMonth}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            disabled={(day) => isAfter(day, today)}
          />
          <div className="flex justify-end">
            <Button
              variant="secondary" className='hover:text-black'
              onClick={() => setDate(undefined)}
            >
              Clear Date
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
