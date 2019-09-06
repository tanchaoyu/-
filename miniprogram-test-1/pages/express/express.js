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
        eimg: "../../image/ting2.png",
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
      },
      {
        eimg: "../../image/ting2.png",
        etext: "A beautiful girl called yuting",
        user: {
          userlogo: "../../image/ting.png",
          username: "Zhou Yuting"
        }
      }
    ],
    haidilaodata: [
      {
        eimg: "../../image/ting2.png",
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
      },
      {
        eimg: "../../image/ting2.png",
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
    bardata: [
      {
        text: "告白Ta",
        src: "../../image/heart4.png",
        itemnum: 0,
        on: 0
      },
      {
        text: "海底捞",
        src: "../../image/heart3.png",
        itemnum: 1,
        on: 0
      }
    ],
    show: 0,
    eindex: 0,
    hindex: 0,
    first: true,
    second: false,
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
  /**
   * 点击切换
   */
  hearttap: function(e) {
    let index = e.currentTarget.dataset.itemnum;
    let bararr = this.data.bardata;
    for (let i of bararr) {
      i.on = index;
      i.src = "../../image/heart3.png";
    }
    bararr[index].src = "../../image/heart4.png";
    this.setData({
      bardata: bararr,
      show: index
    });
    console.log(e.currentTarget);
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
  touchend: function(e) {
    let that = this;
    let x = this.position.transx;
    let y = this.position.transy;
    if (x > 10 || y > 10 || x < -10 || y < -10) {
      let tan = Math.abs(y / x);
      let moveend = wx.createAnimation({
        duration: 1000
      });
      this.moveend = moveend;
      x > 0 ? moveend.translateX(+500) : moveend.translateX(-500);
      y > 0
        ? moveend.translateY(+500 * tan).step()
        : moveend.translateY(-500 * tan).step();
      console.log(e);
      console.log(x);
      console.log(y);
      console.log(moveend);

      this.setData({
        animation: this.moveend.export()
      });
      console.log(this.data.animation);
      /**
       * 动画结束后执行函数
       */
      setTimeout(() => {
        let remove = wx.createAnimation({
          duration: 0
        });
        if (that.data.show == 0) {
          let index = that.data.eindex + 1;
          that.remove = remove;
          remove.translateX(0);
          remove.translateY(0).step();
          that.setData({
            animation: that.remove.export(),
            eindex: index
          });
        } else if (that.data.show == 1) {
          let index = that.data.hindex + 1;
          that.remove = remove;
          remove.translateX(0);
          remove.translateY(0).step();
          that.setData({
            animation: that.remove.export(),
            hindex: index
          });
        }
      }, 1001);
    }
  },
  toshow: function(event) {
    console.log(event.currentTarget.dataset.set);
    let json = JSON.stringify(event.currentTarget.dataset.set);
    wx.navigateTo({
      url: "../show/show?value=" + json
    });
  },
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
