"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "./data-table-column-header"

import { CellAction } from "./cell-actions"

export const columns = (setSortBy: any, setOrder: any,  getData: any, date: any, pageSize: any): ColumnDef<any>[] => [
  {
    accessorKey: "fullName",
    header: ({ column }) => (
      <DataTableColumnHeader setSortBy={setSortBy} setOrder={setOrder} param={'name'} column={column} title="NAME" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader setSortBy={setSortBy} setOrder={setOrder} param={'email'} column={column} title="EMAIL" />
    ),
  },
  {
    accessorKey: "mobile",
    header: ({ column }) => (
      <DataTableColumnHeader setSortBy={setSortBy} setOrder={setOrder} param={'mobile'} column={column} title="MOBILE" />
    ),
  },
  {
    accessorKey: "password",
    header: ({ column }) => (
      <DataTableColumnHeader setSortBy={setSortBy} setOrder={setOrder} param={'password'} column={column} title="PASSWORD" />
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <div className="text-center">
        <CellAction data={row.original} refetchData={getData} date={date} pageSize={pageSize} />
      </div>
    ),
    header: 'ACTIONS',
  }
]