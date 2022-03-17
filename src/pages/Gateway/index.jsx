import { useSelector } from 'react-redux';
import GatewayTable from '../../components/GatewayTable';
import Accordion from '../../components/Accordion';

const SingleProjectAllGateway = ({ report }) => {
  const { gatewayList } = useSelector((state) => state.gateways);

  return (
    <>
      {gatewayList.map((gateway) => (
        <Accordion
          key={gateway.gatewayId}
          title={gateway.name}
          price={report
            .filter((item) => item.gatewayId === gateway.gatewayId)
            .reduce((prev, cur) => Math.floor(prev + cur.amount), 0)}
        >
          <div className="bg-primary-3 p-4">
            <GatewayTable
              data={report.filter(
                (item) => item.gatewayId === gateway.gatewayId
              )}
            />
          </div>
        </Accordion>
      ))}
    </>
  );
};

export default SingleProjectAllGateway;
