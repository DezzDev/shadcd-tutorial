"use client"

import { ColumnDef, SortDirection } from "@tanstack/react-table"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import type { Payment } from "@/data/payments.data"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, ArrowUp, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
	variant: "secondary" | "default" | "success" | "destructive"
	| "outline" | "info" | null | undefined
}

const SortedIcon = ({ isSorted }: { isSorted: SortDirection | boolean }) => {
	if (isSorted === "asc") {
		return <ArrowDown className="h-4 w-4" />
	} else if (isSorted === "desc") {
		return <ArrowUp className="h-4 w-4" />
	} else {
		return null
	}
}


export const columns: ColumnDef<Payment>[] = [

	{
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

	{
		accessorKey: "clientName",
		header: ({ column }) => {
			return (
				
					<Button
						variant="ghost"
						onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					>
						Client Name
						<SortedIcon isSorted={column.getIsSorted()} />
						{/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
					</Button>
				
			)
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Status
					<SortedIcon isSorted={column.getIsSorted()} />
					{/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
				</Button>
			)
		},
		cell: ({ row }) => {
			const status = String(row.getValue("status"))
			const variant = {
				pending: "secondary",
				processing: "info",
				success: "success",
				failed: "destructive"
			}[status] ?? "secondary" as any

			return (
				<Badge variant={variant} capitalize>{status}</Badge>
			)
		}
	},
	{
		accessorKey: "amount",
		header: ({ column }) => {
			return (
				<div className="text-right">
					<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					className="text-right"
				>
					Amount
					<SortedIcon isSorted={column.getIsSorted()} />
					{/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
				</Button>
				</div>
			)
		},
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
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Email
					<SortedIcon isSorted={column.getIsSorted()} />
					{/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
				</Button>
			)
		},
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
								toast.success("Copy", {
									position: "top-right"
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
