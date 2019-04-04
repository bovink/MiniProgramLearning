//index.js
//获取应用实例
const item = ['red', 'blue', 'yellow', 'black', 'green']
Page({
  data: {
    toView: 'red'
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function(e) {
    for (let i = 0;i < item.length;i++) {
      if (item[i] == this.data.toView) {
        let index = i == item.length - 1 ? 0 : i + 1
        this.setData({
          toView: item[index]
        })
        break
      }
    }
    
  },
  enterView: function() {
    wx.navigateTo({
      url: '../scroll-view/scroll-view',
    })
  },
  onLoad: function() {

  }
})