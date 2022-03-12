import { useEffect } from 'react';
import { Select, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../slices/projectSlice';
import { fetchGateways } from '../../slices/gatewaySlice';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Empty from '../../components/EmptyState';
import Footer from '../../components/Footer';
import Accordion from '../../components/Accordion';

const { Option } = Select;

const Home = () => {
  const { projectList } = useSelector((state) => state.projects);
  const { gatewayList } = useSelector((state) => state.gateways);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchGateways());
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="grow overflow-y-scroll sm:pr-20 px-8 mt-6">
          <div className="flex w-full flex-col justify-between mb-4 sm:flex-row">
            <div className="flex flex-1 flex-col">
              <h1 className="font-bold text-xl text-primary-1">Reports</h1>
              <p className="text-base text-gray-1 inline-flex">
                Easily generate a report of your transactions
              </p>
            </div>
            <div className="flex flex-1 justify-end flex-col gap-y-4 gap-x-8 sm:flex-row w-full items-stretch">
              <div className="w-full sm:w-32">
                <Select
                  style={{ width: '100%' }}
                  dropdownClassName="bg-accent-1 text-white"
                >
                  <Option>All Projects</Option>
                  {projectList.map((project) => (
                    <Option key={project.projectId} value={project.projectId}>
                      {project.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="w-full sm:w-32">
                <Select
                  style={{ width: '100%' }}
                  dropdownClassName="bg-accent-1 text-white"
                >
                  <Option>All Gateways</Option>
                  {gatewayList.map((gateway) => (
                    <Option key={gateway.gatewayId} value={gateway.gatewayId}>
                      {gateway.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="w-full sm:w-32">
                <DatePicker
                  dropdownClassName="bg-accent-1 text-white"
                  className="bg-accent-1 border-0 text-white placeholder-white rounded-[5px]"
                />
              </div>
              <div className="w-full sm:w-32">
                <DatePicker
                  dropdownClassName="bg-accent-1 text-white"
                  className="bg-accent-1 border-0 text-white placeholder-white rounded-[5px]"
                />
              </div>
              <div className="w-full sm:w-32">
                <button
                  type="button"
                  className="bg-primary-2 h-8 w-[118px] text-white rounded-md"
                >
                  Generate report
                </button>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[65vh] bg-primary-3 rounded-[10px] p-4">
            <div className="flex gap-x-2 mb-8">
              <h6 className="font-bold text-base leading-[19px] text-primary-1">
                All projects
              </h6>
              <span className="font-bold text-base leading-[19px] text-primary-1">
                |
              </span>
              <h6 className="font-bold text-base leading-[19px] text-primary-1">
                All gateways
              </h6>
            </div>
            {/* <Empty /> */}
            {projectList.map((project) => (
              <Accordion title={project.name}>
                <div className="bg-primary-3 p-4">
                  <table className="table-auto w-full overflow-x-scroll block sm:table">
                    <thead className="bg-white rounded-md hidden sm:table-header-group">
                      <tr className="text-left">
                        <th className="p-2">Date</th>
                        <th className="p-2">Gateway</th>
                        <th className="p-2">Transaction ID</th>
                        <th className="p-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="block sm:table-row-group w-full">
                      <tr className="block sm:table-row w-full mb-0 sm:mb-[15px]">
                        <td
                          className="block py-2 sm:table-cell w-full 
                      sm:w-auto pl-[50%] sm:pl-2 text-right 
                      sm:text-left relative sm:before:content-[''] 
                      before:content-[attr(data-label)] before:absolute 
                      before:left-0 before:w-1/2 before:text-sm text-primary-1 
                      before:font-semibold before:text-left"
                          data-label="Date"
                        >
                          01/21/2021
                        </td>
                        <td
                          className="block py-2 sm:table-cell 
                      w-full sm:w-auto pl-[50%] sm:pl-2 
                      text-right sm:text-left relative 
                      sm:before:content-[''] 
                      before:content-[attr(data-label)] 
                      before:absolute before:left-0 before:w-1/2 
                      before:text-sm text-primary-1 
                      before:font-semibold before:text-left"
                          data-label="Gateway"
                        >
                          Gateway 1
                        </td>
                        <td
                          className="block py-2 sm:table-cell 
                      w-full sm:w-auto pl-[50%] 
                      sm:pl-2 text-right sm:text-left 
                      relative sm:before:content-[''] 
                      before:content-[attr(data-label)] 
                      before:absolute before:left-0 
                      before:w-1/2 before:text-sm 
                      text-primary-1 before:font-semibold 
                      before:text-left"
                          data-label="Transaction ID"
                        >
                          a732b
                        </td>
                        <td
                          className="block py-2 sm:table-cell w-full 
                      sm:w-auto pl-[50%] sm:pl-2 text-right 
                      sm:text-left relative sm:before:content-[''] 
                      before:content-[attr(data-label)] 
                      before:absolute before:left-0 before:w-1/2 
                      before:text-sm text-primary-1 
                      before:font-semibold before:text-left"
                          data-label="Amount"
                        >
                          3964 USD
                        </td>
                      </tr>
                      <tr className="block sm:table-row w-full mb-0 sm:mb-[15px]">
                        <td
                          className="block py-2 sm:table-cell w-full 
                      sm:w-auto pl-[50%] sm:pl-2 text-right 
                      sm:text-left relative sm:before:content-[''] 
                      before:content-[attr(data-label)] before:absolute 
                      before:left-0 before:w-1/2 before:text-sm text-primary-1 
                      before:font-semibold before:text-left"
                          data-label="Date"
                        >
                          01/21/2021
                        </td>
                        <td
                          className="block py-2 sm:table-cell 
                      w-full sm:w-auto pl-[50%] sm:pl-2 
                      text-right sm:text-left relative 
                      sm:before:content-[''] 
                      before:content-[attr(data-label)] 
                      before:absolute before:left-0 before:w-1/2 
                      before:text-sm text-primary-1 
                      before:font-semibold before:text-left"
                          data-label="Gateway"
                        >
                          Gateway 1
                        </td>
                        <td
                          className="block py-2 sm:table-cell 
                      w-full sm:w-auto pl-[50%] 
                      sm:pl-2 text-right sm:text-left 
                      relative sm:before:content-[''] 
                      before:content-[attr(data-label)] 
                      before:absolute before:left-0 
                      before:w-1/2 before:text-sm 
                      text-primary-1 before:font-semibold 
                      before:text-left"
                          data-label="Transaction ID"
                        >
                          a732b
                        </td>
                        <td
                          className="block py-2 sm:table-cell w-full 
                      sm:w-auto pl-[50%] sm:pl-2 text-right 
                      sm:text-left relative sm:before:content-[''] 
                      before:content-[attr(data-label)] 
                      before:absolute before:left-0 before:w-1/2 
                      before:text-sm text-primary-1 
                      before:font-semibold before:text-left"
                          data-label="Amount"
                        >
                          3964 USD
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Accordion>
            ))}
          </div>
          <div className="flex w-full mt-6 bg-primary-3 px-4 py-5 rounded-[10px]">
            <h5 className="text-base font-bold text-primary-1">
              Total: 14,065 USD
            </h5>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
