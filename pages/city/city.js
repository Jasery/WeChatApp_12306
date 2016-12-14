// pages/city/city.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var id = options.id;
    var page = options.page
    var beginEnd = options.beginEnd
    var beginCity = options.beginCity
    var endCity = options.endCity
    console.log("beginCity" + beginCity)
    console.log("endCity" + endCity)
    var that = this;
    wx.request({
      url: 'http://www.tngou.net/api/area/city',
      data: {"id":id},
      method: "GET",
      success: function (ret) {
        var cities = {};
        cities = ret.data.tngou;
        that.setData({
          beginCity:beginCity,
          endCity:endCity,
          cities:cities,
          page:page,
          beginEnd:beginEnd
        })
 
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
  },
  selectCity:function () {
    console.log("select")
  }
})