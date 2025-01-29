'use client';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<any>[] = [
  {
    id: 'select',
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'fullName',
    header: 'NAME'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'mobile',
    header: 'Mobile'
  },
  {
    accessorKey: 'qaCount',
    header: 'Question Count'
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
