// pages/show/show.js
import tool from "../../static/js/tool.js";
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: "说点什么",
    focus: false,
    showsummit: false,
    showbutton: true,
    secondComment: false,
    comment: "",
    showdata: {
      etext: "",
      eimg: "",
      talk_id: "",
      talk_type: "",
      user_id: "",
      push_time: "",
      user: {
        userlogo: "",
        username: ""
      }
    },
    commentdata: [
      {
        user: {
          username: "Zhu Liting",
          userlogo: "../../image/ting2.png"
        },
        targetuser: {
          username: "Zhu Liting",
          userlogo: "./../image/ting2.png"
        },
        time: "2019.7.31",
        text: "哈哈哈哈哈哈哈哈哈哈哈哈",
        reply: false
      },
      {
        user: {
          username: "Zhu Liting",
          userlogo: "../../image/ting2.png"
        },
        targetuser: {
          username: "Zhu Liting",
          userlogo: "./../image/ting2.png"
        },
        time: "123",
        text: "456",
        reply: false
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  opensecondComment: function() {
    this.setData({
      secondComment: true
    });
  },
  commentchange: function(obj) {
    let data = new Object({
      user: {
        username: obj.user.nickName,
        userlogo: obj.user.avatarUrl
      },
      talk_type: this.data.showdata.talk_type,
      talk_id: this.data.showdata.talk_id,
      time: obj.push_time,
      user_id: obj.user.user_id,
      comment_id: obj.comment_id,
      text: obj.content,
      reply: false
    });
    return data;
  },
  buttontap: function() {
    this.setData({
      showsummit: true,
      showbutton: false,
      focus: true
    });
  },
  inputending: function(e) {
    console.log(e.detail);
    setTimeout(() => {
      this.setData({
        showsummit: false,
        showbutton: true,
        focus: false,
        comment: e.detail.value
      });
    }, 1000);
  },
  summittap: function() {
    console.log(1);
    console.log(this.data.comment);

    let that = this;
    if (this.data.secondComment) {
    } else {
      let send = tool.send(
        app.globalData.app_token,
        that.data.showdata.talk_type,
        that.data.showdata.talk_id,
        that.data.comment,
        "/comment"
      );
      send.then(function(res) {
        console.log(res);
      });
    }
  },
  onLoad: function(options) {
    console.log(options);
    let that = this;
    let showdata = JSON.parse(options.value);
    console.log(showdata.eimg);
    this.setData({
      showdata: showdata
    });
    let comments = tool.getcomment(
      this.data.showdata.talk_type,
      this.data.showdata.talk_id,
      "/comment"
    );
    comments.then(function(res) {
      console.log(res);
      let list = res.data;
      for (let item of list) {
        let obj = that.commentchange(item);
        that.data.commentdata.push(obj);
      }
      that.setData({
        commentdata: that.data.commentdata
      });
      console.log(that.data.commentdata);
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
