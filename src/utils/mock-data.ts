export interface IPedido {
    id: number;
    init_date: Date;
    status: "closed" | "processing",
    client: string;
    total: number;
}

export const pedidos: IPedido[] = [
    {
        id: 6,
        client: "Cliente",
        init_date: new Date(),
        status: 'processing',
        total: 1230.4
    },
    {
        id: 512,
        client: "Cliente",
        init_date: new Date(),
        status: 'processing',
        total: 1230.4
    },
    {
        id: 12567,
        client: "Cliente",
        init_date: new Date(),
        status: 'processing',
        total: 1230.4
    },
    {
        id: 6,
        client: "Cliente",
        init_date: new Date(),
        status: 'closed',
        total: 1230.4
    },
    {
        id: 512,
        client: "Cliente",
        init_date: new Date(),
        status: 'closed',
        total: 1230.4
    },
    {
        id: 12567,
        client: "Cliente",
        init_date: new Date(),
        status: 'closed',
        total: 1230.4
    },
]
