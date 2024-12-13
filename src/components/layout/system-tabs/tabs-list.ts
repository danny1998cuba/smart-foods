import { ITab } from "@/lib/custom-types";

export const TABS: { [key: string]: ITab[] } = {
    clientes: [
        { name: "Clientes", url: "/clientes/clientes" },
        { name: "Clientes por Cobrar", url: "/clientes/por-cobrar" },
    ],
    configuracion: [
        { name: "Configuración General", url: "/configuracion" },
    ],
    gastos: [
        { name: "Gastos", url: "/gastos/gastos" },
        { name: "Cat. de Gastos", url: "/gastos/categorias" },
    ],
    notificaciones: [],
    pedidos: [
        { name: "Mostrador", url: "/pedidos/mostrador" },
        { name: "Para llevar", url: "/pedidos/para-llevar" },
    ],
    productos: [
        { name: "Productos", url: "/productos/productos" },
        { name: "Ingredientes", url: "/productos/ingredientes" },
        { name: "Cat. Productos", url: "/productos/categorias" },
        { name: "Cat. Ingredientes", url: "/productos/ingredientes-categorias" },
        { name: "Control Stock", url: "/productos/stock" },
        { name: "Movimientos Stock", url: "/productos/stock-movimientos" },
        { name: "Lista Precios", url: "/productos/precios" },
    ],
    proveedores: [
        { name: "Proveedores", url: "/proveedores/proveedores" },
        { name: "Proveedores por Pagar", url: "/proveedores/por-pagar" },
    ],
    reportes: [],
    ventas: [
        { name: "Ventas", url: "/ventas/ventas" },
        { name: "Movimientos de Caja", url: "/ventas/caja-movimientos" },
        { name: "Arqueo de Caja", url: "/ventas/caja-arqueo" },
    ],
}