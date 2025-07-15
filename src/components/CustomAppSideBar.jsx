import { LayoutDashboard, LogOut, User, Package, ChartBarStacked, ShoppingCart } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard,
    }, {
        title: "products",
        url: "/products",
        icon: Package,
    }, {
        title: "categories",
        url: "/",
        icon: ChartBarStacked,
    }, {
        title: "orders",
        url: "/",
        icon: ShoppingCart,
    }, {
        title: "users",
        url: "/",
        icon: User,
    }, {
        title: "Logout",
        url: "#",
        icon: LogOut,
    },
]


export function CusotmAppSideBar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>M Grocery</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}