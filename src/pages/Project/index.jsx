import { useSelector } from 'react-redux';
import Accordion from '../../components/Accordion';
import ProjectsTable from '../../components/ProjectsTable';

const AllProjectAllGateway = ({ report }) => {
  const { projectList } = useSelector((state) => state.projects);

  return (
    <>
      {projectList.map((project) => (
        <Accordion
          key={project.projectId}
          title={project.name}
          price={report
            .filter((item) => item.projectId === project.projectId)
            .reduce((prev, cur) => Math.floor(prev + cur.amount), 0)}
        >
          <div className="bg-primary-3 p-4">
            <ProjectsTable
              data={report.filter(
                (item) => item.projectId === project.projectId
              )}
            />
          </div>
        </Accordion>
      ))}
    </>
  );
};

export default AllProjectAllGateway;
