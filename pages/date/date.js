// pages/date/date.js
var lunarDay = require("../../utils/lunarDay.js");



Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var date = new Date();
    console.log(date.toLocaleDateString())
    console.log(date.getDay())
    console.log("这个月有" + this.getMonthDayCount(date) + "天");
    console.log("农历：" + lunarDay.lunarDay(date));
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
  monthFormat: function (date) {
    var weekDay = date.getDay();
    var month = [];

  },
  getMonthDayCount: function (date) {
    var month = date.getMonth() + 1
    switch(month) {
      case 1:
        return 31;
      case 2:
        var year = date.getFullYear();
        if((year%4==0&&year%100!=0)||year%400==0) {
          return 28;
        }
        return 29;
      case 3:
        return 31;
      case 4:
        return 30;
      case 5:
        return 31;
      case 6:
        return 30;
      case 7:
        return 31;
      case 8:
        return 31;
      case 9:
        return 30;
      case 10:
        return 31;
      case 11:
        return 30;
      case 12: 
        return 31;
      default:
        return 0;
    }
  }
})