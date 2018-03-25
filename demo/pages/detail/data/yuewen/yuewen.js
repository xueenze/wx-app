import * as echarts from '../../../../lib/ec-canvas/echarts';

import { mock } from '../../../../mock/data/yuewen/mock';

import { getSimpleBarOption, getSimpleLineOption } from '../../../../utils/chart';

Page({
    data: {
        section1: {
            paragraph: mock[0].paragraph,
            ecBar: {
                onInit: function(canvas, width, height) {
                    const barChart = echarts.init(canvas, null, {
                        width: width,
                        height: height
                    });
                    canvas.setChart(barChart);

                    // 将 barChart 绑定到 this，以供其他函数访问
                    this.barChart = barChart;
                    barChart.setOption(getSimpleBarOption(mock[0].data.x, mock[0].data.y));

                    return barChart;
                }
            },
        },
        section2: {
            paragraph: mock[1].paragraph,
            ecLine: {
                onInit: function(canvas, width, height) {
                    const lineChart = echarts.init(canvas, null, {
                        width: width,
                        height: height
                    });
                    canvas.setChart(lineChart);

                    this.lineChart = lineChart;
                    lineChart.setOption(getSimpleLineOption(mock[1].data.x, mock[1].data.y));

                    return lineChart;
                }
            }
        }
    },
    onLoad: function() {
        console.log("进入阅文 2017 财报页面");
    },
    onReady: function() {}
});