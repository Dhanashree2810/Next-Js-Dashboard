import React from 'react'
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
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function CustomersPage() {
  return (
    <div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-1 md:gap-8">
          <h1 className=' font-bold text-xl leading-3 underline'>Personal Info</h1>
          <h1 className=' font-bold text-lg'>About Me</h1>
          <Table className='w-full'>
            {/* <TableCaption className=' font-bold text-lg'></TableCaption> */}
            {/* <TableHeader>
            </TableHeader> */}

            <TableBody>
              <TableRow>
                <TableHead className="font-bold text-sm">Full Name</TableHead>
                <TableCell className=' font-bold text-sm'>Josephine Villa</TableCell>
                <TableHead className=' font-bold text-sm'>Email</TableHead>
                <TableCell className=' font-bold text-sm'>	Demo@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="font-bold text-sm">Gender</TableHead>
                <TableCell className=' font-bold text-sm'>Female</TableCell>
                <TableHead className=' font-bold text-sm'>Mobile Number</TableHead>
                <TableCell className=' font-bold text-sm'>(0123) - 4567891</TableCell>
              </TableRow>

              <TableRow>
                <TableHead className="font-bold text-sm">Birth Date</TableHead>
                <TableCell className=' font-bold text-sm'>October 25th, 1990</TableCell>
                <TableHead className=' font-bold text-sm'>Twitter</TableHead>
                <TableCell className=' font-bold text-sm'>@xyz</TableCell>
              </TableRow>

              <TableRow>
                <TableHead className="font-bold text-sm">Marital Status</TableHead>
                <TableCell className=' font-bold text-sm'>Single</TableCell>
                <TableHead className=' font-bold text-sm'>Skype</TableHead>
                <TableCell className=' font-bold text-sm'>demo.skype</TableCell>
              </TableRow>

              <TableRow>
                <TableHead className="font-bold text-sm">Location</TableHead>
                <TableCell className=' font-bold text-sm'>New York, USA</TableCell>
                <TableHead className=' font-bold text-sm'>Website</TableHead>
                <TableCell className=' font-bold text-sm'>www.demo.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Label htmlFor="terms" className='font-bold'>Description About Me</Label>          
          <Textarea  rows={15} placeholder="" value='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able To Do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pain.'/>

        </div>
      </main>
    </div>
  )
}
