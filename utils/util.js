function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

  function getDayDescript(today, day) {  
    var todayDay = today.getDate()
    var theDay = day.getDate()
    if(day.getMonth() == today.getMonth() && theDay == todayDay && day.getFullYear() == today.getFullYear()) {
      return '今天'
    } else if (day.getMonth() == today.getMonth() && theDay == todayDay + 1 && day.getFullYear() == today.getFullYear()) {
      return '明天'
    } else if (day.getMonth() == today.getMonth() && theDay == todayDay + 2 && day.getFullYear() == today.getFullYear()) {
      return '后天'
    } else {
      var weekNum = day.getDay();
      switch(weekNum) {
        case 0:
          return '星期日'
        case 1:
          return '星期一'
        case 2:
          return '星期二'
        case 3:
          return '星期三'
        case 4:
          return '星期四'
        case 5:
          return '星期五'
        case 6:
          return '星期六'
        default:
          return ''
      }
    } 
  }
module.exports = {
  formatTime: formatTime,
  getDayDescript:getDayDescript
}
