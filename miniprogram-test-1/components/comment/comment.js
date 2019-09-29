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
      let reply = tool.replycomment(
        app.globalData.app_token,
        that.properties.commentdata.tlak_type
      );
    }
  }
});
