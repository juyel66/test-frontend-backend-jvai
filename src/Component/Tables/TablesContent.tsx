import React from "react";

import { DataTable } from "./data-table";
import { columns } from "./columns";

// Payment type ঠিক করে দেওয়া হলো
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

// getData() function এ সব field দেওয়া হলো
async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      name: "John Doe",
      amount: 1200,
      date: "2023-03-13",
      avatar: "/avatars/john.png",
      AUTHOR: "John Doe",
      email: "m@example.com",
      FUNCTION: "Manager",
      STATUS: "ONLINE",
      EMPLOYED: "13/03/2023",
      ACTION: "DELETE",
    },
    {
      id: "12a34bc",
      name: "Alice Smith",
      amount: 850,
      date: "2024-03-13",
      avatar: "/avatars/alice.png",
      AUTHOR: "Alice Smith",
      email: "a@example.com",
      FUNCTION: "Programmer",
      STATUS: "OFFLINE",
      EMPLOYED: "13/03/2024",
      ACTION: "DELETE",
    },
  ];
}

const DemoPage: React.FC = () => {
  const [data, setData] = React.useState<Payment[]>([]);

  React.useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-xl font-bold mb-5">Payments Table</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default DemoPage;
