Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 详情数
    contentCount: 0,
    // 标题内容
    content: '',
    // 图片列表
    images: [],
    // 视频
    video: '',
  },

  // 图片操作的具体函数
  ImageOperator() {
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        // 上传的图片数据
        const imgList = res.tempFilePaths;
        // 原始的图片数据
        const imageList = this.data.images;

        // 原来的图片数量
        let imageLenght = imageList.length;
        // 当前的图片数量
        let nowLenght = imgList.length;
        console.log(imageLenght);

        if (imageLenght == 9) {
          console.log("数量已经有9张，请删除在添加...");
        }
        if (imageLenght < 9) {
          let images = [];
          // 获取缺少的图片张数
          let residue = 9 - imageLenght;
          // 如果缺少的张数大于当前的的张数  
          if (residue >= nowLenght) {
            // 直接将两个数组合并为一个  
            images = imageList.concat(imgList);
          } else {
            // 否则截取当前的数组一部分  
            images = imageList.concat(imgList.slice(0, residue));
          }
          this.setData({
            images
          })
        }
      }
    })

  },

  // 标题操作
  handleTitleInput(event) {
    let inputValue = event.detail.value;
    // 确保标题不存在空格  
    if (inputValue.lastIndexOf(" ") != -1) {
      inputValue = inputValue.substring(0, inputValue.lastIndexOf(" "));
    }
    let titleCount = inputValue.length;
    if (titleCount <= 25) {
      this.setData({
        titleCount: titleCount,
        title: inputValue
      })
    }
  },
  // 内容操作
  handleContentInput(event) {
    let textareaValue = event.detail.value;
    let contentCount = textareaValue.length;
    if (contentCount <= 255) {
      this.setData({
        contentCount: contentCount,
        content: textareaValue
      })
    }
  },
  // 图片获取
  chooseImage() {
    if (this.data.images.length == 0) {
      wx.showToast({
        title: '视频和图片只能选择上传一种类型!',
        icon: 'none',
        duration: 2000,
        success: res => {
          this.ImageOperator()
        }
      })
    } else {
      this.ImageOperator()
    }

  },
  // 删除图片
  deleteImage(event) {
    //获取数据绑定的data-id的数据
    const nowIndex = event.currentTarget.dataset.id;
    let images = this.data.images;
    images.splice(nowIndex, 1);
    this.setData({
      images
    })
  },
  // 预览图片
  previewIamge(event) {
    const nowIndex = event.currentTarget.dataset.id;
    const images = this.data.images;
    wx.previewImage({
      current: images[nowIndex],  //当前预览的图片
      urls: images,  //所有要预览的图片
    })
  },
  // 上传视频
  chooseVideo() {
    // 弹层  
    wx.showToast({
      title: '视频和图片只能选择上传一种类型!',
      icon: 'none',
      duration: 2000,
      success: res => {
        wx.chooseVideo({
          sourceType: ['album', 'camera'],
          compressed: true,
          maxDuration: 10,
          camera: 'back',
          success: res => {
            console.log(res);
            const video = res.tempFilePath;
            this.setData({ video })
          }
        })
      }
    })
  },
  // 删除视频
  videoDelete() {
    wx.showModal({
      title: '警告',
      content: '确定要删除该视频吗',
      success: res => {
        if (res.confirm) {
          this.setData({
            video: ''
          })
        }
      }
    })
  },
  // 表单提交事件
  submitClick() {

  },
  // 重置表单
  resetClick() {
    wx.showModal({
      title: '警告',
      content: '重置表单将需要重新上传数据',
      success: res => {
        if (res.confirm) {
          this.setData({
            titleCount: 0,
            contentCount: 0,
            title: '',
            content: '',
            images: [],
            video: ''
          })
        }
      }
    })
  }
})

