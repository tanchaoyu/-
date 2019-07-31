// pages/show/show.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showdata: {
      etext: "",
      eimg: "",
      user: {
        userlogo: "",
        username: ""
      }
    },
    floordata: [
      [
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
          reply: true
        }
      ],
      [
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
          reply: true
        }
      ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    let showdata = JSON.parse(options.value);
    console.log(showdata.eimg);
    this.setData({
      showdata: showdata
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
