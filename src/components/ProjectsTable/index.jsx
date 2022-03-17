import Table from '../common/Table';
import columns from './columns';

const ProjectsTable = ({ data }) => <Table header={columns} body={data} />;

export default ProjectsTable;
