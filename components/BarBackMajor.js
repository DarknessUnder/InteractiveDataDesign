import React from "react";
import Chart from "react-apexcharts";

class BarChartBack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Under 18",
          data: [-95, -35, -52, -17]
        },
        {
          name: "18+",
          data: [83, 40, 33, 20]
        }
      ],
      options: {
        legend: {
          show: true,
          fontSize: "40px",
          labels: {
            colors: ["#EFC52D", "#06CCEE", "#34B755", "#E65A5F"],
            useSeriesColors: true
          },
          markers: {
            width: 40,
            height: 40
          },
          itemMargin: {
            horizontal: 100,
            vertical: 0
          }
        },
        chart: {
          type: "bar",
          height: 440,
          stacked: true,
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 550,
            animateGradually: {
              enabled: true,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 250
            }
          }
        },
        colors: ["#EFC52D", "#E65A5F"],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "80%"
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "20px",
            colors: ["#fff"]
          },
          formatter: function (val) {
            return Math.abs(Math.round(val)) + "%";
          }
        },
        grid: {
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          min: -100,
          max: 100,
          title: {
            // text: 'Age',
          },
          labels: {
            style: {
              fontSize: "16px",
              colors: [
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff"
              ]
            }
          }
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function (val) {
              return val;
            }
          },
          y: {
            formatter: function (val) {
              return Math.abs(val) + "%";
            }
          }
        },
        xaxis: {
          categories: ["Rash", "Sweats", "Chills", "Vomiting"],

          labels: {
            style: {
              fontSize: "16px",
              colors: [
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff"
              ]
            },
            formatter: function (val) {
              return Math.abs(Math.round(val)) + "%";
            }
          }
        }
      }
    };
  }

  render() {
    return (
      <div style={{ width: "100%", height: "500px" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={600}
          />
        </div>
      </div>
    );
  }
}

export default BarChartBack;
