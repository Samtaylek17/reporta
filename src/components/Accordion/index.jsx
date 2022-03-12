import { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ title, price, children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-white rounded-md w-full my-4">
      <button
        type="button"
        onClick={toggleState}
        className={
          toggle
            ? 'w-full gap-x-4 flex justify-between px-4 bg-lemon rounded-t-md py-4'
            : 'w-full gap-x-4 flex justify-between px-4 bg-lemon rounded-t-md rounded-b-md py-4'
        }
      >
        <h6 className="text-base font-bold text-primary-1">{title}</h6>
        <h6 className="text-base font-bold text-primary-1">
          Total: 10,065 USD
        </h6>
      </button>
      <div
        className={
          toggle
            ? 'h-auto opacity-100 transition-opacity rounded-b-md'
            : 'h-0 opacity-0 transition-opacity'
        }
      >
        <div
          aria-hidden={toggle ? 'true' : 'false'}
          className={toggle ? 'block' : 'hidden'}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Accordion;
