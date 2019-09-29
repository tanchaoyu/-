// pages/myindex/myindex.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  getData: function(app_token, sort, page, url) {
    return new Promise(function(resolve, reject) {
      wx.request({
        method: "get",
        header: {
          "content-type": "application/x-www-form-urlencoded" // 默认值
        },
        url: app.globalData.baseUrl + app.globalData.apiUrl + url,

        data: {
          app_token: app_token,
          sort: sort,
          page: page
        },
        success: res => {
          console.log(res);

          resolve(res);
        }
      });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let res = this.getData(app.globalData.app_token, 1, 1, "/mine/getMyTalk");
    res.then(function(res) {
      console.log(res);
    });
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
  onShareAppMessage: function() {}
});
