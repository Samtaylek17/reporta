import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import drawChart from './chart';

const DonutChart = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      drawChart(ref.current, data);
    }
  }, [ref, data]);

  return (
    <div className="container">
      <div className="flex h-full items-center w-full justify-items-center">
        <div className="graph flex w-full" ref={ref} />
      </div>
    </div>
  );
};

DonutChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ).isRequired,
};

export default React.memo(DonutChart);
