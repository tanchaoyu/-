// pages/scuecthings/scuecthings.js

import tool from "../../static/js/tool.js";
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    thingsdata: [
      {
        eimg: false,
        etext: "A beautiful girl called yuting",
        user: {
          userlogo: "../../image/ting.png",
          username: "Zhou Yuting"
        }
      },
      {
        eimg: false,
        etext: "A beautiful girl called yuting",
        user: {
          userlogo: "../../image/ting.png",
          username: "Zhou Yuting"
        }
      },
      {
        eimg: false,
        etext: "A beautiful girl called yuting",
        user: {
          userlogo: "../../image/ting.png",
          username: "Zhou Yuting"
        }
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    let res = tool.getData("xuanShang", 1, 1, "/talk/list");

    res.then(function(res) {
      console.log(res);
      let list = res.data.list;
      console.log(list);
      for (let item of list) {
        let data = new Object({
          eimg: false,
          etext: item.content,
          user: {
            username: item.user.nickName,
            userlogo: item.user.avatarUrl
          },
          push_time: item.push_time,
          user_id: item.user.user_id,
          talk_id: item.talk_id
        });
        console.log(data);
        that.data.thingsdata.push(data);
        that.setData({
          thingsdata: that.data.thingsdata
        });
      }
      console.log(that.data.thingsdata);
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
  onShareAppMessage: function() {},
  toshow: function(event) {
    console.log(event.currentTarget.dataset.set);
    let json = JSON.stringify(event.currentTarget.dataset.set);
    wx.navigateTo({
      url: "../show/show?value=" + json
    });
  }
});
