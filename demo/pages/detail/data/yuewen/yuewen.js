import * as echarts from '../../../../lib/ec-canvas/echarts';

import { mock } from '../../../../mock/data/yuewen/mock';

Page({
    onShareAppMessage: function(res) {
        return {
            title: "【阅文集团】2017 年度财报",
            path: '/pages/detail/data/yuewen/yuewen',
            success: function() {},
            fail: function() {}
        }
    },
    data: {
        title: {
            userImage: "/images/me.jpg",
            name: "【阅文集团】2017 年度财报",
            addDate: "2018-01-03"

        },
        section1: {
            paragraph: mock[0].paragraph,
            ecBar: {
                onInit: function(canvas, width, height) {
                    const chart = echarts.init(canvas, null, {
                        width: width,
                        height: height
                    });
                    canvas.setChart(chart);
                    this.chart = chart;
                    chart.setOption(mock[0].option);

                    return chart;
                }
            },
        },
        section2: {
            paragraph: mock[1].paragraph,
            ecBar: {
                onInit: function(canvas, width, height) {
                    const chart = echarts.init(canvas, null, {
                        width: width,
                        height: height
                    });
                    canvas.setChart(chart);
                    this.chart = chart;
                    chart.setOption(mock[1].option);

                    return chart;
                }
            },
        },
        section3: {
            paragraph: mock[2].paragraph,
            ecLine: {
                onInit: function(canvas, width, height) {
                    const chart = echarts.init(canvas, null, {
                        width: width,
                        height: height
                    });
                    canvas.setChart(chart);
                    this.chart = chart;
                    chart.setOption(mock[2].option);

                    return chart;
                }
            },
        },
        section4: {
            paragraph: mock[3].paragraph,
            ecLine: {
                onInit: function(canvas, width, height) {
                    const chart = echarts.init(canvas, null, {
                        width: width,
                        height: height
                    });
                    canvas.setChart(chart);
                    this.chart = chart;
                    chart.setOption(mock[3].option);

                    return chart;
                }
            },
        },
        section5: {
            paragraph: mock[4].paragraph,
            ecPie: {
                onInit: function(canvas, width, height) {
                    const chart = echarts.init(canvas, null, {
                        width: width,
                        height: height
                    });
                    canvas.setChart(chart);
                    this.chart = chart;
                    chart.setOption(mock[4].option);

                    return chart;
                }
            },
        },
        section6: {
            paragraph: mock[5].paragraph,
        },
        section7: {
            paragraph: mock[6].paragraph,
        }
    },
    onLoad: function() {
        console.log("进入阅文 2017 财报页面");
    },
    onReady: function() {}
});