import { mock } from '../../mock/card/mock';

const App = getApp();

Page({
    onShareAppMessage: function(res) {
        return {
            title: "这是一个乌鸦的巢",
            path: '/pages/index/index',
            success: function() {},
            fail: function() {}
        }
    },
    data: {
        cards: mock,
        windowWidth: App.systemInfo.windowWidth,
        windowHeight: App.systemInfo.windowHeight
    },
    onLoad: function() {},
    gotoDetail: function(e) {
        const ds = e.currentTarget.dataset;
        wx.navigateTo({
            url: ds.url
        });
    }
});