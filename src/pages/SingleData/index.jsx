import GatewayTable from '../../components/GatewayTable';

const SingleProjectSingleGateway = ({ report }) => (
  <div className="bg-primary-3 p-4 overflow-y-scroll">
    <GatewayTable data={report} />
  </div>
);

export default SingleProjectSingleGateway;
