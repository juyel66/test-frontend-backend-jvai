import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "AUTHOR",
    header: "AUTHOR",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        {/* Author image */}
        <img
          src={
            row.original.avatar ||
            "https://i.ibb.co.com/0p9gCdVQ/155250069.jpg"
          }
          alt={row.original.AUTHOR}
          className="w-10 h-10 rounded-full object-cover"
        />
        {/* Name & email */}
        <div className="flex flex-col">
          <span className="font-medium">{row.original.AUTHOR}</span>
          <span className="text-sm text-gray-500">{row.original.email}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "FUNCTION",
    header: "FUNCTION",
  },
  {
    accessorKey: "STATUS",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.original.STATUS;
      const isOnline = status?.toLowerCase() === "online";

      return (
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            isOnline
              ? "bg-green-500 text-white"
              : "border border-gray-400 text-gray-500"
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "EMPLOYED",
    header: "EMPLOYED",
  },
  {
    accessorKey: "ACTION",
    header: "ACTION",
  },
];
