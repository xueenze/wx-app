/**
 * 获取基础柱状图配置
 * @param {*} x 
 * @param {*} y 
 */
const getSimpleBarOption = (options) => {
    return {
        grid: {
            left: 20,
            right: 20,
            bottom: 15,
            top: 40,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: x
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: y,
            type: 'bar'
        }]
    };
};

/**
 * 获取基础折线图配置
 * @param {*} x 
 * @param {*} y 
 */
const getSimpleLineOption = (x, y) => {
    return {
        grid: {
            left: 20,
            right: 20,
            bottom: 15,
            top: 40,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: x
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: y,
            type: 'line'
        }]
    };
};

module.exports = {
    getSimpleBarOption: getSimpleBarOption,
    getSimpleLineOption: getSimpleLineOption
};