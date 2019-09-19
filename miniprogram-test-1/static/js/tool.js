const app = getApp();
/*函数节流*/
function throttle(fn, interval) {
  var enterTime = 0; //触发的时间
  var gapTime = interval || 300; //间隔时间，如果interval不传，则默认300ms
  return function() {
    var context = this;
    var backTime = new Date(); //第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      fn.call(context, arguments);
      enterTime = backTime; //赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  };
}
function getData(talk_type, sort, page, url) {
  return new Promise(function(resolve, reject) {
    wx.request({
      method: "get",
      header: {
        "content-type": "application/x-www-form-urlencoded" // 默认值
      },
      url: app.globalData.baseUrl + app.globalData.apiUrl + url,

      data: {
        talk_type: talk_type,
        sort: sort,
        page: page
      },
      success: res => {
        console.log(res);

        resolve(res);
      }
    });
  });
}
export default {
  throttle,
  getData
};
