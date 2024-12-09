import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    TableOptions,
    useReactTable,
} from "@tanstack/react-table"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./table"
import { DataTablePagination } from "./data-table-pagination"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    paginate: {
        active: boolean;
        // TODO: Pagination properties based on data modal from backend
    }
}

const DataTable = <TData, TValue>({ columns, data, paginate }: DataTableProps<TData, TValue>) => {
    const tableConfig: TableOptions<TData> = {
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    }

    if (paginate.active) {
        tableConfig.getPaginationRowModel = getPaginationRowModel()
    }

    const table = useReactTable(tableConfig)

    return (
        <div className="rounded-md overflow-hidden">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="bg-muted text-muted-foreground !border-0">
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id} style={{ width: `${header.column.getSize()}%` }}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                className="border-0 bg-muted/15 hover:bg-primary/15"
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} className="p-0 h-full relative">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {
                (paginate.active && table.getPageCount() > 1) && <>
                    <DataTablePagination table={table} />
                </>
            }
        </div>
    )
}

export default DataTable