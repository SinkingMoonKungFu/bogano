import React from 'react';

import Chart from 'react-apexcharts'

export class EthicsPyramidChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                name: "",
                data: [990, 1100, 1380],
                },
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    toolbar: {
                        show: false
                    },
                    events: {
                        dataPointSelection: (event, chartContext, config) => {
                            let el;
                            switch (config.dataPointIndex) {
                                case 0:
                                    el = document.getElementsByName('creed-of-the-sinking-moon')[0];
                                    break;
                                case 1:
                                    el = document.getElementsByName('seven-precepts-of-wu-chi-kung-fu')[0];
                                    break;
                                case 2:
                                    el = document.getElementsByName('four-tenets-of-wu-chi-kung-fu')[0];
                                    break;
                            }

                            if (el) {
                                el.scrollIntoView({
                                    behavior: 'smooth', // smooth scroll
                                    block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
                                });
                            }
                        },
                    }
                },
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                        horizontal: true,
                        distributed: true,
                        barHeight: '80%',
                        isFunnel: true,
                    },
                },
                colors: [
                    '#FCD181',
                    '#f1b084',
                    '#E79087',
                ],
                dataLabels: {
                    enabled: true,
                    formatter: function (val, opt) {
                        return opt.w.globals.labels[opt.dataPointIndex]
                    },
                    dropShadow: {
                        enabled: true,
                    },
                    style: {
                        colors: ['#000000', '#000000', '#000000']
                    }
                },
                xaxis: {
                    categories: ['Creed of the Sinking Moon', 'Seven Precepts of Wu Chi Kung Fu', 'Four Tenets of Wu Chi Kung Fu'],
                },
                legend: {
                    show: false
                },
                tooltip: {
                    enabled: false
                }

            },
        };
    }



    render() {
        return (
        <div>
            <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
        );
    }
}