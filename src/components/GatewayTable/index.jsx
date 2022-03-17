import Table from '../common/Table';
import columns from './columns';

const GatewayTable = ({ data }) => <Table header={columns} body={data} />;

export default GatewayTable;
