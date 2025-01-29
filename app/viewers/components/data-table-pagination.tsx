"use client"

import { Table } from "@tanstack/react-table"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useState } from "react"

interface DataTablePaginationProps<TData> {
  table: Table<TData>,
  getter: any,
  date: any,
  totalCount: any,
  pageNumber: any,
  setPageNumber: any,
  setPageSize: any,
  pageSize: any,
  changePageSize: any
}

export function DataTablePagination<TData>({
  table,
  getter,
  date,
  totalCount,
  pageNumber,
  setPageNumber,
  setPageSize,
  pageSize,
  changePageSize

}: DataTablePaginationProps<TData>) {

    const [isUpdate, setUpdate] = useState(false);
    // const [pageNumber, setPageNumber] = useState(1);
    //const [pageSize, setPageSize] = useState(10);
    
    const handlePageSize = async (value: any) => {
      await setPageSize(value);
      changePageSize(value);
      setUpdate(!isUpdate);
      getter(pageNumber, date, value);
    }

    const handleNextPage = async () => {
        await setPageNumber(pageNumber + 1);
        setUpdate(!isUpdate);
        getter(pageNumber + 1, date, pageSize);
      }

    const handleFirstPage = async() => {
        await setPageNumber(1);
        setUpdate(!isUpdate);
        getter(1,date, pageSize);
    }

    const handleLastPage = async() => {
        await setPageNumber(Math.ceil(totalCount/pageSize));
        setUpdate(!isUpdate);
        getter(Math.ceil(totalCount/pageSize),date, pageSize);
    }

      const handlePreviousPage = async () => {
        await setPageNumber(pageNumber - 1);
        setUpdate(!isUpdate);
        getter(pageNumber - 1,date, pageSize);
      }
  return (
    <div className="flex items-center gap-2 lg:justify-end lg:px-2">
      <div className="lg:flex-1 text-xs text-muted-foreground">
      {`Total Users ${totalCount !== undefined && totalCount !== null ? totalCount : 0}`}
      </div>
      
      <div className="flex items-center lg:space-x-6 gap-2 lg:space-x-8">
         <div className="flex items-center space-x-2">
          <p className="text-xs font-medium">Rows per page</p>
          <Select
            value={pageSize}
            onValueChange={(value) => {
              handlePageSize(Number(value))
            }}
          >
            <SelectTrigger className="lg:h-8 h-[6] w-[30px] lg:w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 25, 50, 100].map((pageSize: any) => (
                <SelectItem key={pageSize} value={pageSize}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div> 
        <div className="flex lg:w-[100px] w-[80px] items-center justify-center text-xs font-medium">
          <div>
            Page {pageNumber} of{" "}
            {Math.ceil(totalCount/pageSize) || 1}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-6  w-6 font-extralight text-xs p-0 lg:flex"
            onClick={() => handleFirstPage()}
            // disabled={pageNumber == 1}
            disabled={pageNumber === 1 || totalCount === 0}
          >
            <span className="sr-only ">Go to first page</span>
            <ChevronsLeft className="h-5" />
          </Button>
          <Button
            variant="outline"
            className="h-6 w-6 p-0 text-xs"
            onClick={() => handlePreviousPage()}
            //disabled={pageNumber == 1}
            disabled={pageNumber === 1 || totalCount === 0}
          >
            <span className="sr-only ">Go to previous page</span>
            <ChevronLeft className="h-5" />
          </Button>
          <Button
            variant="outline"
            className="h-6 w-6 p-0 text-xs"
            onClick={() => handleNextPage()}
            disabled={!totalCount || pageNumber === Math.ceil(totalCount / pageSize)}
            //disabled={pageNumber == Math.ceil(totalCount/pageSize)}
          >
            <span className="sr-only text-xs">Go to next page</span>
            <ChevronRight className="h-5" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-6 w-6 p-0 lg:flex"
            onClick={() => handleLastPage()}
            //disabled={pageNumber == Math.ceil(totalCount/pageSize)}
            disabled={!totalCount || pageNumber === Math.ceil(totalCount / pageSize)}
            >
            <span className="sr-only text-xs">Go to last page</span>
            <ChevronsRight className="h-5" />
          </Button>
        </div>
      </div>
    </div>
    )
}