
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

window.onload=function()
{
var target_date= 'May 31 2016 23:59:59 GMT+05:30';
document.getElementById("endtime").innerHTML=target_date;
var time_left=getTimeRemaining(target_date);
var day_count=time_left.days;
var hours_count=time_left.hours;
var min_count=time_left.minutes;
var sec_count=time_left.seconds;
document.getElementById("day").innerHTML=day_count<10?'0'+day_count:day_count;
document.getElementById("hours").innerHTML=hours_count<10?'0'+hours_count:hours_count;
document.getElementById("min").innerHTML=min_count<10?'0'+min_count:min_count;
document.getElementById("sec").innerHTML=sec_count<10?'0'+sec_count:sec_count;
setInterval(function()
{
if(day_count>=0||hours_count>=0||min_count>=0 || sec_count>=0)
{
	sec_count--;
	if(sec_count<0)
	{
	sec_count=59;
	min_count--;
	}
	if(min_count<0)
	{
	min_count=59;
	hours_count--;
	}
	if(hours_count<0)
	{
	hours_count=23;
	day_count--;
	}
	if(day_count<0)
	{
	day_count=0;
	min_count=0;
	hours_count=0;
	sec_count=0;
	}
	document.getElementById("day").innerHTML=day_count<10?'0'+day_count:day_count;
document.getElementById("hours").innerHTML=hours_count<10?'0'+hours_count:hours_count;
document.getElementById("min").innerHTML=min_count<10?'0'+min_count:min_count;
document.getElementById("sec").innerHTML=sec_count<10?'0'+sec_count:sec_count;
}
},1000);
};
