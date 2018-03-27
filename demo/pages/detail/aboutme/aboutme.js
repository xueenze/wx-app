import { mock } from '../../../mock/aboutme/mock';

const App = getApp();

Page({
    data: {
        lifecycles: mock,
        headImageUrl: "/images/aboutme/head.jpg",
        windowWidth: App.systemInfo.windowWidth
    },
    onLoad: function() {
        console.log("进入关于 关于我 页面");
    }
});