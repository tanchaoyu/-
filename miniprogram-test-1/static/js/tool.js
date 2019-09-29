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
/**
 * 发布一级评论
 * @param {string} app_token
 * @param {string} talk_type
 * @param {string} talk_id
 * @param {string} content
 * @param {string} url
 */
function send(app_token, talk_type, talk_id, content, url) {
  return new Promise(function(resolve, reject) {
    wx.request({
      method: "post",
      header: {
        "content-type": "application/x-www-form-urlencoded" // 默认值
      },
      url: app.globalData.baseUrl + app.globalData.apiUrl + url,

      data: {
        talk_type: talk_type,
        app_token: app_token,
        talk_id: talk_id,
        content: content
      },
      success: res => {
        console.log(res);

        resolve(res);
      }
    });
  });
}
function replycomment(
  app_token,
  talk_type,
  talk_id,
  comment_id,
  to_user,
  content,
  url
) {
  return new Promise(function(resolve, reject) {
    wx.request({
      method: "post",
      header: {
        "content-type": "application/x-www-form-urlencoded" // 默认值
      },
      url: app.globalData.baseUrl + app.globalData.apiUrl + url,

      data: {
        talk_type: talk_type,
        app_token: app_token,
        comment_id: comment_id,
        to_user: to_user,
        talk_id: talk_id,
        content: content
      },
      success: res => {
        console.log(res);

        resolve(res);
      }
    });
  });
}
/**
 *获取评论
 * @param {string} talk_type
 * @param {string} talk_id
 * @param {string} url /comment
 */
function getcomment(talk_type, talk_id, url) {
  return new Promise(function(resolve, reject) {
    wx.request({
      method: "get",
      header: {
        "content-type": "application/x-www-form-urlencoded" // 默认值
      },
      url: app.globalData.baseUrl + app.globalData.apiUrl + url,

      data: {
        talk_type: talk_type,
        talk_id: talk_id
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
  getData,
  send,
  replycomment,
  getcomment
};
