import { SidebarHeader, SidebarContent, SidebarGroup, SidebarFooter, Sidebar, SidebarMenu } from "../../ui/sidebar"
import Icon1 from './icons/icon1.svg?react'
import Icon2 from './icons/icon2.svg?react'
import Icon3 from './icons/icon3.svg?react'
import Icon4 from './icons/icon4.svg?react'
import Icon5 from './icons/icon5.svg?react'
import Icon6 from './icons/icon6.svg?react'
import Icon7 from './icons/icon7.svg?react'
import Icon8 from './icons/icon8.svg?react'
import Icon9 from './icons/icon9.svg?react'
import { NavLink } from "react-router"

const SidebarLocal = () => {
    return (
        <Sidebar side="left" collapsible="icon"
            className="text-"
            style={{
                ["--sidebar-width" as string]: "100px",
                ["--sidebar-width-icon" as string]: "100px"
            }}>
            <SidebarHeader className="items-center mb-4">
                <img src="/logo.svg" alt="" className="w-[60px] h-[60px]" />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="items-center gap-4" >
                    <SidebarMenu className="items-center">
                        <NavLink to={"/pedidos"} className={({ isActive }) => `${isActive ? "bg-primary text-primary-foreground rounded-2xl" : ""}`} >
                            <Icon1 className="w-[55px] h-[55px]" />
                        </NavLink>
                    </SidebarMenu>
                    <SidebarMenu className="items-center">
                        <NavLink to={"/ventas"} className={({ isActive }) => `${isActive ? "bg-primary text-primary-foreground rounded-2xl" : ""}`} >
                            <Icon2 className="w-[55px] h-[55px]" />
                        </NavLink>
                    </SidebarMenu>
                    <SidebarMenu className="items-center">
                        <NavLink to={"/gastos"} className={({ isActive }) => `${isActive ? "bg-primary text-primary-foreground rounded-2xl" : ""}`} >
                            <Icon3 className="w-[55px] h-[55px]" />
                        </NavLink>
                    </SidebarMenu>
                    <SidebarMenu className="items-center">
                        <NavLink to={"/productos"} className={({ isActive }) => `${isActive ? "bg-primary text-primary-foreground rounded-2xl" : ""}`} >
                            <Icon4 className="w-[55px] h-[55px]" />
                        </NavLink>
                    </SidebarMenu>
                    <SidebarMenu className="items-center">
                        <NavLink to={"/clientes"} className={({ isActive }) => `${isActive ? "bg-primary text-primary-foreground rounded-2xl" : ""}`} >
                            <Icon5 className="w-[55px] h-[55px]" />
                        </NavLink>
                    </SidebarMenu>
                    <SidebarMenu className="items-center">
                        <NavLink to={"/proveedores"} className={({ isActive }) => `${isActive ? "bg-primary text-primary-foreground rounded-2xl" : ""}`} >
                            <Icon6 className="w-[55px] h-[55px]" />
                        </NavLink>
                    </SidebarMenu>
                    <SidebarMenu className="items-center">
                        <NavLink to={"/reportes"} className={({ isActive }) => `${isActive ? "bg-primary text-primary-foreground rounded-2xl" : ""}`} >
                            <Icon7 className="w-[55px] h-[55px]" />
                        </NavLink>
                    </SidebarMenu>
                    <SidebarMenu className="items-center">
                        <NavLink to={"/configuracion"} className={({ isActive }) => `${isActive ? "bg-primary text-primary-foreground rounded-2xl" : ""}`} >
                            <Icon8 className="w-[55px] h-[55px]" />
                        </NavLink>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="items-center">
                <NavLink to={"/notificaciones"} className={({ isActive }) => `${isActive ? "bg-primary text-primary-foreground rounded-2xl" : ""}`} >
                    <Icon9 className="w-[55px] h-[55px]" />
                </NavLink>
            </SidebarFooter>
        </Sidebar>
    )
}

export default SidebarLocal