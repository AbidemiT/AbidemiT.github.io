
  var date = new Date()
var year = date.getFullYear()
var days = date.getMonth()
    if (days <= 11 ) {
        var day = days +1
    }
var  today = "Todays Date and Time is :"
var dates = date.getDate()
var hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
var min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
var am_pm = date.getHours() >= 12 ? "PM" : "AM";
var sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
var week = date.getDay() 
    if (week === 0) {
     var  weeks = 'Sunday' 
      console.log(weeks)
    } else if (week === 1) {
      var  weeks = 'Monday' 
      console.log(weeks)
    }
    else if (week === 2) {
      var  weeks = 'Tuesday' 
      console.log(weeks)

    } else if (week === 3) {
      var  weeks = 'Wednesday' 
      console.log(weeks)
    } else if (week === 4) {
      var  weeks = 'Thursday' 
      console.log(weeks)
    }
     else if (week === 5) {
      var  weeks = 'Friday' 
      console.log(weeks)
    } 
    else if (week === 6) {
      var  weeks = 'Saturday' 
      console.log(weeks)
    }else {
      console.log('Have a Lovely Day')
    }



  
// console.log(year)
// console.log(day)
// console.log(today +" "+ dates+"-"+day+"-"+year+" "+hour + ":" + min + ":" + sec);
// console.log(dates)
// console.log(hour + ":" + min + ":" + sec)
function changeText(){
  var date = new Date()
  var year = date.getFullYear()
  var days = date.getMonth()
      if (days <= 11 ) {
          var day = days +1
      }
  var  today = "Todays Date and Time is :"
  var dates = date.getDate()
  var hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  var min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  var am_pm = date.getHours() >= 12 ? "PM" : "AM";
  var sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  var week = date.getDay() 
      if (week === 0) {
       var  weeks = 'Sunday' 
        console.log(weeks)
      } else if (week === 1) {
        var  weeks = 'Monday' 
        console.log(weeks)
      }
      else if (week === 2) {
        var  weeks = 'Tuesday' 
        console.log(weeks)
  
      } else if (week === 3) {
        var  weeks = 'Wednesday' 
        console.log(weeks)
      } else if (week === 4) {
        var  weeks = 'Thursday' 
        console.log(weeks)
      }
       else if (week === 5) {
        var  weeks = 'Friday' 
        console.log(weeks)
      } 
      else if (week === 6) {
        var  weeks = 'Saturday' 
        console.log(weeks)
      }else {
        console.log('Have a Lovely Day')
      }
  
    var heading = document.getElementById('heading')
    heading.innerHTML =

    (weeks+"<br>"+dates +"-" + day+"-"+year+"<br>"+hour+ ":"+min + ":"+sec  +" " + am_pm);
 
  }
  setInterval(changeText, 1000)
