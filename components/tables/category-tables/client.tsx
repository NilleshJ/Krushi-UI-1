'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { User } from '@/constants/data';
import { columns } from './columns';
import { cn } from '@/lib/utils';

interface ProductsClientProps {
  loading: boolean;
  data: User[];
  nextRow: any;
  preRow: any;
  pageNumber: number;
  handleChangeDate: any;
  date: any;
}

export const UserClient: React.FC<ProductsClientProps> = ({ loading, data, nextRow, preRow, pageNumber, handleChangeDate, date }: any) => {
  const totalPages = Math.ceil(data?.totalCount / 10);
  const check = (data?.pageSize / (pageNumber * data?.pageSize)) < 1;
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Questions (${data?.questions.length || 0})`}
          description={`All Questions Related To ${data?.categoryName}`}
        />
      </div>
      <Separator />
      <div className='flex justify-end'>
        {/* <input
          type='text'
          className={cn(
            'flex h-9 w-full md:max-w-sm bg-card rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
          )}
          id='search' name='search'
          placeholder={`Search...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> */}
        <CalendarDateRangePicker date={date} setDate={handleChangeDate} className='bg-card' />
      </div>
      <DataTable clickable={false} searchKey="name" loading={loading} columns={columns} data={data?.questions || []} />
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {/* Total Pages: {data?.pageSize || 0} */}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => preRow()}
            disabled={(pageNumber === 1) ? true : false}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => nextRow()}
            disabled={data?.questions?.length < 10 ? true : false}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
