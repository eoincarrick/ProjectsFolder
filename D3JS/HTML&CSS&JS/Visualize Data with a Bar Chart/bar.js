const barChart = async () => {
  const data = await d3.json(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
  );
  console.table(data.data);
  const dataParse = d3.timeParse("%Y-%m-%d");
  const xAccessor = (d) => dataParse(d.data[0]);
  const yAccessor = (d) => d.data[1];
  console.log(xAccessor)



};
barChart();
