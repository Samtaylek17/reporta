const columns = [
  {
    id: 'created',
    Header: 'Date',
    accessor: 'created', // accessor is the "key" in the data
  },
  {
    id: 'gatewayId',
    Header: 'Gateway',
    accessor: 'gatewayId',
  },
  {
    id: 'paymentId',
    Header: 'Transaction ID',
    accessor: 'paymentId',
  },
  {
    id: 'amount',
    Header: 'Amount',
    accessor: 'amount',
  },
];

export default columns;
