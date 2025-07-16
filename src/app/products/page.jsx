'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import AddProductForm from "@/components/AddProductFrom"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import EditProductForm from "@/components/EditProudctForm"

export default function ProductsPage() {
    const [products, setProducts] = useState([
        { _id: "1", name: "Milk", category: "Dairy", brand: "Nestle" },
        { _id: "2", name: "Rice", category: "Grains", brand: "Local Brand" },
    ])

    const [search, setSearch] = useState("")
    const [editingProduct, setEditingProduct] = useState(null)

    const filteredProducts = products.filter((product) => {
        const query = search.toLowerCase()
        return (
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query)
        )
    })

    return (
        <main className="flex-1 p-6">

            <header>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Products</h2>
                    <AddProductForm />
                </div>

                <Separator className="my-4" />

                {/* Search Bar */}
                <div className="max-w-md mb-4 w-full">
                    <Input
                        placeholder="Search by name, category, or brand..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </header>

            {/* Table Layout */}
            <div className="rounded-md border w-[70vw]">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Brand</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <TableRow key={product._id}>
                                    <TableCell className="font-medium">{product.name}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.brand}</TableCell>
                                    <TableCell className="text-right">
                                        <Sheet>
                                            <SheetTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => setEditingProduct(product)}
                                                >
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                            </SheetTrigger>
                                            <SheetContent side="left" className="w-full sm:max-w-md p-5">
                                                <SheetHeader>
                                                    <SheetTitle>Edit Product</SheetTitle>
                                                </SheetHeader>
                                                {editingProduct && (
                                                    <EditProductForm
                                                        product={editingProduct}
                                                        onSave={(updated) => {
                                                            setProducts((prev) =>
                                                                prev.map((p) => (p._id === updated._id ? updated : p))
                                                            )
                                                        }}
                                                    />
                                                )}
                                            </SheetContent>
                                        </Sheet>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-gray-500">
                                    No products found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </main>
    )
}

