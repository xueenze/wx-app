const App = getApp();
Page({
    data: {
        cards:[
            {
                id: 1,
                imageUrl: "../../images/card/card-demo.jpg"
            },
            {
                id: 2,
                imageUrl: "../../images/card/card-demo.jpg"
            },
            {
                id: 3,
                imageUrl: "../../images/card/card-demo.jpg"
            },
            {
                id: 4,
                imageUrl: "../../images/card/card-demo.jpg"
            },
        ],
        windowWidth: App.systemInfo.windowWidth,
        windowHeight: App.systemInfo.windowHeight
    },
    onLoad: function() {
    }
});