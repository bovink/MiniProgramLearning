//index.js
Page({
  data: {
    array: [
      'scroll-view',
      'video'
    ]
  },
  enterView: function(e) {
    console.log(e.currentTarget.dataset.text)
    let text = e.currentTarget.dataset.text
    let name = '../' + text + '/' + text
    wx.navigateTo({
      url: name,
    })
  },
  onLoad: function() {

  }
})