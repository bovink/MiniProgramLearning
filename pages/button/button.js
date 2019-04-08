// pages/button/button.js

const typeArray = ['primary', 'default', 'warn']
const sizeArray = ['default', 'mini']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'primary',
    size: 'mini'
  },

  // 改变按钮类型
  changeBtnType: function(e) {
    var currentType
    for (var i = 0; i < typeArray.length; i++) {
      if (this.data.type == typeArray[i]) {
        var index
        if (i == typeArray.length - 1) {
          index = 0
        } else {
          index = i + 1
        }
        currentType = typeArray[index]
        break;
      }
    }
    console.log(currentType)

    this.setData({
      type: currentType
    })
  },

  // 改变按钮尺寸
  changeBtnSize: function (e) {
    var currentSize
    for (var i = 0; i < sizeArray.length; i++) {
      if (this.data.size == sizeArray[i]) {
        var index
        if (i == sizeArray.length - 1) {
          index = 0
        } else {
          index = i + 1
        }
        currentSize = sizeArray[index]
        break;
      }
    }
    console.log(currentSize)

    this.setData({
      size: currentSize
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})