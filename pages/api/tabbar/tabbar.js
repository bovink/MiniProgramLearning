// pages/api/tabbar/tabbar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      'TabBar显示红点',
      '显示TabBar',
      '隐藏TabBar',
    ]
  },

  tapItem: function(e) {
    switch (e.currentTarget.dataset.index) {
      case 0:
        this.showRedDot()
        break
      case 1:
        this.showTabBar()
        break
      case 2:
        this.hideTabBar()
        break
      case 3:
        break
      default:
        break
    }
  },

  showRedDot: function() {
    wx.showTabBarRedDot({
      index: 0,
    })
  },

  showTabBar: function() {
    wx.showTabBar()
  },

  hideTabBar: function() {
    wx.hideTabBar()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  }

})