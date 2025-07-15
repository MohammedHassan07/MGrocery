'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SquarePlus } from 'lucide-react'

export default function AddProductForm() {
  const [categories, setCategories] = useState(["Dairy", "Grains"])
  const [brands, setBrands] = useState(["Nestle", "Local Brand"])

  const [newCategory, setNewCategory] = useState("")
  const [newBrand, setNewBrand] = useState("")

  const addCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory])
      setNewCategory("")
    }
  }

  const addBrand = () => {
    if (newBrand && !brands.includes(newBrand)) {
      setBrands([...brands, newBrand])
      setNewBrand("")
    }
  }

  return (

    <>
      <Sheet>

        <SheetTrigger><SquarePlus className="hover:cursor-pointer" /></SheetTrigger>

        <SheetContent>

          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>

          <form className="space-y-6 px-5">

            {/* Product Name */}
            <div className="space-y-2">
              <Label htmlFor="product_name">Product Name:</Label>
              <Input id="product_name" name="product_name" type="text" required />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label>Category:</Label>
              <div className="flex gap-2 items-center">
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat, index) => (
                      <SelectItem key={index} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button type="button" variant="outline">+ Add New Category</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Category</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input
                        type="text"
                        placeholder="Enter new category"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                      />
                      <Button onClick={addCategory}>Add Category</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Brand */}
            <div className="space-y-2">
              <Label>Brand:</Label>
              <div className="flex gap-2 items-center">
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((brand, index) => (
                      <SelectItem key={index} value={brand}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button type="button" variant="outline">+ Add New Brand</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Brand</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input
                        type="text"
                        placeholder="Enter new brand"
                        value={newBrand}
                        onChange={(e) => setNewBrand(e.target.value)}
                      />
                      <Button onClick={addBrand}>Add Brand</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 ">
              <Button className={'hover:cursor-pointer'} type="submit">Add Product</Button>
            </div>
          </form>


        </SheetContent>
      </Sheet>


    </>
  )
}
