import { useState } from "react"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { SidebarTrigger, useSidebar } from "../ui/sidebar"
import { Button } from "../ui/button"
import { FaBars } from "react-icons/fa6"
import { NavLink } from "react-router"

const TabsLocal = () => {
    const { toggleSidebar } = useSidebar()

    return (
        <ScrollArea className="w-full">
            <div className="w-full bg-accent text-accent-foreground h-[70px] border-b-primary border-b-8 flex items-end px-4 sm:px-12">
                <Button className="block md:hidden h-3/4" variant="ghost" onClick={toggleSidebar}>
                    <FaBars />
                </Button>
                <div className="flex gap-6 ml-4 md:ml-0 text-lg h-3/4">
                    <NavLink to={"/pedidos/mostrador"} className={({ isActive }) => `flex items-center justify-center px-10 h-full rounded-t-2xl whitespace-nowrap ${isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`} >
                        <div>
                            Mostrador
                        </div>
                    </NavLink>
                    <NavLink to={"/pedidos/para-llevar"} className={({ isActive }) => `flex items-center justify-center px-10 h-full rounded-t-2xl whitespace-nowrap ${isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`} >
                        <div>
                            Para llevar
                        </div>
                    </NavLink>
                </div>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

export default TabsLocal