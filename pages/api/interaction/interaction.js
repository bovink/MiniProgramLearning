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
    console.log('点击0')

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