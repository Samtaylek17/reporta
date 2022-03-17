import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="flex w-full bg-white py-8 gap-x-2">
    <Link to="/" className="text-base leading-[19px] text-primary-2 font-bold">
      Terms & Conditions
    </Link>
    <span className="text-primary-2 font-bold">|</span>
    <Link to="/" className="text-base leading-[19px] text-primary-2 font-bold">
      Privacy policy
    </Link>
  </div>
);

export default Footer;
