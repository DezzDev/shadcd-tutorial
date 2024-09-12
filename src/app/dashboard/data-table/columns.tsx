"use client"

import { ColumnDef } from "@tanstack/react-table"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import type { Payment } from "@/data/payments.data"
import { Badge } from "@/components/ui/badge"

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
]
