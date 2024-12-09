import DataTable from '@/components/ui/data-table'
import { IPedido, pedidos } from '@/utils/mock-data'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'


const EnCursoTable = () => {

    const columns: ColumnDef<IPedido>[] = [
        {
            accessorKey: "id",
            size: 10,
            minSize: 10,
            header: () => <div className='text-center'>ID</div>,
            cell({ row }) {
                const status: "closed" | "processing" = row.getValue("status")
                return <div className={`min-h-full flex justify-center items-center p-4 before:absolute before:top-0 before:left-0 before:w-2 before:h-full ${status !== 'closed' ? "before:bg-destructive" : "before:bg-primary"}`}>
                    <div>{row.getValue("id")}</div>
                </div>
            },
        },
        {
            accessorKey: "init_date",
            size: 20,
            header: () => <div className='text-center'>Hora de inicio</div>,
            cell({ row }) {
                const val: Date = row.getValue("init_date")
                return <div className='text-center p-4'>{format(val, "dd-MMM-yyyy")}</div>
            },
        },
        {
            accessorKey: "status",
            size: 15,
            minSize: 15,
            header: () => <div className='text-center'>Estado</div>,
            cell({ row }) {
                const status: "closed" | "processing" = row.getValue("status")

                return <div className='flex justify-center borde p-4'>
                    <div className={`border w-fit px-2 py-1 rounded-md focus:outline-none outline-none ${status !== 'closed' ? "text-destructive border-destructive" : "text-primary border-primary"}`}>
                        {status === 'closed' ? "Cerrado" : "En curso"}
                    </div>
                </div>
            },
        },
        {
            accessorKey: "client",
            size: 25,
            header: () => <div className='text-center'>Cliente</div>,
            cell({ row }) {
                return <div className='text-center p-4'>{row.getValue("client")}</div>
            },
        },
        {
            accessorKey: "total",
            size: 25,
            header: () => <div className='text-center'>Total</div>,
            cell({ row }) {
                return <div className='text-center p-4'>${parseFloat(row.getValue("total")).toFixed(2)}</div>
            },
        },
    ]

    return (
        <div>
            <DataTable paginate={{ active: true }} data={pedidos.filter(p => p.status === 'processing')} columns={columns} />
        </div>
    )
}

export default EnCursoTable