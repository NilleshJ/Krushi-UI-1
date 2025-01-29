'use client';
import { ColumnDef } from '@tanstack/react-table';
// import { CellAction } from './cell-action';

export const columns: ColumnDef<any>[] = [
  {
    id: 'select',
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'questionText',
    header: 'Question'
  },
  {
    accessorKey: 'appearanceCount',
    header: 'Appearance Count'
  }

];
