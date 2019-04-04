//index.js
Page({
  data: {
    array: [
      'scroll-view'
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