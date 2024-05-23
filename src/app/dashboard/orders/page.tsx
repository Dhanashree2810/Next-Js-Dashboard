import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableCaption,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const orderList = [
  {
    id: "#1019",
    date: "May 19 , 12:38pm",
    customer: "Liam Johnson",
    payment: "Unpaid",
    status: "New order",
    total: '₹60.00'
  },
  {
    id: "#1020",
    date: "May 20 , 1:25pm",
    customer: "Noah Williams",
    payment: "Unpaid",
    status: "New order",
    total: '₹499.00'
  },
  {
    id: "#1021",
    date: "May 21 , 6:14pm",
    customer: "Olivia Smith",
    payment: "Paid",
    status: "Marked as Paid",
    total: '₹569.00'
  },
  {
    id: "#1022",
    date: "May 22 , 8:25pm",
    customer: "Emma Brown",
    payment: "Paid",
    status: "Marked as Paid",
    total: '₹259.00'
  },
  {
    id: "#1023",
    date: "May 23 , 11:30pm",
    customer: "Olivia Smith",
    payment: "COD",
    status: "New order",
    total: '₹1299.00'
  }
]

export default function OrdersPage() {
  return (
    <div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-4 md:gap-8">
          {/* card 1 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-normal">
                Today
              </CardTitle>
              <span className=' font-bold text-xl px-3'>60</span>
            </CardHeader>
            <CardContent className=' '>
              <div className="font-bold text-3xl">10</div>
              <p className="text-sm leading-6">
                Orders
              </p>
            </CardContent>
          </Card>

          {/* card 2 */}
          <Card >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-normal">
                Last 7 Days
              </CardTitle>
              <span className=' font-bold text-xl  px-3'>60</span>
            </CardHeader>
            <CardContent className=' '>
              <div className="font-bold text-3xl">35</div>
              <p className="text-sm leading-6">
                Orders
              </p>
            </CardContent>
          </Card>

          {/* card 3 */}

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-normal">
                Last 30 Days
              </CardTitle>
              <span className=' font-bold text-xl  px-3'>94</span>
            </CardHeader>
            <CardContent className=' '>
              <div className="font-bold text-3xl">50</div>
              <p className="text-sm leading-6">
                Orders
              </p>
            </CardContent>
          </Card>

          {/* card 4 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-normal">
                All Time
              </CardTitle>
              <span className=' font-bold text-xl  px-3'>1482</span>
            </CardHeader>
            <CardContent className=' '>
              <div className="font-bold text-3xl">18</div>
              <p className="text-sm leading-6">
                Orders
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='grid gap-4'>
          <Tabs defaultValue="week">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
            </div>


            <TabsContent value="week">
              <Table className='w-full border box-border'>
                <TableCaption>Manage and fulfill orders received from your store</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Order id</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orderList.map((follow) => (
                    <TableRow key={follow.id}>
                      <TableCell className="font-medium">{follow.id}</TableCell>
                      <TableCell>{follow.date}</TableCell>
                      <TableCell>{follow.customer}</TableCell>
                      <TableCell>{follow.payment}</TableCell>
                      <TableCell>{follow.status}</TableCell>
                      <TableCell className="text-right font-semibold">{follow.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div >

  )
}
