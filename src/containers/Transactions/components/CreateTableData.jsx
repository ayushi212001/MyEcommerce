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
            Header: 'Transaction Id',
            accessor: 'transactionid',
        },
        {
            Header: 'Amount',
            accessor: 'amount',
        },
        {
            Header: 'Date',
            accessor: 'date',
            disableGlobalFilter: true,
        },
        {
            Header: 'Order Id',
            accessor: 'orderid',
        },
        {
            Header: 'Account Details',
            accessor: 'accountdetails',
            disableGlobalFilter: true,
            disableSortBy: true,
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
                transactionid: ['12340094', '34500055', '56000544'][Math.floor((Math.random() * 3))],
                amount: ['5000', '12000', '15400'][Math.floor((Math.random() * 3))],
                date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
                orderid: ['12334', '54454', '66756'][Math.floor((Math.random() * 3))],
                accountdetails: ['this is xyz', 'this is zyf', 'this is thj'][Math.floor((Math.random() * 3))],
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
