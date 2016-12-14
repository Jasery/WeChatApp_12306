// pages/coach/coach.js

var history = require("../../utils/history.js");
var util = require('../../utils/util.js')

Page({
  data:{
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //处理出发城市即到达城市
    var beginEnd = options.beginEnd    
    var beginCity =  history.coach[0].begin ,
        endCity = history.coach[0].end
    if(beginEnd == "begin") {
      beginCity = options.city;
      endCity = options.endCity
    } else if (beginEnd == 'end') {
      endCity = options.city
      beginCity = options.beginCity
    }

    var date = new Date();
    var today = new Date();
    var selectDay,dayDescript;
    if(options.date != null) {
      date = new Date(options.date)
    }
    selectDay = (date.getMonth() + 1 ) + '月' + date.getDate() + '日'
    dayDescript = util.getDayDescript(today, date);

    this.setData({
      coachHistories:history.coach,
      beginCity:beginCity,
      endCity:endCity,
      selectDate:{
        date:date,
        selectDay:selectDay,
        dayDescript:dayDescript
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