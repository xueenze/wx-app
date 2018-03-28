import { mock } from '../../../../mock/smallgame/mock2';

Page({
    onShareAppMessage: function(res) {
        return {
            title: "小游戏【跳一跳】浅析（下）",
            path: '/pages/detail/analysis/smallgame2/smallgame2',
            success: function() {},
            fail: function() {}
        }
    },
    data: {
        title: {
            userImage: "/images/me.jpg",
            name: "小游戏【跳一跳】浅析（下）",
            addDate: "2017-12-31"

        },
        sections: mock
    }
});