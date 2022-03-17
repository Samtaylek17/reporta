import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../slices/userSlice';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as Hamburger } from '../../../assets/icons/hamburger.svg';

const Navbar = ({ onClick }) => {
  const { userList } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <nav className="sticky top-0 bg-white z-10">
      <div className="flex w-full shadow-sm py-4 px-8 justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <Hamburger className="h-7 w-7" onClick={onClick} />
        </div>
        <div className="flex items-center gap-x-4">
          <div className="inline-flex bg-accent-2 items-center px-3 py-1 rounded-md">
            <h1 className="text-white text-xl">
              {userList[0]?.firstName.split('')[0]}
              {userList[0]?.lastName.split('')[0]}
            </h1>
          </div>
          <h6 className="text-base text-primary-1 font-bold">
            {userList[0]?.firstName} {userList[0]?.lastName}
          </h6>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
