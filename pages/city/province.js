// pages/city/province.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var page = options.page;
    var beginEnd = options.beginEnd;
    var beginCity = options.beginCity;
    var endCity = options.endCity;
    console.log("beginCity" + beginCity)
    console.log("endCity" + endCity)
    var that = this;
    wx.request({
      url: 'http://www.tngou.net/api/area/province',
      //url: 'http://www.tngou.net/api/area/city?id=10',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        var provinces = {}
        //areas.isProvince = true
        //areas.provinces = res.data.tngou
        provinces = res.data.tngou

        that.setData({
          provinces:provinces,
          page:page,
          beginEnd:beginEnd,
          beginCity:beginCity,
          endCity:endCity
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})