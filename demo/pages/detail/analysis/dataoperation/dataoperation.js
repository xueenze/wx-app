import { mock } from '../../../../mock/dataoperation/mock';

Page({
    data: {
        title: {
            userImage: "/images/me.jpg",
            name: "【数据可视化】整理",
            addDate: "2018-03-01"

        },
        paragraphwithimage: {
            imageUrl: "/images/dataoperation/head.gif",
            content: "我相信，数据是所有的创意以及问题解释的来源，一份合适的报表能够很好的反馈一种现象，它为了满足用户对数据的价值期望，利用数据，借助可视化工具，还原和探索数据隐藏价值，描述数据世界。"
        },
        sections: mock,
    }
});