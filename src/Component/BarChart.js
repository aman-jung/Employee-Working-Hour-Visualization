import React, { Component } from "react";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
//import { csv } from "d3-request";
import * as d3 from "d3";
// import { timeParse } from "d3-time-format";
//import denny from "../Datasets/denny.csv";
import harry from "../Datasets/harry.csv";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }
  componentDidMount() {
    d3.csv(harry).then(function(data) {
      for (let key in data) {
        console.log(data[key]);
      }
      console.log(data);
    });
    //var dsv = d3.dsvFormat(";");

    // var headers = ["StartTime;,,,;Stop Time;,,;\n"];

    // d3.request("dsv.dsv")
    //   .mimeType("text/plain")
    //   .response(function(data) {
    //     return dsv.parse(headers + data.response);
    //   })
    //   .get(function(data) {
    //     // use data here:
    //     console.log(data);
    //     console.log(data.columns);
    //   });

    // d3.csv(denny).then(function(data) {
    //   console.log(data);
    //   // var parseDate = d3.timeParse("%d.%m.%Y %H:%M");
    //   // var bisectDate = data.forEach(function(d) {
    //   //   d.date = parseDate(d.startTime);
    //   //   console.log(parseDate(d.startTime));
    //   // });
    // });
    // d3.csv(denny)
    //   .then(function(data) {
    //     var formatDate = timeParse("%Y-%m-%d");
    //     var bisectDate = d3.bisector(function(d) {
    //       return formatDate.parse(d["date"]);
    //     }).left;
    //     console.log(bisectDate);
    //   })
    //   .catch(function(err) {
    //     throw err;
    //   });
    // d3.csv(harry)
    //   .then(function(data) {
    //     console.log(data);
    //   })
    //   .catch(function(err) {
    //     throw err;
    //   });
    //this.createBarChart();
  }
  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    const node = this.node;
    const dataMax = max(this.props.data);
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);
    select(node)
      .selectAll("rect")
      .data(this.props.data)
      .enter()
      .append("rect");

    // select(node)
    //   .selectAll("rect")
    //   .data(this.props.data)
    //   .exit()
    //   .remove();

    select(node)
      .selectAll("rect")
      .data(this.props.data)
      .style("fill", "red")
      .attr("x", (d, i) => i * 25)
      .attr("y", d => this.props.size[1] - yScale(d))
      .attr("height", d => yScale(d))
      .attr("width", 25);
  }
  render() {
    return <svg ref={node => (this.node = node)} width={500} height={500} />;
  }
}
export default BarChart;
