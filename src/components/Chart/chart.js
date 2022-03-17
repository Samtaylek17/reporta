import * as d3 from 'd3';

const drawChart = (element, data) => {
  const colors = ['#FFC107', '#A259FF', '#6497B1', '#F24E1E'];
  const boxSize = 500;

  d3.select(element).select('svg').remove(); // Remove the old svg
  // Create new svg
  const svg = d3
    .select(element)
    .append('svg')
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .attr('height', '100%')
    .attr('width', '100%')
    .attr('viewBox', `0 0 ${boxSize} ${boxSize}`)
    .append('g')
    .attr('transform', `translate(${boxSize / 2}, ${boxSize / 2})`);

  const arcGenerator = d3.arc().innerRadius(70).outerRadius(135);

  const pieGenerator = d3.pie().value((d) => d.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  arcs
    .append('path')
    .attr('d', arcGenerator)
    .style('fill', (d, i) => colors[i % data.length]);

  // Append text labels
  arcs
    .append('text')
    .attr('text-anchor', 'middle')
    .text((d) => `${d.data.value}%`) // label text
    .style('fill', '#fff') // label color
    .style('font-size', '14px') // label size
    .attr('transform', (d) => {
      const [x, y] = arcGenerator.centroid(d);
      return `translate(${x}, ${y})`;
    })
    .style('font-size', 0)
    .transition()
    .duration(700)
    .style('font-size', '14px');
};

export default drawChart;
