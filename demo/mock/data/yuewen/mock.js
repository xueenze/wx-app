export const mock = [{
    paragraph: {
        title: "业绩数据",
        subTitle: "业绩高增长",
        contents: ["1. 3月19日晚间，阅文集团发布截止于2017年12月31日的年度报告，2017全年公司营收40.95亿元，同比增长60%；经营利润5.1亿元，同比增长14.3倍；归属于股东的净利润5.56亿元，而去年同期为3668万元","2. 分业务看，公司营收的主要来源为在线阅读，占到公司总营收的83.6%，其中，公司自有平台产品营收18.7亿元，占比总营收45.8%；腾讯产品自营渠道营收10.8亿元，占比总营收26.4%；第三方平台占比11%。除了在线阅读外，版权运营与纸质图书分别贡献营收的8.9%和4.9%"]
    },
    option: {
        legend: {
            data: ['2016', '2017']
        },
        xAxis: {
            type : 'category',
            data : ['自有平台产品', '自营渠道', '第三方平台']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '2016',
                type: 'bar',
                data: [41.2, 26.1, 9.8]
            },
            {
                name: '2017',
                type: 'bar',
                data: [45.8, 26.4, 11.4]
            }
        ]
    }
},{
    paragraph: {
        title: "在线阅读收入数据",
        subTitle: "保持高速增长",
        contents: ["在线阅读收入同比增长73.3%至人民币34.21亿元"]
    },
    option: {
        title: {
            text: '在线阅读',
            left: 'center'
        },
        xAxis: {
            type: 'category',
            data: ['2015', '2016', '2017']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [9.7, 19.7, 34.2],
            type: 'line',
            smooth: true,
            label: {
                normal: {
                    show: true,
                    position: "top"
                }
            }
        }]
    }
},{
    paragraph: {
        title: "版权营收收入数据",
        subTitle: "保持高速增长",
        contents: ["版权运营业务收入同比增长48.0%至人民币3.66亿元"]
    },
    option: {
        title: {
            text: '版权营收',
            left: 'center'
        },
        xAxis: {
            type: 'category',
            data: ['2015', '2016', '2017']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [1.6, 2.4, 3.6],
            type: 'line',
            smooth: true,
            label: {
                normal: {
                    show: true,
                    position: "top"
                }
            }
        }]
    }
},{
    paragraph: {
        title: "原创内容",
        subTitle: "作品储量达到1010万部",
        contents: ["拓展新的文学体裁，推出了军事、体育、轻小说以及二次元等诸多新类别。", "增加了影视相关的电子书数量，例如《芳华》和中文版的《冰与火之歌》等"]
    },
    option: {
        series: [{
            label: {
                normal: {
                    fontSize: 14
                }
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: [0, '60%'],
            data: [{
                    value: 970,
                    name: '原创文学作品'
                }, {
                    value: 28,
                    name: '第三方平台'
                }, {
                    value: 14,
                    name: '电子书'
                }]
            }
        ]
    }
}
];