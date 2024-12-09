import CerradosTable from "./CerradosTable"
import EnCursoTable from "./EnCursoTable"

const Pedidos = () => {
    return (
        <div className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-4">
                <h3 className="text-xl uppercase font-bold">En curso</h3>
                <EnCursoTable />
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-xl uppercase font-bold">Cerradas (ultimas 5)</h3>
                <CerradosTable />
            </div>
        </div>
    )
}

export default Pedidos