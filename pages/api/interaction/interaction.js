// pages/api/interaction/interaction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      '显示Toast',
      '显示Loading'
    ]
  },

  tapItem: function(e) {
    console.log(e)
    switch (e.currentTarget.dataset.index) {
      case 0:
        this.showToast()
        break
      case 1:
        this.showLoading()
        break
      default:
        break
    }
  },

  showToast: function() {
    wx.showToast({
      title: '这是一个Toast',
      icon: 'loading',
      image: '/icon/icon.png',
      duration: 3000,
      mask: true
    })
  },

  showLoading: function() {
    console.log('点击1')


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  }
})