import { ReactComponent as Histogram } from '../../../assets/icons/histogram.svg';
import { ReactComponent as Menu } from '../../../assets/icons/menu.svg';
import { ReactComponent as Desktop } from '../../../assets/icons/desktop.svg';
import { ReactComponent as PieChart } from '../../../assets/icons/pie-chart.svg';
import { ReactComponent as Power } from '../../../assets/icons/power.svg';

const Sidebar = ({ toggle }) => (
  // min-w-[90px]
  <div
    className={`${
      toggle ? 'w-0 sm:min-w-[90px]' : 'min-w-[90px]'
    } flex-none transition-all min-h-[90vh] overflow-y-scroll`}
  >
    <div className="flex flex-col gap-y-6 items-center mt-12">
      <Histogram />
      <Menu />
      <Desktop />
      <PieChart />
      <Power />
    </div>
  </div>
);

export default Sidebar;
