"use client"

import { ColumnDef } from "@tanstack/react-table"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import type { Payment } from "@/data/payments.data"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { toast } from "sonner"

type badgeVariant = {
		variant:"secondary" | "default" | "success" | "destructive" 
		| "outline" | "info" | null | undefined
	} 
	

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "clientName",
    header: "Client Name",
  },
  {
    accessorKey: "status",
    header: "Status",
		cell: ({row})=>{
			const status = String(row.getValue("status"))
			const variant = {
				pending: "secondary",
				processing: "info",
				success: "success",
				failed: "destructive"
			}[status] ?? "secondary"  as any

			return (
				<Badge variant={variant} capitalize>{status}</Badge>
			)
		}
  },
	{
		accessorKey: "amount",
		header: () => <div className="text-right">Amount</div>,
		cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

			return <div className="text-right font-medium">{formatted}</div>

 
    },
	},
  {
    accessorKey: "email",
    header: "Email",
  },
	{
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
								navigator.clipboard.writeText(payment.id)
								toast.success("Copy",{
									position:"top-right"
								})
							}}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
