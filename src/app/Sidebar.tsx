'use client'
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { LuPackage } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { RiLineChartFill } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";


export function SidebarPage() {
  const router = useRouter(); // Initialize the router

  const handleLogout = async () => {  
    try {
      alert('Logout successfully');
      router.push('/'); // Navigate to '/dashboard'
    } catch (error:any) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className=" font-bold text-lg">shadcn/ui</span>
          </Link>
        </div>

        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:font-bold"
            >
              <FaHome className="h-6 w-6" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/orders"
              className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:font-bold"
            >
              <FaCartShopping className="h-6 w-6" />
              Orders
            </Link>
            <Link
              href="/dashboard/products"
              className="flex items-center gap-3 rounded-lg  px-3 py-2 transition-all hover:font-bold"
            >
              <LuPackage className="h-6 w-6" />
              Products
            </Link>
            <Link
              href="/dashboard/customers"
              className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:font-bold">
              <FiUsers className="h-6 w-6" />
              Customers
            </Link>
            <Link
              href="/dashboard/analytics"
              className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:font-bold"
            >
              <RiLineChartFill className="h-6 w-6" />
              Analytics
            </Link>
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:font-bold" onClick={handleLogout}
            >
              <AiOutlineLogout className="h-6 w-6" />
              Logout
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}