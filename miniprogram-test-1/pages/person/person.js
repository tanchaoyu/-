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
    linkdate: [
      {
        image: "",
        text: "动态",
        url: "../myindex/myindex"
      },
      {
        image: "",
        text: "消息",
        url: "../myinfo/myinfo"
      },
      {
        image: "",
        text: "收藏",
        url: "../mycollect/mycollect"
      }
    ],
    linktwodata: [
      {
        text: "我的关注",
        url: "../myfocus/myfocus"
      },
      {
        text: "关注我的",
        url: "../focusmy/focusmy"
      },
      {
        text: "关于我们",
        url: "../aboutus/aboutus"
      },
      {
        text: "使用说明",
        url: "../intruduce/intruduce"
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

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
    console.log(url);
    wx.navigateTo({
      url: url
    });
  }
});
