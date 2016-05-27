var min_count,sec_count,stop;
function initialiser()
{	clearInterval(stop);
    min_count=document.getElementById("target_min").value;
    sec_count=document.getElementById("target_sec").value;
	if(min_count=="" || sec_count=="")
	alert("Please fill in the fields");
	else
	{
	document.getElementById("min").innerHTML=min_count<10?'0'+min_count:min_count;
    document.getElementById("sec").innerHTML=sec_count<10?'0'+sec_count:sec_count;
    main_timer();
	}
}
function main_timer()
{
clearInterval(stop);
stop=setInterval(function(){
if(sec_count==0)
	{
	min_count-=1;
	sec_count=59;
	}
else
sec_count--;
document.getElementById("min").innerHTML=min_count<10?'0'+min_count:min_count;
document.getElementById("sec").innerHTML=sec_count<10?'0'+sec_count:sec_count;
},1000);
}
function pause_timer()
{
clearInterval(stop);
}
$(document).ready(function (e) {
    $('#Submit').click(function (e) {
	initialiser();
	});
});
