import * as echarts from '../../../../lib/ec-canvas/echarts';

import { mock } from '../../../../mock/data/yuewen/mock';

Page({
    data: {
      title: {
            userImage: "/images/me.jpg",
            name: "【王者荣耀】现象级手游 浅析",
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
            ecLine: {
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
            ecPie: {
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
        }
    },
    onLoad: function() {
        console.log("进入阅文 2017 财报页面");
    },
    onReady: function() {}
});