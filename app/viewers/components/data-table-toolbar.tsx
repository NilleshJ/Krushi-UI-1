"use client"

import { Table } from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./data-table-view-options"

import debounce from "lodash.debounce";

import React from "react"
import { CalendarDateRangePicker } from "@/components/date-range-picker"


interface DataTableToolbarProps<TData> {
  table: Table<TData>,
  filtering: any,
  setFiltering: any,
  getter: any,
  date: any,
  changeDate: any,
  setSearch: any,
  search: any,
  setPageNumber: any
}

export function DataTableToolbar<TData>({
  table,
  getter,
  date,
  changeDate,
  setSearch,
  search,
  setPageNumber

}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const [name, setName] = React.useState('');

  //   React.useEffect(() => {
  //     getter(1,name,date);
  //   },[name])

  const debouncedFetchData = React.useMemo(
    () => debounce((value: any) => {
      setSearch(value)
      setPageNumber(1);
      // getter(1,date)
    }, 300), // 300ms debounce
    []
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // setName(value);
    setName(value);
    debouncedFetchData(value); // Use the debounced function
  };

  React.useEffect(() => {
    return () => {
      debouncedFetchData.cancel();
    };
  }, [debouncedFetchData]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col lg:flex-row flex-1 justify-between items-center space-x-2 gap-2">
        <div className="flex w-full">
        <Input
          placeholder="Search"
          value={name}
          onChange={handleInputChange}
          className="flex h-9 w-[300px] lg:w-[250px] bg-white"
        />
      </div>
      <div className="flex lg:flex-row gap-2 items-center w-full lg:w-auto">
        <div >
            <CalendarDateRangePicker date={date} setDate={changeDate} className='bg-card' />
          </div>
          <DataTableViewOptions table={table} />
        </div>
      </div>
    </div>
  )
}