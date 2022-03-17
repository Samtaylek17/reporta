import React, { useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import drawChart from './chart';

const DonutChart = ({ data }) => {
  const ref = useRef(null);
  console.log(data);

  useEffect(() => {
    if (ref.current) {
      drawChart(ref.current, data);
    }
  }, [ref, data]);

  return (
    <div className="container">
      <div className="graph" ref={ref} />
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
