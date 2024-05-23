import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaFileAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const followersList = [
  {
    id: "1",
    project: "Facebook",
    manager : "Malorum",
    status : "In Progress",
    progress :"50%",
  },
  {
    id: "2",
    project: "Twitter",
    manager : "Evan",
    status : "completed",
    progress :"100%",
  },
  {
    id: "3",
    project: "Google",
    manager : "John",
    status : "In Progress",
    progress :"75%",
  },
  {
    id: "4",
    project: "LinkedIn",
    manager : "Danial",
    status : "In Progress",
    progress :"65%",
  },
  {
    id: "5",
    project: "Tumblr",
    manager : "David",
    status : "In Progress",
    progress :"95%",
  },
  {
    invoice: "6",
    project: "Tesla",
    manager : "Mickey",
    status : "In Progress",
    progress :"95%",
  },
]

export default function dashboard() {
  return (
    <div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">        
        <div className="grid gap-4 md:grid-cols-4 md:gap-8">
          <Card className='bg-green-400  text-white'>
            {/* card 1 */}
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-3xl font-bold">
                83
              </CardTitle>
              <FaFileAlt className=" text-muted-foreground p-3 w-16 h-16 bg-green-400 text-white" />
            </CardHeader>
            <CardContent className=' '>
              <div className="text-lg font-bold">Registered User</div>
              <p className="text-xs leading-6">
                Other hand, we denounce
              </p>
            </CardContent>
          </Card>

          {/* card 2 */}
          <Card className='bg-orange-400  text-white'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-3xl font-bold">
                135
              </CardTitle>
              <FaEye className=" text-muted-foreground p-3 w-16 h-16 bg-orange-400 text-white" />
            </CardHeader>
            <CardContent className=' '>
              <div className="text-lg font-bold">Daily Visitors</div>
              <p className="text-xs leading-6">
                Other hand, we denounce
              </p>
            </CardContent>
          </Card>

          {/* card 3 */}
          <Card className='bg-blue-400  text-white'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-3xl font-bold">
                23
              </CardTitle>
              <IoIosMail className=" text-muted-foreground p-3 w-16 h-16 bg-blue-400 text-white" />
            </CardHeader>
            <CardContent className=' '>
              <div className="text-lg font-bold">New Messages</div>
              <p className="text-xs leading-6">
                Other hand, we denounce
              </p>
            </CardContent>
          </Card>

          {/* card 4 */}
          <Card  className='bg-emerald-400  text-white'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-3xl font-bold">
                1000
              </CardTitle>
              <AiFillProduct className=" text-muted-foreground p-3 w-16 h-16 bg-emerald-400 text-white" />
            </CardHeader>
            <CardContent className=' '>
              <div className="text-lg font-bold">Products Available</div>
              <p className="text-xs leading-6">
                Other hand, we denounce
              </p>
            </CardContent>
          </Card>
        </div>

        {/* md:grid-cols-2 xl:grid-cols-2 md:gap-8 */}
        <div className='grid gap-4'>
          <Table className='w-full border box-border'>
            <TableCaption className=' font-bold text-xl'>Recent Followers</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-lg">#</TableHead>
                <TableHead className=' font-bold text-lg'>Project</TableHead>
                <TableHead className=' font-bold text-lg'>Manager</TableHead>
                <TableHead className=' font-bold text-lg'>Status</TableHead>
                <TableHead className="text-right font-bold text-lg">Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {followersList.map((follow) => (
                <TableRow key={follow.id}>
                  <TableCell className="font-medium">{follow.id}</TableCell>
                  <TableCell>{follow.project}</TableCell>
                  <TableCell>{follow.manager}</TableCell>
                  <TableCell>{follow.status}</TableCell>
                  <TableCell className="text-right">{follow.progress}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}
``
