import React from "react";
import Chart from "react-apexcharts";

class BarChartAdj extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Under 18",
          data: [95, 35, 52, 17]
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
        colors: ["#EFC52D", "#E65A5F"],
        chart: {
          type: "bar",
          height: 800,
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
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top"
            }
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -10,
          style: {
            fontSize: "16px",
            colors: ["#fff"]
          },
          formatter: function (val) {
            return Math.abs(Math.round(val)) + "%";
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#3c527b"]
        },
        tooltip: {
          shared: true,
          intersect: false,
          x: {
            show: true
          },
          y: {
            show: true,
            formatter: function (val) {
              return Math.abs(Math.round(val)) + "%";
            }
          }
        },
        xaxis: {
          categories: ["Rash", "Sweats", "Chills", "Vomiting"],
          labels: {
            minWidth: 600,
            style: {
              fontSize: "16px",
              colors: ["#fff", "#fff"]
            },
            formatter: function (val) {
              return Math.abs(Math.round(val)) + "%";
            }
          }
        },
        yaxis: {
          labels: {
            minWidth: 600,
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
                "#fff",
                "#fff"
              ]
            }
          }
        }
      }
    };
  }

  render() {
    return (
      <div style={{ width: "100%", height: "600px" }}>
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

export default BarChartAdj;
