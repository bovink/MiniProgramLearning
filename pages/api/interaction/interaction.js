// pages/api/interaction/interaction.js
Page({
  // wx.showLoading 和 wx.showToast 同时只能显示一个
  /**
   * 页面的初始数据
   */
  data: {
    array: [
      '显示消息提示框',
      '显示Loading提示框',
      '显示模拟对话框',
      '显示操作菜单'
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
      case 2:
        this.showModal()
        break
      case 3:
        this.showActionSheet()
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
      mask: true // 防止触摸穿透
    })
  },

  showLoading: function() {
    wx.showLoading({
      title: '显示加载中',
      mask: true
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 2000)
  },

  showModal: function() {
    wx.showModal({
      title: '这是一个标题',
      content: '这是展示的内容',
      showCancel: true,
      cancelText: '取消按钮',
      cancelColor: '#ff66c1',
      confirmText: '确认按钮',
      confirmColor: '#cccccc',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  showActionSheet: function() {
    wx.showActionSheet({
      itemList: [
        '按钮1',
        '按钮2'
      ],
      itemColor: '#ff662c',
      success: function(res) {
        console.log(res.tapIndex)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  }
})