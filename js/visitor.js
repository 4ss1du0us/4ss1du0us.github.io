fetch('https://api.gmit.vip/Api/UserInfo').then(data=>data.json()).then(data=>{
    let html = '<style>.visitor_location{color:#cb4c46;font-weight:bold;}.visitor_ip{color:#2d80c2;font-weight:bold;}</style>'
    html += '<div class="visitor">'
    html += '欢迎来自 ' + '<span class="visitor_location">' + data.data.location + '</span>' + ' 的小伙伴！'
    html += '</br>'
    html += '访问IP：' + '<span class="visitor_ip">' + data.data.ip + '</span>'
    html += '</div>'
    document.getElementById('visitor-container').innerHTML = html
}).catch(function(error) {
    console.log(error);
});
