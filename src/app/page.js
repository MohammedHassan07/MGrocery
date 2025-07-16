'use client'

import AddProductForm from "@/components/AddProductFrom"
import DashboardCard from "@/components/DashboardCard"
import { Separator } from "@/components/ui/separator"
import { Package, ShoppingCart, Users, BarChart } from "lucide-react"

export default function Home() {
  return (
    <>

      <main className="flex-1 p-6 w-[75vw]">

        <div className="flex items-center justify-between mb-6">
          <div>

            <h2 className="text-2xl font-semibold">MGrocery Dashboard</h2>
          </div>

          <AddProductForm />
        </div>

        <Separator className="my-4" />

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <DashboardCard
            icon={<ShoppingCart
              className="h-6 w-6 text-green-600" />}
            title="Orders"
            value="312"
          />
          <DashboardCard icon={<Package className="h-6 w-6 text-blue-600" />} title="Products" value="98" />
          <DashboardCard icon={<Users className="h-6 w-6 text-purple-600" />} title="Customers" value="150" />
          <DashboardCard icon={<BarChart className="h-6 w-6 text-orange-600" />} title="Revenue" value="₹52,000" />
        </div>
      </main>

    </>
  );
}
