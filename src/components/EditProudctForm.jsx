'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"


export default function EditProductForm({ product, onSave }) {

    const [formData, setFormData] = useState(product)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you can call your API to update product in DB
        onSave(formData)
        alert("Product updated!")
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
                <label className="text-sm font-medium">Name</label>
                <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="space-y-1">
                <label className="text-sm font-medium">Category</label>
                <Input
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="space-y-1">
                <label className="text-sm font-medium">Brand</label>
                <Input
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                />
            </div>
            <Button type="submit">Save Changes</Button>
        </form>
    )
}