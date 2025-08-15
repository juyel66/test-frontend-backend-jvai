"use client"

import React from "react"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A simple area chart"

const chartData = [
  { month: "January", desktop: 16 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 115 },
  { month: "August", desktop: 145 },
  { month: "September", desktop: 200 },
  { month: "October", desktop: 140 },
  { month: "November", desktop: 170 },
  { month: "December", desktop: 150 },
]

const Charts: React.FC = () => {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--chart-1)",
    },
  }

  return (
    <Card
    style={{ backgroundImage: "url(/images/bgImage.png)" }}
     className=" bg-no-repeat bg-cover mt-5 bg-transparent shadow-none border-none">
      <CardHeader>
        <CardTitle>Area Chart</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>

      <CardContent className="">
        <ChartContainer config={chartConfig}>
          <AreaChart className=""
            width={500} // adjust as needed or use ResponsiveContainer
            height={250}
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid className="" vertical={false} strokeDasharray="3 3" />
            <XAxis className=""
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip 
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area className=""
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Charts
