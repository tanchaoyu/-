// components/comment/comment.js
import tool from "../../static/js/tool.js";
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    commentdata: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    content: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    reply: function() {
      let that = this;
      let userdata = new Object({
        user_id: that.properties.commentdata.user_id,
        nickName: that.properties.commentdata.user.username,
        avatarUrl: that.properties.commentdata.user.userlogo
      });
      let reply = tool.replycomment(
        app.globalData.app_token,
        that.properties.commentdata.tlak_type,
        that.properties.commentdata.tlak_id,
        that.properties.commentdata.comment_id,
        userdata,
        that.data.content,
        "/comment/reply"
      );
    },
    /**
     * 调用页面的函数
     */
    getuserFun: function(e) {
      let obj = {};
      this.triggerEvent("opensecondComment", obj);
      this.triggerEvent("replytap", obj);
    }
  }
});
