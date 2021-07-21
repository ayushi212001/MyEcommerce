/* eslint-disable max-len */
import { useMemo } from 'react';

const CreateTableData = () => {
    const columns = useMemo(() => [
        {
            Header: '#',
            accessor: 'id',
            disableGlobalFilter: true,
            width: 65,
        },
        {
            Header: 'Order Id',
            accessor: 'orderid',
        },
        {
            Header: 'Date',
            accessor: 'date',
        },
        {
            Header: 'Product',
            accessor: 'product',
        },
        {
            Header: 'Qty',
            accessor: 'qty',
            disableGlobalFilter: true,
        },

        {
            Header: 'Total Amount',
            accessor: 'total_amount',
            disableGlobalFilter: true,
            disableSortBy: true,
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
        {
            Header: 'Actions',
            accessor: 'actions',
            disableGlobalFilter: true,
            disableSortBy: true,
        },
    ], []);

    const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime()))).toLocaleDateString();

    const data = [];

    const rows = () => {
        for (let i = 1; i < 36; i += 1) {
            data.push({
                id: i,
                orderid: ['12340094', '34500055', '56000544'][Math.floor((Math.random() * 3))],
                date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
                product: ['Soap', 'Surf', 'Bag'][Math.floor((Math.random() * 3))],
                qty: ['200', '600', '150'][Math.floor((Math.random() * 3))],
                total_amount: ['5000', '12000', '15400'][Math.floor((Math.random() * 3))],
                status: ['accepted', 'rejected', 'pending'][Math.floor((Math.random() * 3))],
                badge: ['success', 'warning', 'primary'][Math.floor((Math.random() * 3))],
                actions: 'view',
            });
        }
    };
    rows();
    const reactTableData = { tableHeaderData: columns, tableRowsData: data };
    return reactTableData;
};

export default CreateTableData;
