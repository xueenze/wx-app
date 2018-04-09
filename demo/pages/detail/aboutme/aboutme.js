import api from "../../../utils/api";
import { config } from "../../../config";

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
        assetsPrefix: config.env === "local" ? config.dev_assets_url_prefix : config.pro_assets_url_prefix,
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
                    res.data.data.forEach(item => {
                        item.imgUrl = self.data.assetsPrefix + item.imgUrl;
                    });
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