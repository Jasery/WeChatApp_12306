// pages/train/train.js

var history = require('../../utils/history.js')
var util = require('../../utils/util.js')

Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var date = new Date();
    var today = new Date();
    var selectDay,dayDescript;
    if(options.date != null) {
      date = new Date(options.date)
    }
    selectDay = (date.getMonth() + 1 ) + '月' + date.getDate() + '日'
    dayDescript = util.getDayDescript(today, date);

    this.setData({
      trainHistories:history.train,
      selectDate:{
        date:date,
        dayDescript:dayDescript,
        selectDay:selectDay
      }      
    })

  },
  onReady:function(){
    // 页面渲染完成
    wx.request({
      url: 'http://www.tngou.net/api/area/province?type=all',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })




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
})