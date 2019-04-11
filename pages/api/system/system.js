// pages/api/system/system.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '获取信息中...'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getSystemInfo()
  },

  /**
   * 异步获取系统信息
   */
  getSystemInfo: function() {
    wx.getSystemInfo({
      success: res => {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)

        var info = 'model:' + res.model + '\n' +
          'pixelRatio:' + res.pixelRatio + '\n' +
          'windowWidth:' + res.windowWidth + '\n' +
          'windowHeight:' + res.windowHeight + '\n' +
          'language:' + res.language + '\n' +
          'version:' + res.version + '\n' +
          'platform:' + res.platform
        this.setData({
          text: info
        })
      }
    })

  },

  /**
   * 同步获取系统信息
   */
  getSystemInfoSync: function() {
    try {
      const res = wx.getSystemInfoSync()
      console.log(res.model)
      console.log(res.pixelRatio)
      console.log(res.windowWidth)
      console.log(res.windowHeight)
      console.log(res.language)
      console.log(res.version)
      console.log(res.platform)
    } catch (e) {
      // Do something when catch error
    }
  }

})