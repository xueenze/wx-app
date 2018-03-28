export const mock = [{
        paragraph: {
            title: "业绩数据",
            subTitle: "业绩高增长",
            contents: ["3月19日晚间，阅文集团发布截止于2017年12月31日的年度报告，2017全年公司营收40.95亿元，同比增长60%；经营利润5.1亿元，同比增长14.3倍；归属于股东的净利润5.56亿元，而去年同期为3668万元"]
        },
        option: {
            legend: {
                data: ['营业收入（亿元）', '盈利情况（亿元）']
            },
            xAxis: {
                type: 'category',
                data: ['2014', '2015', '2016', '2017']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                    name: '营业收入（亿元）',
                    type: 'bar',
                    data: [4.66, 16.06, 25.68, 40.95],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                },
                {
                    name: '盈利情况（亿元）',
                    type: 'bar',
                    data: [-0.21, -3.54, 0.30, 5.10],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }
            ]
        }
    },
    {
        paragraph: {
            title: "业绩数据",
            subTitle: "业绩高增长",
            contents: ["分业务看，公司营收的主要来源为在线阅读，占到公司总营收的83.6%，其中，公司自有平台产品营收18.7亿元，占比总营收45.8%；腾讯产品自营渠道营收10.8亿元，占比总营收26.4%；第三方平台占比11%。除了在线阅读外，版权运营与纸质图书分别贡献营收的8.9%和4.9%"]
        },
        option: {
            legend: {
                data: ['2016(%)', '2017(%)']
            },
            xAxis: {
                type: 'category',
                data: ['自有平台产品', '自营渠道', '第三方平台']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                    name: '2016(%)',
                    type: 'bar',
                    data: [41.2, 26.1, 9.8],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                },
                {
                    name: '2017(%)',
                    type: 'bar',
                    data: [45.8, 26.4, 11.4],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }
            ]
        }
    },
    {
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
    },
    {
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
    },
    {
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
            }]
        }
    },
    {
        paragraph: {
            title: "优势",
            subTitle: "背靠大树",
            contents: ["1. 资源和流量成为阅文集团市场竞争力的重要基础，那么背靠腾讯这棵大树，则让阅文集团获得持续发展的关键因素", "2. 背靠腾讯不只是表面听着有分量，更重要的是能在资源上实现对接，尤其是现阶段阅文集团正在围绕网络文学IP布局全产业链开发。", "3. 经过多年的发展，腾讯不仅积累了较大规模的用户和流量，并已将业务的触角延伸到诸多领域，包括影视、游戏等文娱产业，作为阅文集团的控股股东，腾讯也将会将相关资源与阅文集团打通、连接，推动阅文集团开发IP，且腾讯的业务板块还涵盖微信等社交业务、财付通等金融业务，这也能在流量等方面对后续开发IP提供相应的帮助。"]
        },
    },
    {
        paragraph: {
            title: "劣势",
            subTitle: "收入单一",
            contents: ["1. 据招股书显示，目前阅文集团的主要收入来源为在线阅读收入，2014-2016年该板块业务实现的收入分别为4.53亿元、9.71亿元和20亿元，这在阅文集团整体营收中分别占据97.2%、60.5%和77.1%的比例", "2. 过于依赖在线阅读不仅会让阅文集团面临更为激烈的市场竞争，也会影响业务的进一步拓展。与此同时，阅文集团也对此有所意识，并表示，倘若在线阅读收入减少，将对公司业务、财务状况、经营业绩以及前景造成重大不利影响", "3. 无论是在线阅读收入占比过高，还是版权运营收入比例不足10%，都代表阅文集团的业务模式和项目操作能力需进一步优化"]
        },
    }
];