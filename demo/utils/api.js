const apiURL = 'https://easy-mock.com/mock/5ab8ff90d2d0cf46a85b4f42';

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

const getExampleData = (params) => {
  wxRequest(params, `${apiURL}/example`);
};


module.exports = {
  getExampleData
};
