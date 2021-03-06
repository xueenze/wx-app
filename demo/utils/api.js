import { config } from "../config";

const apiURL = config.pro_api_url_prefix;

const wxRequest = (params, url) => {
    wx.request({
        url,
        method: params.method || 'GET',
        data: params.data || {},
        header: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        success(res) {
            if (params.success) {
                params.success(res);
            }
        },
        fail(res) {
            if (params.fail) {
                params.fail(res);
            }
        },
        complete(res) {
            if (params.complete) {
                params.complete(res);
            }
        },
    });
};

// 获取关于我的数据
const getAboutMe = (params) => {
    wxRequest(params, `${apiURL}/aboutme`);
};

const getAnalysisDataOperation = (params) => {
    wxRequest(params, `${apiURL}/ayalysis/dataoperation`);
};

const getIndex = (params) => {
    wxRequest(params, `${apiURL}/index`);
};

module.exports = {
    getAboutMe,
    getAnalysisDataOperation,
    getIndex
};