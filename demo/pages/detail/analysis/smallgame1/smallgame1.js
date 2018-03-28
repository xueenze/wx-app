import { mock } from '../../../../mock/smallgame/mock1';

Page({
    onShareAppMessage: function(res) {
        return {
            title: "小游戏【跳一跳】浅析（上）",
            path: '/pages/detail/analysis/smallgame1/smallgame1',
            success: function() {},
            fail: function() {}
        }
    },
    data: {
        title: {
            userImage: "/images/me.jpg",
            name: "小游戏【跳一跳】浅析（上）",
            addDate: "2017-12-30"

        },
        sections: mock
    }
});