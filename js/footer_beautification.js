// 动态心跳
$(document).ready(function(e){
    $('.copyright').html('©2023 <i class="fa-fw fas fa-heartbeat card-announcement-animation cc_pointer"></i> By 4ss1du0us');
})

$(document).ready(function(e){
    show_date_time();
})

//本站运行时间
function show_date_time(){
$('.framework-info').html('小站已运行<span id="span_dt_dt" style="color: #ef4136;"></span>');
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("3/14/2023 0:0:0");
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
span_dt_dt.innerHTML='<font style=color:#9932CC>'+daysold+'</font> 天 <font style=color:#4169E1>'+hrsold+'</font> 时 <font style=color:#DAA520>'+minsold+'</font> 分 <font style=color:#32CD32>'+seconds+'</font> 秒';
}
