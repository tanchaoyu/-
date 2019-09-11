let touchDotX = 0; //X按下时坐标
let touchDotY = 0; //y按下时坐标
var util = require('../../utils/util.js');
const app = getApp();
Page({
  data: {

    releaseFocus: false, 
    animationData1: {},
    animationData2: {},
    animationData3: {},
    ballTop1: 100,
    ballTop2: 90,
    ballTop3: 80,
    ballWidth1: 640,
    ballWidth2: 600,
    ballWidth3: 565,
    index1: 3,
    index2: 2,
    index3: 1,
    statusBarHeight: getApp().globalData.statusBarHeight,
    routers: [{
        image: '../../image/shadiao1.png'
      },
      {
        image: '../../image/shadiao2.png'
      },
      {
        image: '../../image/shadiao3.png'
      },
      {
        image: '../../image/shadiao4.png'
      },
      {
        image: '../../image/shadiao5.png'
      },
      {
        image: '../../image/shadiao1.png'
      },
      {
        image: '../../image/shadiao2.png'
      },
      {
        image: '../../image/shadiao3.png'
      },
      {
        image: '../../image/shadiao4.png'
      }
    ],
    textdate: "今日沙雕表情包分享啊今日沙雕表情包分享啊今日沙雕表情包分享啊今日沙雕表情包分享啊今日沙雕表情包分享啊",
    showdata: {
      etext: "",
      eimg: "",
      user: {
        userlogo: "../../image/ting2.png",
        username: "Zhu Liting",
        usertime: "今天 15:27"
      }
    },
    floordata: [
      [{
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
   *  卡片1手势
   */
  touchstart1: function(event) {
    touchDotX = event.touches[0].pageX; // 获取触摸时的原点
    touchDotY = event.touches[0].pageY;
    console.log("起始点的坐标X:" + touchDotX);
    console.log("起始点的坐标Y:" + touchDotY);
  },
  // 移动结束处理动画
  touchend1: function(event) {
    // 手指离开屏幕时记录的坐标
    let touchMoveX = event.changedTouches[0].pageX;
    let touchMoveY = event.changedTouches[0].pageY;
    // 起始点的坐标(x0,y0)和手指离开时的坐标(x1,y1)之差
    let tmX = touchMoveX - touchDotX;
    let tmY = touchMoveY - touchDotY;
    // 两点横纵坐标差的绝对值
    let absX = Math.abs(tmX);
    let absY = Math.abs(tmY);
    //起始点的坐标(x0,y0)和手指离开时的坐标(x1,y1)之间的距离
    let delta = Math.sqrt(absX * absX + absY * absY);
    console.log('起始点和离开点距离:' + delta + 'px');
    // 如果delta超过60px（可以视情况自己微调）,判定为手势触发
    if (delta >= 60) {
      // 如果 |x0-x1|>|y0-y1|,即absX>abxY,判定为左右滑动
      if (absX > absY) {
        // 如更tmX<0，即(离开点的X)-(起始点X)小于0 ，判定为左滑
        if (tmX < 0) {
          console.log("左滑=====");
          // 执行左滑动画
          this.Animation1(-500);
          // 如更tmX>0，即(离开点的X)-(起始点X)大于0 ，判定为右滑
        } else {
          console.log("右滑=====");
          // 执行右滑动画
          this.Animation1(500);
        }
        // 如果 |x0-x1|<|y0-y1|,即absX<abxY,判定为上下滑动
      } else {
        // 如更tmY<0，即(离开点的Y)-(起始点Y)小于0 ，判定为上滑
        if (tmY < 0) {
          console.log("上滑动=====");
          // this.setData({
          // 执行上滑动画
          this.Animation1(-500);
          // isFront1: !this.data.isFront1
          // });
          // 如更tmY>0，即(离开点的Y)-(起始点Y)大于0 ，判定为下滑
        } else {
          console.log("下滑动=====");
          // this.setData({
          // 执行下滑动画
          this.Animation1(500);
          // isFront1: !this.data.isFront1
          // });
        }
      }
    } else {
      console.log("手势未触发=====");
    }
  },

  /**
   *  卡片2手势
   */
  touchstart2: function(event) {
    touchDotX = event.touches[0].pageX; // 获取触摸时的原点
    touchDotY = event.touches[0].pageY;

    console.log("起始点的坐标X:" + touchDotX);
    console.log("起始点的坐标Y:" + touchDotY);

  },
  // 移动结束处理动画
  touchend2: function(event) {
    let touchMoveX = event.changedTouches[0].pageX;
    let touchMoveY = event.changedTouches[0].pageY;
    let tmX = touchMoveX - touchDotX;
    let tmY = touchMoveY - touchDotY;
    let absX = Math.abs(tmX);
    let absY = Math.abs(tmY);
    let delta = Math.sqrt(absX * absX + absY * absY);
    console.log('起始点和离开点距离:' + delta + 'px');
    if (delta >= 60) {
      if (absX > absY) {
        if (tmX < 0) {
          console.log("左滑=====");
          this.Animation2(-500);
        } else {
          console.log("右滑=====");
          this.Animation2(500);
        }
      } else {
        if (tmY < 0) {
          console.log("上滑动=====");
          this.Animation1(-500);
        } else {
          console.log("下滑动=====");
          this.Animation1(500);
        }

      }
    } else {
      console.log("手势未触发=====");
    }

  },

  /**
   *  卡片3手势
   */
  touchstart3: function(event) {
    touchDotX = event.touches[0].pageX; // 获取触摸时的原点
    touchDotY = event.touches[0].pageY;
    console.log("起始点的坐标X:" + touchDotX);
    console.log("起始点的坐标Y:" + touchDotY);
  },
  // 移动结束处理动画
  touchend3: function(event) {
    let touchMoveX = event.changedTouches[0].pageX;
    let touchMoveY = event.changedTouches[0].pageY;
    let tmX = touchMoveX - touchDotX;
    let tmY = touchMoveY - touchDotY;
    let absX = Math.abs(tmX);
    let absY = Math.abs(tmY);
    let delta = Math.sqrt(absX * absX + absY * absY);
    console.log('起始点和离开点距离:' + delta + 'px');
    if (delta >= 60) {
      if (absX > absY) {
        if (tmX < 0) {
          console.log("左滑=====");
          this.Animation3(-500);
        } else {
          console.log("右滑=====");
          this.Animation3(500);
        }
      } else {

        if (tmY < 0) {
          console.log("上滑动=====");
          this.Animation1(-500);
        } else {
          console.log("下滑动=====");
          this.Animation1(500);
        }
      }
    } else {
      console.log("手势未触发=====");
    }
  },

  /**
   * 卡片1:
   * 左滑动右滑动动画
   */
  Animation1: function(translateXX) {
    let animation = wx.createAnimation({
      duration: 640,
      timingFunction: "ease",
    });
    this.animation = animation;

    if (translateXX > 0) {
      this.animation.translateY(0).rotate(20).translateX(translateXX).opacity(0).step();
    } else {
      this.animation.translateY(0).rotate(-20).translateX(translateXX).opacity(0).step();
    }

    this.animation.translateY(0).translateX(0).opacity(1).rotate(0).step({
      duration: 10
    });

    this.setData({
      animationData1: this.animation.export(),
    });

    setTimeout(() => {
      this.setData({
        ballTop1: 80,
        ballLeft1: -277.5,
        ballWidth1: 565,
        index1: 1,

        ballTop2: 100,
        ballLeft2: -315,
        ballWidth2: 640,
        index2: 3,

        ballTop3: 90,
        ballLeft3: -295,
        ballWidth3: 600,
        index3: 2,
      })
    }, 500);
  },

  /**
   * 卡片2:
   * 左滑动右滑动动画
   */
  Animation2: function(translateXX) {
    let animation = wx.createAnimation({
      duration: 640,
      timingFunction: "ease",
    });

    this.animation = animation;

    if (translateXX > 0) {
      this.animation.translateY(0).rotate(20).translateX(translateXX).opacity(0).step();
    } else {
      this.animation.translateY(0).rotate(-20).translateX(translateXX).opacity(0).step();
    }

    this.animation.translateY(0).translateX(0).opacity(1).rotate(0).step({
      duration: 10
    });

    this.setData({
      animationData2: this.animation.export(),
    });

    setTimeout(() => {
      this.setData({
        ballTop1: 90,
        ballLeft1: -295,
        ballWidth1: 600,
        index1: 2,

        ballTop2: 80,
        ballLeft2: -277.5,
        ballWidth2: 565,
        index2: 1,

        ballTop3: 100,
        ballLeft3: -315,
        ballWidth3: 640,
        index3: 3,
      })
    }, 500)
  },

  /**
   * 卡片3:
   * 左滑动右滑动动画
   */
  Animation3: function(translateXX) {
    let animation = wx.createAnimation({
      duration: 640,
      timingFunction: "ease",
    });

    this.animation = animation;
    if (translateXX > 0) {
      this.animation.translateY(0).rotate(20).translateX(translateXX).opacity(0).step();
    } else {
      this.animation.translateY(0).rotate(-20).translateX(translateXX).opacity(0).step();
    }

    this.animation.translateY(0).translateX(0).opacity(1).rotate(0).step({
      duration: 10
    });

    this.setData({
      animationData3: this.animation.export(),
    });

    setTimeout(() => {
      this.setData({
        ballTop1: 100,
        ballLeft1: -315,
        ballWidth1: 640,
        index1: 3,

        ballTop2: 90,
        ballLeft2: -295,
        ballWidth2: 600,
        index2: 2,

        ballTop3: 80,
        ballLeft3: -277.5,
        ballWidth3: 565,
        index3: 1,
      })
    }, 500);
  },
  bindReply: function(e) {
    this.setData({
      releaseFocus: true
    })
  }
})