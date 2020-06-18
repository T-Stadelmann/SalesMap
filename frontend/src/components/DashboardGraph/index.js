import {DashboardGraph} from '../../styles/dashboard';
import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class ApexChart extends Component {
          constructor(props) {
              super(props);

              this.state = {
                  options: {
                      chart: {
                          id: 'Invoices'
                      },
                      title: {
                          text: "Average Invoice",
                          align: "center",
                          style: {
                              color: '#212c56',
                              fontSize: '30px',
                          }
                      },
                      fill: {
                           colors: ['#9abfe2']
                        },
                      style: {
                          width: '10px',
                        },

                      plotOptions: {
                          dataLabels: {
                              enabled: true,
                              position: 'top'
                          }
                      },
                      legend: {
                          show: true,
                          position: 'top',
                          horizontalAlign: 'center',
                          label:{
                              color: 'black'
                          }
                      },
                      xaxis: {
                          categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                          title: {
                              text: "Year-Months",
                              style: {
                                  fontSize: '30px',
                                  color: '#212c56',
                                  fontWeight: 'bold'
                              }
                          },

                      },
                      yaxis: {
                          categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
                          title: {
                              text: "Sales Volume in CHF",
                              style: {
                                  fontSize: '30px',
                                  color: '#212c56',
                                  fontWeight: 'bold'
                              }
                          },

                      }
                  },

                  series: [{
                      name: 'Invoice-CHF',
                      data: [5000, 10000, 20000, 8000, 2000, 6000, 7000, 2000],

                    }]
             }
          }
    render() {
         return (
              <DashboardGraph>
                <Chart options={this.state.options} series={this.state.series} type="bar" width={800} height={420} />
                {/* <Chart options={this.state.options} series={this.state.series} type="bar" width={'180%'} height={'100%'} style={{'backgroundColor': 'rgba(255,255,255,0.8)','padding':'10px','borderRadius':'20px'}}/> */}
              </DashboardGraph>
            )
          }
}
export default ApexChart;