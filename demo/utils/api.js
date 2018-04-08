const apiURL = 'https://easy-mock.com/mock/5ac9d27a08baf056bb32c2ea';

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
}

module.exports = {
    getAboutMe
};
