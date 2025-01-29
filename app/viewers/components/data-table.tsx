"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import Image from "next/image"
import { useRouter } from "next/navigation"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { DataTablePagination } from "./data-table-pagination"
import { DataTableToolbar } from "./data-table-toolbar"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[],
  clickable: boolean,
  getter: any,
  date: any
  totalCount: any,
  changeDate: any,
  setSearch: any,
  search: any,
  changePageSize: any
}

export function DataTable<TData, TValue>({
  columns,
  data,
  clickable,
  getter,
  date,
  totalCount,
  changeDate,
  setSearch,
  search,
  changePageSize
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [filtering, setFiltering] = React.useState("")
  const [pageNumber, setPageNumber] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      globalFilter: filtering
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onGlobalFilterChange: setFiltering,
    manualPagination: true, // Important for manual pagination logic
    pageCount: Math.ceil(totalCount / pageSize), 
  })

  return (
    <div className="space-y-4">
      <DataTableToolbar setPageNumber={setPageNumber} search={search} setSearch={setSearch} changeDate={changeDate} getter={getter} date={date} filtering={filtering} setFiltering={setFiltering} table={table} />
      <div className="rounded-md border h-[25.2rem] overflow-y-scroll">
        <Table className="bg-white rounded-md shadow-2xl">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="px-4" key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: any) => (

                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className='hover:bg-accent h-9'
                >
                  {row.getVisibleCells().map((cell: any, i: number) => {
                    const userId: any = row?.original?.id;
                    const subscriptionType = row?.original?.subscriptionType;
                    return (
                      <TableCell key={cell.id} className={`capitalize text-xs px-4`}>
                        {cell.column.id === "subscriptionType" ? (
                          <div className={`flex items-center ${subscriptionType === "free" ? 'text-[#00a5ff]' : 'text-[#32a300]'} capitalize`}>
                            {subscriptionType === "free" ?
                              <Image src="/free.png" alt="free" width={100} height={100} className="h-5 w-5 mr-2" /> :
                              <Image src="/paid.png" alt="paid" width={100} height={100} className="h-5 w-5 mr-2" />
                            }
                            {subscriptionType}
                          </div>
                        ) : (

                          flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          ))}
                      </TableCell>)
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-32 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalCount={totalCount} getter={getter} date={date} table={table} setPageSize={setPageSize} pageSize={pageSize} changePageSize={changePageSize} />
    </div>
  )
}