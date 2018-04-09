import api from '../../utils/api';

const App = getApp();

Page({
    onShareAppMessage: function(res) {
        return {
            title: "这是一个胖乌鸦的巢",
            path: '/pages/index/index',
            success: function() {},
            fail: function() {}
        }
    },
    data: {
        cards: [],
        windowWidth: App.systemInfo.windowWidth,
        windowHeight: App.systemInfo.windowHeight
    },
    onLoad() {
        this.initData();
    },
    // 初始化页面数据
    initData() {
        wx.showLoading();
        const self = this;
        api.getIndex({
            success: (res) => {
                if (res.data.code == 0) {
                    self.setData({
                        cards: res.data.data
                    });
                }
            },
            complete: (res) => {
                wx.hideLoading();
            }
        });
    },
    gotoDetail: function(e) {
        const ds = e.currentTarget.dataset;
        wx.navigateTo({
            url: ds.url
        });
    }
});