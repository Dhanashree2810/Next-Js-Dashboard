'use client'
import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { LuPackage } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { RiLineChartFill } from "react-icons/ri";
import {
    Bell,
    Home,
    LineChart,
    Package,
    Package2,
    ShoppingCart,
    Users,
    Menu,
    Search,
    CircleUser
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function NavbarPage() {
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            {/* for toggle navbar */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>

                <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        <Link href="/" className="flex items-center gap-2">
                            <span className=" font-bold text-lg">shadcn/ui</span>
                        </Link>
                        <Link
                            href="/dashboard"
                            className="mx-[-0.65rem] flex items-center gap-3 rounded-lg px-3 py-2  hover:font-bold"
                        >
                            <FaHome className="h-5 w-5" />
                            Dashboard
                        </Link>
                        <Link
                            href="/dashboard/orders"
                            className="mx-[-0.65rem]  flex items-center gap-3 rounded-lg px-3 py-2  hover:font-bold"
                        >
                            <FaCartShopping className="h-5 w-5" />
                            Orders
                        </Link>
                        <Link
                            href="/dashboard/products"
                            className="mx-[-0.65rem] flex items-center gap-3 rounded-lg px-3 py-2  hover:font-bold"
                        >
                            <LuPackage className="h-5 w-5" />
                            Products
                        </Link>
                        <Link
                            href="/dashboard/customers"
                            className="mx-[-0.65rem] flex items-center gap-3 rounded-lg px-3 py-2  hover:font-bold"
                        >
                            <FiUsers className="h-5 w-5" />
                            Customers
                        </Link>
                        <Link
                            href="/dashboard/analytics"
                            className="mx-[-0.65rem] flex items-center gap-3 rounded-lg px-3 py-2  hover:font-bold"
                        >
                            <RiLineChartFill className="h-5 w-5" />
                            Analytics
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>

            <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/dashboard/">Dashboard</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/dashboard/orders">Orders</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="relative ml-auto flex-row-reverse md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                />
            </div>

            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
            </Button>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}