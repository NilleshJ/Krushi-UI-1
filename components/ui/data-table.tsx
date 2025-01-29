'use client';

import { useRouter } from 'next/navigation';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { ScrollArea, ScrollBar } from './scroll-area';

interface DataTableProps<TData, TValue> {
  loading: boolean;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey: string;
  clickable: boolean;
}

export function DataTable<TData, TValue>({
  loading,
  columns,
  data,
  searchKey,
  clickable
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });
  const router = useRouter();

  return (
    <>
      <ScrollArea className="h-[calc(85vh-220px)] bg-card rounded-md border md:h-[calc(85dvh-200px)]">
        <Table className="relative">
          <TableHeader className='bg-muted'>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className='text-xs'>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          {loading && <div className='flex justify-center sticky left-[40%] pt-10'>
            <div
              className="h-24 items-center text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
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
          </div>}
          <TableBody>
            {table.getRowModel().rows?.length ?
              table.getRowModel().rows.map((row: any) => (
                <TableRow className='hover:bg-accent'
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell: any) => {
                    // Assuming the row has a userId field
                    const userId = row?.original?.id;

                    return (
                      <TableCell className={`capitalize text-xs py-3 ${cell.id !== '0_actions' && `${clickable? 'cursor-pointer' : 'cursor-auto'}`}`}
                        key={cell.id}
                        onClick={() => { clickable ? (cell.id !== '0_actions' ? router.push(`/dashboard/users/${userId}`) : null) : null }} // Pass userId in the route
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    );
                  })}

                </TableRow>
              )) :
              (!loading && <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
              )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
}
