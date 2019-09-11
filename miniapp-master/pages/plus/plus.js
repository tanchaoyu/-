const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: "Hello World",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    array: ['一吐为快', '我的树洞', '我的悬赏', '表白Ta', '海底捞', '代取快递', '外卖上楼', '代买零食','其他可代'],
    objectArray: [
      {
        id: 0,
        name: '一吐为快'
      },
      {
        id: 1,
        name: '我的树洞'
      },
      {
        id: 2,
        name: '我的悬赏'
      },
      {
        id: 3,
        name: '表白Ta'
      },
      {
        id: 4,
        name: '海底捞'
      },
      {
        id: 5,
        name: '代取快递'
      },
      {
        id: 6,
        name: '外卖上楼'
      },
      {
        id: 3,
        name: '代买零食'
      },
      {
        id: 7,
        name: '其他可代'
      }
    ],
    index: 0,
    picturedate: [{
        image: "../../image/shadiao1.png",
        id: 0
      },
      {
        image: "../../image/shadiao2.png",
        id: 1
      },
      {
        image: "../../image/shadiao3.png",
        id: 2
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
  linkchange: function(e) {
    let url = e.currentTarget.dataset.url;
    let sign;
    console.log(e.currentTarget);

    console.log(url);
    wx.navigateTo({
      url: url
    });
  },
  // 选择
  select: function(e) {
    console.log(e.detail)
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  // 内容操作
  handleContentInput(event) {
    let textareaValue = event.detail.value;
    let contentCount = textareaValue.length;
    if (contentCount <= 225) {
      this.setData({
        contentCount: contentCount,
        content: textareaValue
      })
    }
  },
  switchChange: function(e) {
    console.log('switch 发生 change 事件，携带值为', e.detail.value)
  }

})