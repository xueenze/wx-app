import { mock } from '../../mock/card/mock';

const App = getApp();

Page({
    data: {
        cards: mock,
        windowWidth: App.systemInfo.windowWidth,
        windowHeight: App.systemInfo.windowHeight
    },
    onLoad: function() {}
});