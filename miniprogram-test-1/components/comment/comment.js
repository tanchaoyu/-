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
  data: {},

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
      let that = this;
      console.log(that.properties.commentdata);

      let userdata = new Object({
        user_id: that.properties.commentdata.user_id,
        nickName: that.properties.commentdata.user.username,
        avatarUrl: that.properties.commentdata.user.userlogo
      });

      let senddata = new Object({
        comment_id: that.properties.commentdata.comment_id,
        to_user: userdata
      });
      this.triggerEvent("opensecondComment");
      this.triggerEvent("replytap", senddata);
    }
  }
});
