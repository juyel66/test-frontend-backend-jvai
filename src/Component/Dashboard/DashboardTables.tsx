import React from "react"
import { DataTable } from "../Tables/data-table"
import { columns } from "../Tables/columns"



async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      AUTHOR: "John Doe",
      FUNCTION: "Manager",
      STATUS: "ONLINE",
      EMPLOYED: "13/23/2023",
      ACTION: "DELETE",
      email: "m@example.com",
    },
    {
      id: "12a34bc",
      AUTHOR: "Alice Smith",
      FUNCTION: "Programmer",
      STATUS: "OFFLINE",
      EMPLOYED: "13/23/2024",
      ACTION: "DELETE",
      email: "a@example.com",
    },
    {
      id: "12a34bc",
      AUTHOR: "Alice Smith",
      FUNCTION: "Programmer",
      STATUS: "ONLINE",
      EMPLOYED: "13/23/2024",
      ACTION: "DELETE",
      email: "a@example.com",
    },
    {
      id: "12a34bc",
      AUTHOR: "Alice Smith",
      FUNCTION: "Programmer",
      STATUS: "OFFLINE",
      EMPLOYED: "13/23/2024",
      ACTION: "DELETE",
      email: "a@example.com",
    },
    {
      id: "12a34bc",
      AUTHOR: "Alice Smith",
      FUNCTION: "Programmer",
      STATUS: "OFFLINE",
      EMPLOYED: "13/23/2024",
      ACTION: "DELETE",
      email: "a@example.com",
    },
    {
      id: "12a34bc",
      AUTHOR: "Alice Smith",
      FUNCTION: "Programmer",
      STATUS: "OFFLINE",
      EMPLOYED: "13/23/2024",
      ACTION: "DELETE",
      email: "a@example.com",
    },
  ]
}


const DashboardTables: React.FC = () => {
  const [data, setData] = React.useState<Payment[]>([])

  React.useEffect(() => {
    getData().then(setData)
  }, [])

  return (
    <div className="container mx-auto h-screen py-10 ">
      <h1 className="text-xl  font-bold mb-5">Payments Table</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default DashboardTables
