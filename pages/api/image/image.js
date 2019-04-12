// pages/api/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      '保存图片到系统相册',
      '预览图片',
      '获取图片信息',
      '压缩图片'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  tapItem: function(e) {
    console.log(e)
    switch (e.currentTarget.dataset.index) {
      case 0:
        this.saveImage()
        break
      case 1:
        this.previewImage()
        break
      case 2:
        this.getImageInfo()
        break
      case 3:
        this.compressImage()
        break
      default:
        break
    }
  },

  saveImage: function() {
    wx.saveImageToPhotosAlbum({
      filePath: '/icon/icon.png',
    })
  },

  previewImage: function() {
    wx.previewImage({
      urls: [
        '/icon/icon.png',
        '/icon/fruit.png',
        '/icon/cookie.png'
      ],
    })
  },

  getImageInfo: function() {
    wx.getImageInfo({
      src: '/icon/cookie.png',
      success: res => {
        console.log(res.width)
        console.log(res.height)
        console.log(res.path)
        console.log(res.orientation)
        console.log(res.type)
      }
    })
  },

  compressImage: function() {
    wx.compressImage({
      src: '/icon/image.jpg',
      quality: 50,
      success: tempFilePath => {
        console.log(tempFilePath)
        console.log(tempFilePath.tempFilePath)
        
      }
    })
  }

})