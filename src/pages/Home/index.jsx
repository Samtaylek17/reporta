import { useState, useEffect, useMemo } from 'react';
import { Select, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../slices/projectSlice';
import { fetchGateways } from '../../slices/gatewaySlice';
import { generateReport } from '../../slices/reportSlice';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import Empty from '../../components/EmptyState';
import Footer from '../../components/common/Footer';
import DonutChart from '../../components/Chart';
import AllProjectAllGateway from '../Project';
import SingleProjectAllGateway from '../Gateway';
import SingleProjectSingleGateway from '../SingleData';

const { Option } = Select;

const Home = () => {
  const { projectList } = useSelector((state) => state.projects);
  const { gatewayList } = useSelector((state) => state.gateways);
  const { report } = useSelector((state) => state.reports);

  const [projectId, setProjectId] = useState('');
  const [gatewayId, setGatewayId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [gatewayName, setGatewayName] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const reportData = useMemo(
    () =>
      gatewayList.map((gateway) =>
        report
          .filter((item) => item.gatewayId === gateway.gatewayId)
          .reduce((prev, cur) => Math.floor(prev + cur.amount), 0)
      ),
    [report]
  );

  const projectData = useMemo(
    () =>
      projectList.map((project) =>
        report
          .filter((item) => item.projectId === project.projectId)
          .reduce((prev, cur) => Math.floor(prev + cur.amount), 0)
      ),
    [report]
  );

  const getAmount = (amount) => {
    const amountArr = [];
    for (let i = 0; i < amount.length; i += 1) {
      const o = {};
      o.value = amount[i];
      amountArr.push(o);
    }
    return amountArr;
  };

  const chartData = useMemo(() => getAmount(reportData), [reportData, report]);
  const chartDataProject = useMemo(
    () => getAmount(projectData),
    [projectData, report]
  );

  useEffect(() => {
    // getAmount();
  }, [report]);
  // const chartData = useMemo(() => getAmount(), [amount, report]);

  const dispatch = useDispatch();

  const handleProjectSelect = (value) => {
    if (value !== undefined && value !== '') {
      const selected = projectList.map((project) => ({
        ...project,
        selected: project.projectId === value,
      }));
      const selectedProject = selected.find(
        (project) => project.projectId === value
      );
      setProjectId(selectedProject.projectId);
      setProjectName(selectedProject.name);
    } else {
      setProjectName('');
      setProjectId('');
    }
  };

  const handleGatewaySelect = (value) => {
    if (value !== undefined && value !== '') {
      const selected = gatewayList.map((gateway) => ({
        ...gateway,
        selected: gateway.gatewayId === value,
      }));
      const selectedGateway = selected.find(
        (gateway) => gateway.gatewayId === value
      );
      setGatewayId(selectedGateway.gatewayId);
      setGatewayName(selectedGateway.name);
    } else {
      setGatewayName('');
      setGatewayId('');
    }
  };

  const handleSubmit = () => {
    dispatch(
      generateReport({
        projectId,
        gatewayId,
        from: dateFrom,
        to: dateTo,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchGateways());
    // sortReportByProject();
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
                  onChange={(value) => handleProjectSelect(value)}
                  style={{ width: '100%' }}
                  dropdownClassName="bg-accent-1 text-white"
                >
                  <Option value="">All Projects</Option>
                  {projectList.map((project) => (
                    <Option key={project.projectId} value={project.projectId}>
                      {project.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="w-full sm:w-32">
                <Select
                  onChange={(value) => handleGatewaySelect(value)}
                  style={{ width: '100%' }}
                  dropdownClassName="bg-accent-1 text-white"
                >
                  <Option value="">All Gateways</Option>
                  {gatewayList.map((gateway) => (
                    <Option key={gateway.gatewayId} value={gateway.gatewayId}>
                      {gateway.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="w-full sm:w-32">
                <DatePicker
                  onChange={(date) => setDateFrom(date)}
                  dropdownClassName="bg-accent-1 text-white"
                  className="bg-accent-1 border-0 text-white placeholder-white rounded-[5px]"
                />
              </div>
              <div className="w-full sm:w-32">
                <DatePicker
                  onChange={(date) => setDateTo(date)}
                  dropdownClassName="bg-accent-1 text-white"
                  className="bg-accent-1 border-0 text-white placeholder-white rounded-[5px]"
                />
              </div>
              <div className="w-full sm:w-32">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-primary-2 h-8 w-full text-white rounded-md cursor-pointer"
                >
                  Generate report
                </button>
              </div>
            </div>
          </div>

          {Object.entries(report).length === 0 ? (
            <div className="flex justify-center min-h-[65vh] items-center">
              <Empty />
            </div>
          ) : (
            <>
              <div className="flex h-[58vh]">
                <div className="w-full overflow-y-scroll bg-primary-3 rounded-[10px] p-4">
                  <div className="flex gap-x-2 mb-8">
                    <h6 className="font-bold text-base leading-[19px] text-primary-1">
                      {projectName || 'All Projects'}
                    </h6>
                    <span className="font-bold text-base leading-[19px] text-primary-1">
                      |
                    </span>
                    <h6 className="font-bold text-base leading-[19px] text-primary-1">
                      {gatewayName || 'All gateways'}
                    </h6>
                  </div>
                  {projectName === '' && gatewayName !== '' && (
                    <AllProjectAllGateway report={report} />
                  )}

                  {gatewayName === '' && projectName !== '' && (
                    <SingleProjectAllGateway report={report} />
                  )}

                  {projectName === '' && gatewayName === '' && (
                    <AllProjectAllGateway report={report} />
                  )}

                  {projectName !== '' && gatewayName !== '' && (
                    <SingleProjectSingleGateway
                      report={report}
                      gateway={gatewayId}
                    />
                  )}
                </div>
                {projectName !== '' && gatewayName === '' && (
                  <div className="flex w-full justify-center">
                    <DonutChart data={chartData} />
                  </div>
                )}
                {projectName === '' && gatewayName !== '' && (
                  <div className="flex w-full justify-center">
                    <DonutChart data={chartDataProject} />
                  </div>
                )}
              </div>
              <div className="flex w-full mt-6 bg-primary-3 px-4 py-5 rounded-[10px]">
                <h5 className="text-base font-bold text-primary-1">
                  Total:{' '}
                  {report.reduce(
                    (prev, curr) => Math.floor(prev + curr.amount),
                    0
                  )}{' '}
                  USD
                </h5>
              </div>
            </>
          )}

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
