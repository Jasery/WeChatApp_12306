// pages/date/date.js
var lunarDayHelper = require("../../utils/lunarDay.js");



Page({
  data:{
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

    var date = new Date();

    var month = {}
    var months = []
    month.monthDescript = date.getFullYear() + "年" + (date.getMonth() + 1) + "月"
    month.days = this.monthFormat(date);

    months.push(month)  
    var nextMonth = {}
    nextMonth.days = this.getNextMonth(date);
    nextMonth.monthDescript = date.getFullYear() + "年" + (date.getMonth() + 1) + "月"
    months.push(nextMonth)
    
    var nNextMonth = {}
    nNextMonth.days = this.getNextMonth(date);
    nNextMonth.monthDescript = date.getFullYear() + "年" + (date.getMonth() + 1) + "月"
    months.push(nNextMonth)
    console.log(nNextMonth)
    this.setData({
      months:months
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
  monthFormat: function (date) {
    date.setDate(1)
    var weekDay = date.getDay();
    var month = [];
    for (var i = 0; i < weekDay; i++) {
      month.push({date:null});
    }
    var dayCount = this.getMonthDayCount(date);
    for(var i = 1; i <= dayCount; i++) {
      
      //setDate方法是把date改成当天，返回的只是当天的时间戳
      var theDate = new Date(date.setDate(i));
        var monthDay = {
          date: theDate.toLocaleDateString(),
          lunarDay:lunarDayHelper.getLunarDay(theDate).substr(-2,2),
          dateNum: theDate.getDate()
        }
        month.push(monthDay);
    }
    return month;
  },
  getMonthDayCount: function (date) {
    var month = date.getMonth() + 1
    switch(month) {
      case 1:
        return 31;
      case 2:
        var year = date.getFullYear();
        if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
         return 29;
        }
        return 28;
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
  },
  getNextMonth: function (date) {    
    var currentMonth = date.getMonth() + 1;
    if(currentMonth == 12) {
      var currentYear = date.getFullYear();
      date.setFullYear(currentYear + 1)
      date.setMonth(0)
      return this.monthFormat(date);
    } else {      
      //第一个坑，setMonth(),setMont(1)会变成3月，因为2月没有31
      date.setDate(1)
      date.setMonth(currentMonth)
      return this.monthFormat(date)
    }
  },
  dateClick: function (e) {
    console.log(e.currentTarget.dataset)
  }
})