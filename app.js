//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('启动微信小程序')
   
    
  },
  globalData: {
    userInfo: null,
    text:0
  }
})