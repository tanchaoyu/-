const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 标题内容
    content: "",
    // 图片列表
    images: [],
    // 视频
    video: "",
    //类型
    talk_type: "tuCao",
    talk_id: "",
    //匿名
    anonymously: false,
    array: ["一吐为快", "我的树洞", "我的悬赏", "表白Ta", "海底捞"],
    objectArray: [
      {
        id: 0,
        name: "一吐为快" //tucao
      },
      {
        id: 1,
        name: "我的树洞" //shudong
      },
      {
        id: 2,
        name: "我的悬赏"
      },
      {
        id: 3,
        name: "表白Ta"
      },
      {
        id: 4,
        name: "海底捞"
      }
    ],
    index: 0,
    picturedate: [
      {
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
  onLoad: function(options) {},
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
    console.log(e.detail);
  },
  bindPickerChange: function(e) {
    //value始终为string类型
    console.log("picker发送选择改变，携带值为", e.detail.value);
    let index = e.detail.value;
    let talk_type;
    console.log(index);

    switch (index) {
      case "0":
        talk_type = "tuCao";
        break;
      case "1":
        talk_type = "shuDon";
        break;
      case "2":
        talk_type = "xuanShang";
        break;
      case "3":
        talk_type = "biaoBai";
        break;
      case "4":
        talk_type = "haiDiLao";
        break;
    }
    console.log(talk_type);
    this.setData({
      talk_type: talk_type,
      index: e.detail.value
    });
  },
  // 内容操作
  handleContentInput(event) {
    let textareaValue = event.detail.value;
    let contentCount = textareaValue.length;
    if (contentCount <= 225) {
      this.setData({
        contentCount: contentCount,
        content: textareaValue
      });
    }
  },
  switchChange: function(e) {
    console.log("switch 发生 change 事件，携带值为", e.detail.value);
  },
  chooseImage: function() {
    let that = this;
    wx.showToast({
      title: "仅限一张图片",
      icon: "none",
      duration: 2000,
      success: res => {
        wx.chooseImage({
          success: res => {
            console.log(res);

            this.setData({
              images: res.tempFilePaths
            });
          }
        });
      }
    });
  },
  previewIamge(event) {
    const nowIndex = event.currentTarget.dataset.id;
    const images = this.data.images;
    wx.previewImage({
      current: images[nowIndex], //当前预览的图片
      urls: images //所有要预览的图片
    });
  },
  deleteImage(event) {
    //获取数据绑定的data-id的数据
    const nowIndex = event.currentTarget.dataset.id;
    let images = this.data.images;
    images.splice(nowIndex, 1);
    this.setData({
      images
    });
  },

  submitClick: function() {
    console.log(app.globalData.app_token);
    let that = this;
    wx.request({
      method: "get",
      header: {
        "content-type": "application/x-www-form-urlencoded" // 默认值
      },
      url: app.globalData.baseUrl + app.globalData.apiUrl + "/push/init",
      data: {
        app_token: app.globalData.app_token
        //talk_type: that.data.talk_type
      },

      success: res => {
        console.log(res);
        that.setData({
          talk_id: res.data.talk_id
        });
        wx.request({
          method: "post",
          header: {
            "content-type": "application/x-www-form-urlencoded" // 默认值
          },
          url: app.globalData.baseUrl + app.globalData.apiUrl + "/push/add",

          data: {
            talk_type: that.data.talk_type,
            talk_id: that.data.talk_id,
            anonymously: that.data.anonymously,
            content: that.data.content
          },

          success: res => {
            console.log(res);
          }
        });
        wx.request({
          method: "post",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          url: app.globalData.baseUrl + app.globalData.apiUrl + "/image/up",
          fromData: {
            talk_id: that.data.talk_id,
            file: null
          }
        });

        wx.uploadFile({
          url: app.globalData.baseUrl + app.globalData.apiUrl + "/image/up", //仅为示例，非真实的接口地址
          filePath: that.data.images[0],
          name: "file",
          header: {
            "content-type": "application/x-www-form-urlencoded" // 默认值
          },
          formData: {
            talk_id: that.data.talk_id
          },
          success(res) {
            console.log(res);
            const data = res.data;
            that.data.images = [];
            //do something
          }
        });
        wx.showToast({
          title: "发送成功",
          icon: "none",
          duration: 2000,
          success: res => {
            wx.navigateTo({
              url: "../index/index"
            });
          }
        });
      },
      fail(err) {
        console.log(err);
      }
    });
  }
});
