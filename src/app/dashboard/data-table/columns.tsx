"use client"

import { ColumnDef } from "@tanstack/react-table"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import type { Payment } from "@/data/payments.data"


export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "clientName",
    header: "Client Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]
