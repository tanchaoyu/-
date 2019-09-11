// components/reply/reply.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    replydata: {
      type: Object,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    comment: "评论了你：",
    reply: "回复了你的评论："
  },

  /**
   * 组件的方法列表
   */
  methods: {}
});
