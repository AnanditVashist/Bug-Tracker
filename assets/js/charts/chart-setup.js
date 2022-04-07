

        
        
        function createAnalyticsDoughnut(chartid, set_data) {
            var selectCanvas = document.getElementById(chartid).getContext("2d");
            var chart_data = [];
        
            for (var i = 0; i < set_data.datasets.length; i++) {
                chart_data.push({
                    backgroundColor: set_data.datasets[i].background,
                    borderWidth: 2,
                    borderColor: set_data.datasets[i].borderColor,
                    hoverBorderColor: set_data.datasets[i].borderColor,
                    data: set_data.datasets[i].data,
                });
            }
            var chart = new Chart(selectCanvas, {
                type: 'doughnut',
                data: {
                    labels: set_data.labels,
                    datasets: chart_data,
                },
                options: {
                    legend: {
                        display: (set_data.legend) ? set_data.legend : false,
                        labels: {
                            boxWidth: 12,
                            padding: 20,
                            fontColor: '#6783b8',
                        }
                    },
                    rotation: -1.5,
                    cutoutPercentage: 70,
                    maintainAspectRatio: false,
                    tooltips: {
                        enabled: true,
                        callbacks: {
                            title: function (tooltipItem, data) {
                                return data['labels'][tooltipItem[0]['index']];
                            },
                            label: function (tooltipItem, data) {
                                return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + set_data.dataUnit;
                            }
                        },
                        backgroundColor: '#fff',
                        borderColor: '#eff6ff',
                        borderWidth: 2,
                        titleFontSize: 13,
                        titleFontColor: '#6783b8',
                        titleMarginBottom: 6,
                        bodyFontColor: '#9eaecf',
                        bodyFontSize: 12,
                        bodySpacing: 4,
                        yPadding: 10,
                        xPadding: 10,
                        footerMarginTop: 0,
                        displayColors: false
                    },
                }
            });
            return chart;
        }
        
        function barChart(chartid, set_data) {
            var selectCanvas = document.getElementById(chartid).getContext("2d");
            var chart_data = [];
        
                for (var i = 0; i < set_data.datasets.length; i++) {
                    chart_data.push({
                        label: set_data.datasets[i].label,
                        data: set_data.datasets[i].data,
                        // Styles
                        backgroundColor: set_data.datasets[i].color,
                        borderWidth: 2,
                        borderColor: 'transparent',
                        hoverBorderColor: 'transparent',
                        borderSkipped: 'bottom',
                        barPercentage: .6,
                        categoryPercentage: .7
                    });
                }
                var chart = new Chart(selectCanvas, {
                    type: 'bar',
                    data: {
                        labels: set_data.labels,
                        datasets: chart_data,
                    },
                    options: {
                        legend: {
                            display: (set_data.legend) ? set_data.legend : false,
        
                            labels: {
                                boxWidth: 30,
                                padding: 20,
                                fontColor: '#6783b8',
                            }
                        },
                        maintainAspectRatio: false,
                        tooltips: {
                            enabled: true,
                            callbacks: {
                                title: function (tooltipItem, data) {
                                    return data.datasets[tooltipItem[0].datasetIndex].label;
                                },
                                label: function (tooltipItem, data) {
                                    return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + set_data.dataUnit;
                                }
                            },
                            backgroundColor: '#eff6ff',
                            titleFontSize: 13,
                            titleFontColor: '#6783b8',
                            titleMarginBottom: 6,
                            bodyFontColor: '#9eaecf',
                            bodyFontSize: 12,
                            bodySpacing: 4,
                            yPadding: 10,
                            xPadding: 10,
                            footerMarginTop: 0,
                            displayColors: false
                        },
                        scales: {
                            yAxes: [{
                                display: true,
                                stacked: (set_data.stacked) ? set_data.stacked : false,
                                position: "left",
                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 12,
                                    fontColor: '#9eaecf',
                                    padding: 5,
                                    stepSize: 1,
                                },
                                gridLines: {
                                    color: NioApp.hexRGB("#526484", .2),
                                    tickMarkLength: 0,
                                    zeroLineColor: NioApp.hexRGB("#526484", .2)
                                },
                                
        
                            }],
                            xAxes: [{
                                display: true,
                                stacked: (set_data.stacked) ? set_data.stacked : false,
                                ticks: {
                                    fontSize: 14,
                                    fontColor: '#364a63',
                                    source: 'auto',
                                    padding: 5,
                                },
                                gridLines: {
                                    color: "transparent",
                                    tickMarkLength: 10,
                                    zeroLineColor: 'transparent',
                                },
                                maxBarThickness: 30
                            }]
                        }
                    }
                });
            return chart;
        }
        
        function createMultipleBarChart(chartid, set_data) {
            var selectCanvas = document.getElementById(chartid).getContext("2d");
            var chart_data = [];
            for (var i = 0; i < set_data.datasets.length; i++) {
                chart_data.push({
                    label: set_data.datasets[i].label,
                    data: set_data.datasets[i].data,
                    // Styles
                    backgroundColor: set_data.datasets[i].color,
                    borderWidth: 2,
                    borderColor: 'transparent',
                    hoverBorderColor: 'transparent',
                    borderSkipped: 'bottom',
                    barPercentage: .8,
                    categoryPercentage: .6
                });
            }
        
            let chart = new Chart(selectCanvas, {
                type: 'bar',
                data: {
                    labels: set_data.labels,
                    datasets: chart_data,
                },
                options: {
                    legend: {
                        display: (set_data.legend) ? set_data.legend : false,
                        labels: {
                            boxWidth: 30,
                            padding: 20,
                            fontColor: '#6783b8',
                        }
                    },
                    maintainAspectRatio: false,
                    tooltips: {
                        enabled: true,
                        callbacks: {
                            title: function (tooltipItem, data) {
                                return data.datasets[tooltipItem[0].datasetIndex].label;
                            },
                            label: function (tooltipItem, data) {
                                return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + set_data.dataUnit;
                            }
                        },
                        backgroundColor: '#eff6ff',
                        titleFontSize: 13,
                        titleFontColor: '#6783b8',
                        titleMarginBottom: 6,
                        bodyFontColor: '#9eaecf',
                        bodyFontSize: 12,
                        bodySpacing: 4,
                        yPadding: 10,
                        xPadding: 10,
                        footerMarginTop: 0,
                        displayColors: false
                    },
                    scales: {
                        yAxes: [{
                            display: true,
                            stacked: (set_data.stacked) ? set_data.stacked : false,
                            position: "left",
                            ticks: {
                                beginAtZero: true,
                                fontSize: 9,
                                fontColor: '#9eaecf',
                                padding: 10,
                                callback: function (value, index, values) {
                                   return value;
                                },
                                stepSize: 1,
                            },
                            gridLines: {
                                color: NioApp.hexRGB("#526484", .2),
                                tickMarkLength: 0,
                                zeroLineColor: NioApp.hexRGB("#526484", .2)
                            },
        
                        }],
                        xAxes: [{
                            display: true,
                            stacked: (set_data.stacked) ? set_data.stacked : false,
                            ticks: {
                                fontSize: 9,
                                fontColor: '#9eaecf',
                                source: 'auto',
                                padding: 10,
                            },
                            gridLines: {
                                color: "transparent",
                                tickMarkLength: 0,
                                zeroLineColor: 'transparent',
                            },
                        }]
                    }
                }
            });
        
            return chart;
        }
        function generateColors(amount) {
            base_colors = ["#f98c45", "#9cabff", "#8feac5", "#6b79c8", "#79f1dc"]
            output_colors = []

            let forwards = true;
            let index = 0;

            while (output_colors.length < amount) {
                output_colors.push(base_colors[index])

                index = forwards ? index + 1 : index - 1;

                if (index == 0 || index == base_colors.length - 1) {
                    forwards = !forwards;
                }
            }

            return output_colors;
        }
        
        const ticketsOverviewDataJson={"newTicketTimeline":{"totalTickets":13,"timeline":[{"date":"2022-04-06T00:00:00+00:00","formattedDate":"06 Apr","ticketCount":0},{"date":"2022-04-05T00:00:00+00:00","formattedDate":"05 Apr","ticketCount":0},{"date":"2022-04-04T00:00:00+00:00","formattedDate":"04 Apr","ticketCount":0},{"date":"2022-04-03T00:00:00+00:00","formattedDate":"03 Apr","ticketCount":0},{"date":"2022-04-02T00:00:00+00:00","formattedDate":"02 Apr","ticketCount":0},{"date":"2022-04-01T00:00:00+00:00","formattedDate":"01 Apr","ticketCount":0},{"date":"2022-03-31T00:00:00+00:00","formattedDate":"31 Mar","ticketCount":0},{"date":"2022-03-30T00:00:00+00:00","formattedDate":"30 Mar","ticketCount":0},{"date":"2022-03-29T00:00:00+00:00","formattedDate":"29 Mar","ticketCount":0},{"date":"2022-03-28T00:00:00+00:00","formattedDate":"28 Mar","ticketCount":4},{"date":"2022-03-27T00:00:00+00:00","formattedDate":"27 Mar","ticketCount":2},{"date":"2022-03-26T00:00:00+00:00","formattedDate":"26 Mar","ticketCount":2},{"date":"2022-03-25T00:00:00+00:00","formattedDate":"25 Mar","ticketCount":3},{"date":"2022-03-24T00:00:00+00:00","formattedDate":"24 Mar","ticketCount":2},{"date":"2022-03-23T00:00:00+00:00","formattedDate":"23 Mar","ticketCount":0}]},"resolvedTicketTimeline":{"totalTickets":4,"timeline":[{"date":"2022-04-06T00:00:00+00:00","formattedDate":"06 Apr","ticketCount":0},{"date":"2022-04-05T00:00:00+00:00","formattedDate":"05 Apr","ticketCount":0},{"date":"2022-04-04T00:00:00+00:00","formattedDate":"04 Apr","ticketCount":0},{"date":"2022-04-03T00:00:00+00:00","formattedDate":"03 Apr","ticketCount":0},{"date":"2022-04-02T00:00:00+00:00","formattedDate":"02 Apr","ticketCount":0},{"date":"2022-04-01T00:00:00+00:00","formattedDate":"01 Apr","ticketCount":0},{"date":"2022-03-31T00:00:00+00:00","formattedDate":"31 Mar","ticketCount":0},{"date":"2022-03-30T00:00:00+00:00","formattedDate":"30 Mar","ticketCount":0},{"date":"2022-03-29T00:00:00+00:00","formattedDate":"29 Mar","ticketCount":2},{"date":"2022-03-28T00:00:00+00:00","formattedDate":"28 Mar","ticketCount":0},{"date":"2022-03-27T00:00:00+00:00","formattedDate":"27 Mar","ticketCount":0},{"date":"2022-03-26T00:00:00+00:00","formattedDate":"26 Mar","ticketCount":2},{"date":"2022-03-25T00:00:00+00:00","formattedDate":"25 Mar","ticketCount":0},{"date":"2022-03-24T00:00:00+00:00","formattedDate":"24 Mar","ticketCount":0},{"date":"2022-03-23T00:00:00+00:00","formattedDate":"23 Mar","ticketCount":0},{"date":"2022-03-22T00:00:00+00:00","formattedDate":"22 Mar","ticketCount":0}]}}
        
        const workloadDataJson={"fullNames":["Kevin Daniels","Joshua2 Peters","Kim Williams","Jason Walker"],"priorityMaps":[{"label":"Pending","color":"#8091a7","data":[0,0,0,0]},{"label":"Low","color":"#09c2de","data":[3,0,0,0]},{"label":"Moderate","color":"#ffa353","data":[2,0,0,0]},{"label":"High","color":"#f4bd0e","data":[4,0,0,0]},{"label":"Urgent","color":"#e85347","data":[1,0,0,0]}]}
        
        const ticketTypesDataJson=[{"type":"UI","count":9},{"type":"Backend","count":7},{"type":"Runtime","count":5}]
        
        const ticketPriorityDataJson=[{"type":"Pending","count":3},{"type":"Low","count":4},{"type":"Moderate","count":6},{"type":"High","count":6},{"type":"Urgent","count":2}]
        
        const ticketStatusDataJson=[{"type":"New","count":4},{"type":"Reviewed","count":1},{"type":"In Progress","count":5}]
        
        
        
        

        const workloadData={
                    colors: generateColors(workloadDataJson.priorityMaps.length),
                    labels: workloadDataJson.fullNames,
                    stacked: true,
                    dataUnit: 'Tickets',
                    datasets: workloadDataJson.priorityMaps.map(function (e, i) {
                        return {
                            label: e.label,
                            data: e.data,
                            color: e.color,
                        }
                    })
        }

            let endDate = ticketsOverviewDataJson.newTicketTimeline.timeline[ticketsOverviewDataJson.newTicketTimeline.timeline.length - 1].formattedDate;

            let labels = ticketsOverviewDataJson.newTicketTimeline.timeline.map(function (e) {
                return e.formattedDate;
            });

            let newTicketData = ticketsOverviewDataJson.newTicketTimeline.timeline.map(function (e) {
                return e.ticketCount;
            });

            let resolvedTicketData = ticketsOverviewDataJson.resolvedTicketTimeline.timeline.map(function (e) {
                return e.ticketCount;
            });

            const ticketsOverview = {
                labels: labels,
                dataUnit: 'Tickets',
                datasets: [{
                    label: "Resolved Tickets",
                    color: "#8feac5",
                    data: resolvedTicketData
                }, {
                    label: "New Tickets",
                    color: "#9cabff",
                    data: newTicketData
                }]
            }

        barChart("workloadStackedBarChart", workloadData);
        
        createMultipleBarChart("ticketsOverview", ticketsOverview)
        


        var ticketTypesData = {
            labels: ticketTypesDataJson.map(function (e) {
                return e.type
            }),
            dataUnit: 'Tickets',
            legend: false,
            datasets: [{
                borderColor: "#fff",
                background: generateColors(ticketTypesDataJson.length),
                data: ticketTypesDataJson.map(function (e) {
                    return e.count
                })
            }]
        };




        createAnalyticsDoughnut("TicketTypeDoughnut", ticketTypesData);


        var ticketStatusData = {
            labels: ticketTypesDataJson.map(function (e) {
                return e.type
            }),
            dataUnit: 'Tickets',
            legend: false,
            datasets: [{
                borderColor: "#fff",
                background: generateColors(ticketTypesDataJson.length),
                data: ticketTypesDataJson.map(function (e) {
                    return e.count
                })
            }]
        };
        
        createAnalyticsDoughnut("TicketStatusDoughnut", ticketStatusData);

        var ticketPriorityData = {
            labels: ticketPriorityDataJson.map(function (e) {
                return e.type
            }),
            dataUnit: 'Tickets',
            legend: false,
            datasets: [{
                borderColor: "#fff",
                background: generateColors(ticketPriorityDataJson.length),
                data: ticketPriorityDataJson.map(function (e) {
                    return e.count
                })
            }]
        };
        
        createAnalyticsDoughnut("TicketPriorityDoughnut", ticketPriorityData);
  