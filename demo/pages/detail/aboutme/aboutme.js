import { mock } from '../../../mock/aboutme/mock';

const App = getApp();

Page({
    data: {
        lifecycles: mock,
        headImageUrl: "/images/aboutme/time1.jpg",
        windowWidth: App.systemInfo.windowWidth
    },
    onLoad: function() {
        console.log("进入关于 乌鸦 页面");
    }
});