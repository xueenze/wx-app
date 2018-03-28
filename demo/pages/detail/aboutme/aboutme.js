import { mock } from '../../../mock/aboutme/mock';

const App = getApp();

Page({
    onShareAppMessage: function(res) {
        return {
            title: "这是乌鸦巢里的胖乌鸦",
            path: '/pages/detail/aboutme/aboutme',
            success: function() {},
            fail: function() {}
        }
    },
    data: {
        lifecycles: mock,
        headImageUrl: "/images/aboutme/head.jpg",
        windowWidth: App.systemInfo.windowWidth
    },
    onLoad: function() {
        console.log("进入关于 关于我 页面");
    }
});