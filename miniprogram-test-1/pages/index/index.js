//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    currentIndex: 0,
    pagedate: [{
        image: "",
        text: "民大咨询处",
        id: 0,
        url: "../scuecthings/scuecthings"
      },
      {
        image: "",
        text: "告白你我TA",
        id: 1,
        url: "../express/express"
      },
      {
        image: "",
        text: "沙雕一日笑",
        id: 2,
        url: "../shadiao/shadiao"
      },
      {
        image: "",
        text: "情绪小树洞",
        id: 3,
        url: "../emotion/emotion"
      }
    ],
    shadiaoswdate: [{
        image: "../../image/shadiao1.png",
        comment: "xxxxxxxxxxxx",

      },
      {
        image: "../../image/shadiao2.png",
        comment: "xxxxxxxxxxxx",

      },
      {
        image: "../../image/shadiao3.png",
        comment: "xxxxxxxxxxxx",

      },
      {
        image: "../../image/shadiao4.png",
        comment: "xxxxxxxxxxxx",

      },
      {
        image: "../../image/shadiao5.png",
        comment: "xxxxxxxxxxxx",

      }
    ]
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  searchtap: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  logotap: function (e) {
    let url = e.currentTarget.dataset.url;
    console.log(url);
    wx.navigateTo({
      url: url
    })
  },
  imgchange: function (e) {

    this.setData({
      currentIndex: e.detail.current,
    })

    let shadiaoarr = this.selectAllComponents(".swipercp");
    let point = 0;
    for (let i of shadiaoarr) {
      //i.data.init = this.data.currentIndex;
      //i.data.index = point;
      i.setData({
        init: this.data.currentIndex,
        index: point
      })
      point++;
      console.log(i.data.init);
      console.log(i.data.index);
    }

  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    let shadiaoarr = this.selectAllComponents(".swipercp");
    let point = 0;
    for (let i of shadiaoarr) {
      i.setData({
        index: point
      })
      point++;
    }


  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})