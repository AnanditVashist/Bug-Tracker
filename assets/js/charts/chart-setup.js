

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
// init chart



function createHorizontalBarChart(chartid, set_data) {
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
            barThickness: '8',
            categoryPercentage: 0.5,
            barPercentage: 1.0
        });
    }

    var chart = new Chart(selectCanvas, {
        type: 'horizontalBar',
        data: {
            labels: set_data.labels,
            datasets: chart_data
        },
        options: {
            legend: {
                display: set_data.legend ? set_data.legend : false,
                labels: {
                    boxWidth: 30,
                    padding: 20,
                    fontColor: '#6783b8'
                }
            },
            maintainAspectRatio: false,
            tooltips: {
                enabled: true,
                callbacks: {
                    title: function title(tooltipItem, data) {
                        return data['labels'][tooltipItem[0]['index']];
                    },
                    label: function label(tooltipItem, data) {
                        return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + data.datasets[tooltipItem.datasetIndex]['label'];
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
                    display: false,
                    stacked: set_data.stacked ? set_data.stacked : false,
                    ticks: {
                        beginAtZero: true,
                        padding: 0
                    },
                    gridLines: {
                        color: NioApp.hexRGB("#526484", .2),
                        tickMarkLength: 0,
                        zeroLineColor: NioApp.hexRGB("#526484", .2)
                    }
                }],
                xAxes: [{
                    display: false,
                    stacked: set_data.stacked ? set_data.stacked : false,
                    ticks: {
                        fontSize: 9,
                        fontColor: '#9eaecf',
                        source: 'auto',
                        padding: 0,
                    },
                    gridLines: {
                        color: "transparent",
                        tickMarkLength: 0,
                        zeroLineColor: 'transparent'
                    }
                }]
            }
        }
    });
    return chart;
} // init chart

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



function ticketAnalyticsDoughnut(chartid, set_data) {
    var selectCanvas = document.getElementById(chartid).getContext("2d");
    var chart_data = [];

    for (var i = 0; i < set_data.datasets.length; i++) {
        chart_data.push({
            backgroundColor: set_data.datasets[i].background,
            borderWidth: 2,
            borderColor: set_data.datasets[i].borderColor,
            hoverBorderColor: set_data.datasets[i].borderColor,
            data: set_data.datasets[i].data,
            timeLabel: set_data.datasets[i].timeLabel,
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
                        //return set_data.timeLabel;
                        //return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']].timeLabel + ' ' + set_data.dataUnit;
                        return data.datasets[tooltipItem.datasetIndex]['timeLabel'][tooltipItem['index']];

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
function polarAreaChart(chartid, set_data) {
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
        type: 'polarArea',
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
        }
    });
    return chart;
}



function pieChart(chartid, set_data) {
    var selectCanvas = document.getElementById(chartid).getContext("2d");
    var chart_data = [];

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
        type: 'pie',
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
            rotation: - .2,
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


//function barChart(chartid, set_data) {
//    var selectCanvas = document.getElementById(chartid).getContext("2d");
//    var chart_data = [];
//        var selectCanvas = document.getElementById(_self_id).getContext("2d");
//        var chart_data = [];
//        for (var i = 0; i < set_data.datasets.length; i++) {
//            chart_data.push({
//                label: set_data.datasets[i].label,
//                data: set_data.datasets[i].data,
//                // Styles
//                backgroundColor: set_data.datasets[i].color,
//                borderWidth: 2,
//                borderColor: 'transparent',
//                hoverBorderColor: 'transparent',
//                borderSkipped: 'bottom',
//                barPercentage: .6,
//                categoryPercentage: .7
//            });
//        }
//        var chart = new Chart(selectCanvas, {
//            type: 'bar',
//            data: {
//                labels: set_data.labels,
//                datasets: chart_data,
//            },
//            options: {
//                legend: {
//                    display: (set_data.legend) ? set_data.legend : false,
//                    labels: {
//                        boxWidth: 30,
//                        padding: 20,
//                        fontColor: '#6783b8',
//                    }
//                },
//                maintainAspectRatio: false,
//                tooltips: {
//                    enabled: true,
//                    callbacks: {
//                        title: function (tooltipItem, data) {
//                            return data.datasets[tooltipItem[0].datasetIndex].label;
//                        },
//                        label: function (tooltipItem, data) {
//                            return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + set_data.dataUnit;
//                        }
//                    },
//                    backgroundColor: '#eff6ff',
//                    titleFontSize: 13,
//                    titleFontColor: '#6783b8',
//                    titleMarginBottom: 6,
//                    bodyFontColor: '#9eaecf',
//                    bodyFontSize: 12,
//                    bodySpacing: 4,
//                    yPadding: 10,
//                    xPadding: 10,
//                    footerMarginTop: 0,
//                    displayColors: false
//                },
//                scales: {
//                    yAxes: [{
//                        display: true,
//                        stacked: (set_data.stacked) ? set_data.stacked : false,
//                        ticks: {
//                            beginAtZero: true,
//                            fontSize: 12,
//                            fontColor: '#9eaecf',
//                            padding: 5,
//                        },
//                        gridLines: {
//                            color: NioApp.hexRGB("#526484", .2),
//                            tickMarkLength: 0,
//                            zeroLineColor: NioApp.hexRGB("#526484", .2)
//                        },

//                    }],
//                    xAxes: [{
//                        display: true,
//                        stacked: (set_data.stacked) ? set_data.stacked : false,
//                        ticks: {
//                            fontSize: 12,
//                            fontColor: '#9eaecf',
//                            source: 'auto',
//                            padding: 5,
//                        },
//                        gridLines: {
//                            color: "transparent",
//                            tickMarkLength: 10,
//                            zeroLineColor: 'transparent',
//                        },
//                    }]
//                }
//            }
//        });
//    return chart;

  