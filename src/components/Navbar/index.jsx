import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';

const Navbar = () => (
  <nav className="sticky top-0 bg-white z-10">
    <div className="flex w-full shadow-sm py-4 px-8 justify-between">
      <div className="flex items-center gap-8">
        <Logo />
        <Hamburger className="h-7 w-7" />
      </div>
      <div className="flex items-center gap-x-4">
        <div className="inline-flex bg-accent-2 items-center px-3 py-1 rounded-md">
          <h1 className="text-white text-xl">JD</h1>
        </div>
        <h6 className="text-base text-primary-1 font-bold">John Doe</h6>
      </div>
    </div>
  </nav>
);
export default Navbar;
