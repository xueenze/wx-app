import api from '../../../utils/api';

const App = getApp();

Page({
    onShareAppMessage: function(res) {
        return {
            title: "这是胖乌鸦巢里的胖乌鸦",
            path: '/pages/detail/aboutme/aboutme',
            success: function() {},
            fail: function() {}
        }
    },
    data: {
        lifecycles: [],
        headImageUrl: "/images/aboutme/head.jpg",
        windowWidth: App.systemInfo.windowWidth
    },
    onLoad: function() {
        this.initData();
    },
    // 初始化页面数据
    initData() {
        wx.showLoading();
        const self = this;
        api.getAboutMe({
            success: (res) => {
                if (res.data.code == 0) {
                    self.setData({
                        lifecycles: res.data.data
                    });
                }
            },
            complete: (res) => {
                wx.hideLoading();
            }
        });
    }
});