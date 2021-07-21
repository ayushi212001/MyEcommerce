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
            Header: 'Product',
            accessor: 'product',
        },
        {
            Header: 'Qty',
            accessor: 'qty',
            disableGlobalFilter: true,
        },
        {
            Header: 'Order Date',
            accessor: 'order_date',
        },
        {
            Header: 'Amount',
            accessor: 'amount',
            disableGlobalFilter: true,
            disableSortBy: true,
        },
        {
            Header: 'Return Date',
            accessor: 'return_date',
        },
        {
            Header: 'Return Reason',
            accessor: 'return_reason',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
    ], []);

    const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime()))).toLocaleDateString();

    const data = [];

    const rows = () => {
        for (let i = 1; i < 36; i += 1) {
            data.push({
                id: i,
                orderid: ['12340094', '34500055', '56000544'][Math.floor((Math.random() * 3))],
                product: ['Soap', 'Surf', 'Bag'][Math.floor((Math.random() * 3))],
                qty: ['200', '600', '150'][Math.floor((Math.random() * 3))],
                order_date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
                amount: ['5000', '12000', '15400'][Math.floor((Math.random() * 3))],
                return_date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
                return_reason: ['this is xyz', 'this is zyf', 'this is thj'][Math.floor((Math.random() * 3))],
                status: ['accepted', 'rejected', 'pending'][Math.floor((Math.random() * 3))],
                badge: ['success', 'warning', 'primary'][Math.floor((Math.random() * 3))],
            });
        }
    };
    rows();
    const reactTableData = { tableHeaderData: columns, tableRowsData: data };
    return reactTableData;
};

export default CreateTableData;
