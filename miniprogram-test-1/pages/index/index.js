//index.js
//获取应用实例

Page({
  data: {
    currentIndex: 0,
    show: 0,
    pagedate: [
      {
        image: "../../image/things.png",
        text: "众人帮悬赏",
        id: 0,
        url: "../scuecthings/scuecthings"
      },
      {
        image: "../../image/express.png",
        text: "告白你我TA",
        id: 1,
        url: "../express/express"
      },
      {
        image: "../../image/shadiaologo.png",
        text: "沙雕一日笑",
        id: 2,
        url: "../shadiao/shadiao"
      },
      {
        image: "../../image/emotion.png",
        text: "情绪小树洞",
        id: 3,
        url: "../emotion/emotion"
      }
    ],
    shadiaoswdate: [
      {
        eimg: "../../image/shadiao1.png",
        comment: "xxxxxxxxxxxx",
        user: {
          userlogo: "../../image/ting.png",
          username: "Zhou Yuting"
        }
      },
      {
        eimg: "../../image/shadiao2.png",
        comment: "xxxxxxxxxxxx",
        user: {
          userlogo: "../../image/ting.png",
          username: "Zhou Yuting"
        }
      },
      {
        eimg: "../../image/shadiao3.png",
        comment: "xxxxxxxxxxxx",
        user: {
          userlogo: "../../image/ting.png",
          username: "Zhou Yuting"
        }
      },
      {
        eimg: "../../image/shadiao4.png",
        comment: "xxxxxxxxxxxx",
        user: {
          userlogo: "../../image/ting.png",
          username: "Zhou Yuting"
        }
      },
      {
        eimg: "../../image/shadiao5.png",
        comment: "xxxxxxxxxxxx",
        user: {
          userlogo: "../../image/ting.png",
          username: "Zhou Yuting"
        }
      }
    ],
    bardata: [
      {
        text: "沙雕图片",
        itemnum: 0,
        on: 0
      },
      {
        text: "心情坐标",
        itemnum: 1,
        on: 0
      }
    ],
    sectiondata: [
      /**
       * 第一列数据
       */
      [
        {
          eimg: "../../image/ting.png",
          etext: "A beautiful girl called yuting",
          user: {
            userlogo: "../../image/ting.png",
            username: "Zhou Yuting"
          }
        }
      ],
      /**
       * 第二列数据
       */
      [
        {
          eimg: "../../image/ting2.png",
          etext: "A beautiful girl called liting",
          user: {
            userlogo: "../../image/ting2.png",
            username: "Zhu Liting"
          }
        }
      ]
    ]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: "../logs/logs"
    });
  },
  searchtap: function() {
    wx.navigateTo({
      url: "../search/search"
    });
  },
  logotap: function(e) {
    let url = e.currentTarget.dataset.url;
    console.log(url);
    wx.navigateTo({
      url: url
    });
  },
  imgchange: function(e) {
    this.setData({
      currentIndex: e.detail.current
    });

    let shadiaoarr = this.selectAllComponents(".swipercp");
    let point = 0;
    for (let i of shadiaoarr) {
      //i.data.init = this.data.currentIndex;
      //i.data.index = point;
      i.setData({
        init: this.data.currentIndex,
        index: point
      });
      point++;
      /** 
      console.log(i.data.init);
      console.log(i.data.index);
      */
    }
  },
  bartap: function(e) {
    let index = e.currentTarget.dataset.itemnum;
    let bararr = this.data.bardata;
    for (let i of bararr) {
      i.on = index;
    }
    this.setData({
      bardata: bararr,
      show: index
    });
    console.log(bararr);
  },
  onLoad: function() {
    let shadiaoarr = this.selectAllComponents(".swipercp");
    let point = 0;
    for (let i of shadiaoarr) {
      i.setData({
        index: point
      });
      point++;
    }
  },
  toshow: function(event) {
    console.log(event.currentTarget.dataset.set);
    let json = JSON.stringify(event.currentTarget.dataset.set);
    wx.navigateTo({
      url: "../show/show?value=" + json
    });
  }
});
