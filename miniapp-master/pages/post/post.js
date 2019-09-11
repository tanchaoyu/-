Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //收藏文章
  collect() {
    return this.updatePostData('collect');
  },
  nCollectionTap: function(event) {
    //dbpost对象已在onLoad函数中被保存到了this变量中，无需再次实例化
    var newData = this.dbPost.collect();
    //从新绑定数据，注意，不要将整个newData全部作为setData的参数，应当有选择的更新部分数据
    this.setData({
        'post.collectionSataus': newData.collectionStatus,
        'post.collectionNum': newData.collectionNum
      }),
      //交互反馈  
      wx.showToast({
        title: newData.collectionStatus ? "收藏成功" : "收藏取消",
        duration: 1000,
        icon: "sucess",
        make: true
      });
  },
  //点赞或取消点赞
  up() {
    return this.updatePostData('up');

  },
  //更新本地的点赞、评论信息、收藏、阅读量
  updatePostData(category) {
    var itemData = this.getPostItemById(),
      postData = itemData.data,
      allPostData = this.getAllPostData();
    switch (category) {
      case 'collect':
        //处理收藏
        if (!postData.collectionStatus) {
          //如果当前状态是未收藏
          postData.collectionNum++;
          postData.collectionStatus = true;
        } else {
          //如果当前状态是已收藏
          postData.collectionNum--;
          postData.collectionStatus = false;
        }
        break;
      case 'up':
        if (!postData.upStatus) {
          postData.upNum++;
          postData.upStatus = true;
        } else {
          postData.upNum--;
          postData.upStatus = false;
        }
        break;

      default: break;
    }
    //更新缓存数据库  
    allPostData[itemData.index] = postData;
    this.execSetStorageSync(allPostData);
    return postData;
  },
  onUpTap: function(event) {
    var newData = this.dbPost.up();
    this.setData({
      'post.upStatus': newData.upStatus,
      'post.upNum': newData.upNum,
    })
    wx.showToast({
      title: newData.upStatus ? "点赞成功" : "点赞取消",
      duration: 1000,
      icon: "sucess",
      make: true
    })
  }
})