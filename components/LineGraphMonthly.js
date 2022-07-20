import React from 'react';
import '../src/styles.css';
import Chart from 'react-apexcharts';

class LineGraphMonthly extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seriesDeath: [
        {
          name: 'World',
          data: [0, 0, 0, 0, 0, 0, 0]
        },
        {
          name: 'US',
          data: [0, 0, 0, 0, 0, 0, 0]
        },
        {
          name: 'UK',
          data: [0, 0, 0, 0, 0, 0, 0]
        },
        {
          name: 'CANADA',
          data: [0, 0, 0, 0, 0, 0, 0]
        }
      ],

      seriesDay: [
        {
          name: 'World',
          data: [75, 67, 85, 110, 115, 165, 210]
        },
        {
          name: 'US',
          data: [3, 0, 4, 7, 9, 16, 29]
        },
        {
          name: 'UK',
          data: [24, 8, 13, 23, 68, 98, 115]
        },
        {
          name: 'CANADA',
          data: [8, 5, 20, 15, 21, 25, 41]
        }
      ],

      seriesWeek: [
        {
          name: 'World',
          data: [80, 95, 185, 195, 270, 389, 827]
        },
        {
          name: 'US',
          data: [0, 0, 6, 10, 27, 30, 68]
        },
        {
          name: 'UK',
          data: [10, 35, 25, 49, 86, 180, 349]
        },
        {
          name: 'CANADA',
          data: [0, 1, 2, 8, 9, 55, 135]
        }
      ],

      seriesMonth: [
        {
          name: 'World',
          data: [0, 0, 12, 25, 95, 890, 1681]
        },
        {
          name: 'US',
          data: [0, 0, 0, 0, 0, 6, 135]
        },
        {
          name: 'UK',
          data: [0, 0, 0, 2, 17, 110, 664]
        },
        {
          name: 'CANADA',
          data: [0, 0, 0, 0, 0, 3, 207]
        }
      ],
      options: {
        legend: {
          show: true,
          fontSize: '20px',
          labels: {
            colors: ['#EFC52D', '#06CCEE', '#34B755', '#E65A5F'],
            useSeriesColors: true
          },
          markers: {
            width: 20,
            height: 20
          },
          itemMargin: {
            horizontal: 10,
            vertical: 0
          }
        },
        chart: {
          type: 'line',
          height: 600,
          toolbar: {
            show: false
          }
        },
        markers: {
          size: 4
        },
        colors: ['#EFC52D', '#06CCEE', '#34B755', '#E65A5F'],
        stroke: {
          width: 4,
          colors: ['#EFC52D', '#06CCEE', '#34B755', '#E65A5F']
        },
        grid: {
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return Math.abs(val);
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              fontSize: '16px',
              colors: [
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff'
              ]
            }
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          labels: {
            style: {
              fontSize: '16px',
              colors: [
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff'
              ]
            }
          }
        }
      }
    };
  }

  render() {
    return (
      <div style={{ width: '100%', height: '500px' }}>
        <div style={{ width: '100%', height: '100%' }}>
          <Chart
            options={this.state.options}
            series={this.state.seriesMonth}
            type="line"
            height={600}
          />
        </div>
      </div>
    );
  }
}

export default LineGraphMonthly;
