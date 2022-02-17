const barChart = async () => {
  //Getting data and creating our x and y Accessor function.
  const data = await d3.json(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
  );
  dataset = data;

  const yAccessor = (d) => d.data[0][1];
  const dateParse = d3.timeParse("%Y-%m-%d");
  const xAccessor = (d) => dateParse(d.data[0][0]);
  console.log(xAccessor);

  //Drawing and setting our dimensions.
  let dimensions = {
    width: Math.ceil(window.innerWidth * 0.7),
    height: Math.ceil(window.innerHeight * 0.4),
    margin: {
      top: 10,
      right: 10,
      left: 60,
      bottom: 50,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.right - dimensions.margin.left;
  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  const wrapper = d3
    .select("#wrapper")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .style(
      "transform",
      `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    );

  //Setting ou scale.

  yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dimensions.boundedHeight, 0]);
  console.log(yScale);

  xScale = d3.time
    .scale()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth]);
  console.log(xScale);
};
barChart();
