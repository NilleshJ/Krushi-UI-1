import { Column } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column?: Column<TData, TValue>
  title: string,
  param: any,
  setSortBy: any,
  setOrder: any
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
  param,
  setSortBy,
  setOrder
}: DataTableColumnHeaderProps<TData, TValue>) {

  const baseStyles = "flex items-center space-x-2 text-xs font-medium text-gray-700";
  if (!column?.getCanSort()) {
    return <div className={cn(baseStyles, className)}>{title}</div>
  }
   if (!column) {
     return <div className={cn(baseStyles, className)}>{title}</div>;
   }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-9 data-[state=open]:bg-accent "
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDown className="h-3" />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUp className="h-3" />
            ) : (
              <ChevronsUpDown className="h-3" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={(e) => {
            setSortBy(param);
            setOrder('asc');
            // column.toggleSorting(false)
            }}>
            <ArrowUp className="h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={(e) => {
            setSortBy(param);
            setOrder('desc');
            // column.toggleSorting(false)
            }}>
            <ArrowDown className="h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeOff className="h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}