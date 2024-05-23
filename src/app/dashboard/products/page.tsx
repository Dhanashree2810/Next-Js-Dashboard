import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
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
import Image from 'next/image'
import watch1 from '@/app/watch1.png'
import watch2 from '@/app/watch2.png'
import watch3 from '@/app/watch3.png'
import watch4 from '@/app/watch4.png'

export default function ProductsPage() {
  const productlist = [
    {
      id: 1,
      img: watch1,
      desc: 'Mast & Harbour Unisex Black Chronograph Watch MFB-PN-WTH-6288G (Onesize) by Myntra',
      price: '₹1,049.00',

    },
    {
      id: 2,
      img: watch2,
      desc: 'Daniel Klein DK11599-4 Analog Watch for Men',
      price: '₹1,210.00',
    },
    {
      id: 3,
      img: watch3,
      desc: 'Fire-Boltt Hurricane Smartwatch ( Silver Grey )',
      price: '₹1,099.00',
    },
    {
      id: 4,
      img: watch4,
      desc: 'beatXP Marv Neo 1.85 Inch HD Display Rose Gold Smart Watch',
      price: '₹999.00',
    },
  ]

  return (
    <div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-normal">
                Products
              </CardTitle>
              {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="productname">Product Name</Label>
                    <Input id="productname" placeholder="Enter Name of Product" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="category">Product Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="subcategory">
                      Subcategory (optional)
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="subcategory"
                        aria-label="Select subcategory">
                        <SelectValue placeholder="Select subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="t-shirts">T-Shirts</SelectItem>
                        <SelectItem value="hoodies">Hoodies</SelectItem>
                        <SelectItem value="sweatshirts">
                          Sweatshirts
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="gender">
                      Gender
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="gender"
                        aria-label="Select Gender">
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Textarea placeholder="Type your message here." />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Add</Button>
            </CardFooter>
          </Card>

          <Card x-chunk="dashboard-07-chunk-1">
            <CardHeader>
              <CardTitle>Stock</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">SKU</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="w-[100px]">Size</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">
                      GGPC-001
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="stock-1" className="sr-only">
                        Stock
                      </Label>
                      <Input
                        id="stock-1"
                        type="number"
                        defaultValue="100"
                      />
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="price-1" className="sr-only">
                        Price
                      </Label>
                      <Input
                        id="price-1"
                        type="number"
                        defaultValue="99.99"
                      />
                    </TableCell>
                    <TableCell>
                      <ToggleGroup
                        type="single"
                        defaultValue="s"
                        variant="outline"
                      >
                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">
                      GGPC-002
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="stock-2" className="sr-only">
                        Stock
                      </Label>
                      <Input
                        id="stock-2"
                        type="number"
                        defaultValue="143"
                      />
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="price-2" className="sr-only">
                        Price
                      </Label>
                      <Input
                        id="price-2"
                        type="number"
                        defaultValue="99.99"
                      />
                    </TableCell>
                    <TableCell>
                      <ToggleGroup
                        type="single"
                        defaultValue="m"
                        variant="outline"
                      >
                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">
                      GGPC-003
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="stock-3" className="sr-only">
                        Stock
                      </Label>
                      <Input
                        id="stock-3"
                        type="number"
                        defaultValue="32"
                      />
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="price-3" className="sr-only">
                        Stock
                      </Label>
                      <Input
                        id="price-3"
                        type="number"
                        defaultValue="99.99"
                      />
                    </TableCell>
                    <TableCell>
                      <ToggleGroup
                        type="single"
                        defaultValue="s"
                        variant="outline"
                      >
                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="justify-center border-t p-4">
              <Button size="sm" variant="ghost" className="gap-1">
                {/* <PlusCircle className="h-3.5 w-3.5" /> */}
                Add Variant
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-4 md:gap-8">
          {productlist.map((a) => (
            <Card className=" border-muted services-single" key={a.id}>
              <CardContent >
                <div className=''>
                  <Image
                    src={a.img}
                    width={453}
                    height={453}
                    className=" h-auto"
                    alt="Image not found"
                  />
                </div>
                <hr className='  text-gray-700 h-5' />
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-left mx-2">
                  <h1 className=' font-bold text-sm text-black py-2 hover:text-green-400 hover:cursor-pointer'>{a.desc}</h1>
                  <p className=' text-sm text-gray-500 font-bold leading-7'>{a.price}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
