// pages/express/express.js
import tool from "../../static/js/tool.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    expressdata: [
      {
        eimg: "../../image/ting.png",
        etext: "A beautiful girl called yuting",
        user: {
          userlogo: "../../image/ting.png",
          username: "Zhou Yuting"
        }
      },
      {
        eimg: "../../image/ting.png",
        etext: "A beautiful girl called yuting",
        user: {
          userlogo: "../../image/ting.png",
          username: "Zhou Yuting"
        }
      }
    ],
    animation: {}
  },
  position: {
    startx: 0,
    starty: 0,
    nowx: 0,
    nowy: 0,
    transx: 0,
    transy: 0
  },

  touchstart: function(e) {
    let x = e.touches[0].pageX;
    let y = e.touches[0].pageY;
    this.position.startx = x;
    this.position.starty = y;
  },
  touchmove: tool.throttle(function(e) {
    //节流 防抖
    console.log(e);
    let that = this;
    console.log(that);
    let transx;
    let transy;
    this.position.nowx = e[0].touches[0].pageX;
    this.position.nowy = e[0].touches[0].pageY;
    transx = this.position.nowx - this.position.startx;
    transy = this.position.nowy - this.position.starty;
    this.position.transx = transx;
    this.position.transy = transy;

    let move = wx.createAnimation({
      duration: 0
    });
    this.move = move;
    move.translateX(+this.position.transx);
    move.translateY(+this.position.transy).step();
    this.setData({
      animation: this.move.export()
    });
    console.log(move);
    console.log(this.data.animation);
  }, 100),
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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
