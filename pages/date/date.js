// pages/date/date.js
var lunarDayHelper = require("../../utils/lunarDay.js");



Page({
  data:{
    months:"",
    url:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var url = options.page
    var selectDate = new Date(options.date)
    this.setData({
      selectDate : selectDate
    })

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
    this.setData({
      months:months,
      url : url
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
    var selectDate = this.data.selectDate;
    var today = new Date()
    for(var i = 1; i <= dayCount; i++) {
      
      //setDate方法是把date改成当天，返回的只是当天的时间戳
      var theDate = new Date(date.setDate(i));
      var styleClass = "";
      var lunarDay = lunarDayHelper.getLunarDay(theDate).substr(-2,2),
          dateNum = theDate.getDate();
      if (theDate.getFullYear() == selectDate.getFullYear() && theDate.getMonth() == selectDate.getMonth() && theDate.getDate() == selectDate.getDate()) {
        styleClass = "select-day";
      } 
      if (theDate.getFullYear() == today.getFullYear() && theDate.getMonth() == today.getMonth() && theDate.getDate() == today.getDate()) {
        styleClass =  "today " + styleClass
        //lunarDay = "  "
        dateNum = "今天" 
      } else if (theDate < today) {
        styleClass = "past";
      }
      
      var monthDay = {
        styleClass:styleClass,
        date: theDate.toLocaleDateString(),
        lunarDay:lunarDay,
        dateNum: dateNum
      }
      month.push(monthDay);
    }
    return month;
  },
  getMonthDayCount: function (date) {
    var month = date.getMonth() + 1;
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
      date.setFullYear(currentYear + 1);
      date.setMonth(0)
      return this.monthFormat(date);
    } else {      
      //第一个坑，setMonth(),setMont(1)会变成3月，因为2月没有31
      date.setDate(1)
      date.setMonth(currentMonth)
      return this.monthFormat(date)
    }
  },
  // dateTouchStart: function (e) {
  //   var date = e.currentTarget.dataset.date
  //   var months = this.data.months
  //   var isBreak = false;
  //   for(var i in months) {
  //     if(isBreak) {break;}
  //     for(var j in months[i].days) {
  //       if(date == months[i].days[j].date) {
  //         months[i].days[j].styleClass = "choose"
  //         //第二个坑，要setData之后才会更新到界面
  //         this.setData({
  //           months:months
  //         })
  //         isBreak = true;
  //         break;
  //       }
  //     }
  //   }    
  // },
  // dateTouchEnd: function (e) {
  //   var date = e.currentTarget.dataset.date
  //   var months = this.data.months
  //   var isBreak = false;
  //   for(var i in months) {
  //     if(isBreak) {break;}
  //     for(var j in months[i].days) {
  //       if(date == months[i].days[j].date) {
  //         months[i].days[j].styleClass = ""
  //         //第二个坑，要setData之后才会更新到界面
  //         this.setData({
  //           months:months
  //         })
  //         isBreak = true;
  //         break;
  //       }
  //     }
  //   } 
  // }
  catchClick: function () {}
})