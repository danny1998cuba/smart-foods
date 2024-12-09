import { Routes, Route, Navigate } from "react-router"
import ContentHeader from "./components/layout/ContentHeader"
import SidebarLocal from "./components/layout/sidebar-local/Sidebar"
import TabsLocal from "./components/layout/Tabs"
import { SidebarProvider } from "./components/ui/sidebar"
import ParaLlevar from "./pages/pedidos/para-llevar/ParaLlevar"
import Pedidos from "./pages/pedidos/mostrador/Pedidos"

function App() {
  return (
    <SidebarProvider
      defaultOpen={false}
      open={false}
      style={{
        ["--sidebar-width" as string]: "100px",
        ["--sidebar-width-icon" as string]: "100px"
      }}>
      <div className="min-h-screen flex w-full relative">
        <SidebarLocal />

        <div className="flex flex-col w-full">
          <div className="sticky w-full top-0 z-10">
            <TabsLocal />
            <ContentHeader />
          </div>

          <main role="main" className="px-4 sm:px-12 py-8">
            <Routes>
              <Route path="" element={<Navigate to={"/pedidos"} replace={true} />} />
              <Route path="pedidos">
                <Route path="" element={<Navigate to={"/pedidos/mostrador"} replace={true} />} />
                <Route path="mostrador" element={<Pedidos />} />
                <Route path="para-llevar" element={<ParaLlevar />} />
              </Route>
              <Route path="ventas">
                <Route path="" element={<div className="flex items-center justify-center min-h-screen">Sin desarrollar ventas</div>} />
              </Route>
              <Route path="gastos">
                <Route path="" element={<div className="flex items-center justify-center min-h-screen">Sin desarrollar gastos</div>} />
              </Route>
              <Route path="productos">
                <Route path="" element={<div className="flex items-center justify-center min-h-screen">Sin desarrollar productos</div>} />
              </Route>
              <Route path="clientes">
                <Route path="" element={<div className="flex items-center justify-center min-h-screen">Sin desarrollar clientes</div>} />
              </Route>
              <Route path="proveedores">
                <Route path="" element={<div className="flex items-center justify-center min-h-screen">Sin desarrollar proveedores</div>} />
              </Route>
              <Route path="reportes">
                <Route path="" element={<div className="flex items-center justify-center min-h-screen">Sin desarrollar reportes</div>} />
              </Route>
              <Route path="configuracion">
                <Route path="" element={<div className="flex items-center justify-center min-h-screen">Sin desarrollar configuracion</div>} />
              </Route>
              <Route path="notificaciones">
                <Route path="" element={<div className="flex items-center justify-center min-h-screen">Sin desarrollar notificaciones</div>} />
              </Route>
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default App
