import type { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  name: string;
  amount: number;
  date: string;
  STATUS: "ONLINE" | "OFFLINE";
  avatar: string;
  AUTHOR: string;
  email: string;
  FUNCTION: string;
  EMPLOYED: string;
  ACTION: string;
};

export const AuthorColumns: ColumnDef<Payment>[] = [
  {
  accessorKey: "COMPANIES",
  header: "COMPANIES",
  cell: ({ row }) => (
    <div className="flex items-center gap-3">
      <img
        src={row.original.avatar || "https://i.ibb.co/0p9gCdVQ/155250069.jpg"}
        alt={row.original.COMPANIES}
        className="w-10 h-10 rounded-full object-cover"
      />
      <span>{row.original.COMPANIES}</span>
    </div>
  ),
},
  {
    accessorKey: "BUDGET",
    header: "BUDGET",
  },
  {
    accessorKey: "STATUS",
    header: "STATUS"
  },
  {
    accessorKey: "COMPLETION",
    header: "COMPLETION",
  },
  
];
