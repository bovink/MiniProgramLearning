// pages/api/tabbar/tabbar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      '设置TabBar样式',
      '设置TabBarItem的内容',
      'TabBar显示红点',
      'TabBar隐藏红点',
      '显示TabBar',
      '隐藏TabBar',
      '显示文本',
      '隐藏文本'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  tapItem: function(e) {
    switch (e.currentTarget.dataset.index) {
      case 0:
        this.setTabBarStyle()
        break
      case 1:
        this.setTabBarItem()
        break
      case 2:
        this.showRedDot()
        break
      case 3:
        this.hideRedDot()
        break
      case 4:
        this.showTabBar()
        break
      case 5:
        this.hideTabBar()
        break
      case 6:
        this.showText()
        break
      case 7:
        this.hideText()
        break
      default:
        break
    }
  },

  /**
   * 设置TabBar样式
   */
  setTabBarStyle: function() {
    wx.setTabBarStyle({
      color: '#000000',
      selectedColor: '#FF66C1',
      backgroundColor: '#1E90FF',
      borderStyle: 'white'
    })
  },

  /**
   * 设置TabBarItem内容
   */
  setTabBarItem: function() {
    wx.setTabBarItem({
      index: 1,
      text: '视图布局',
      iconPath: '/icon/cookie.png',
      selectedIconPath: '/icon/fruit.png'
    })
  },

  /**
   * 显示红点
   */
  showRedDot: function() {
    wx.showTabBarRedDot({
      index: 0,
    })
  },

  /**
   * 隐藏红点
   */
  hideRedDot: function() {
    wx.hideTabBarRedDot({
      index: 0,
    })
  },

  /**
   * 显示TabBar
   */
  showTabBar: function() {
    wx.showTabBar()
  },

  /**
   * 隐藏TabBar
   */
  hideTabBar: function() {
    wx.hideTabBar()
  },

  /**
   * 显示Text
   */
  showText: function() {
    wx.setTabBarBadge({
      index: 3,
      text: '信息',
    })
  },

  /**
   * 隐藏Text
   */
  hideText: function() {
    wx.removeTabBarBadge({
      index: 3,
    })
  },

})