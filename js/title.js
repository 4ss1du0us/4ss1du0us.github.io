// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.querySelector('[rel="icon"]').setAttribute('href', "/img/favicon.ico");
        document.title = '(っ °Д °;)っ 访问的页面不存在了';
        clearTimeout(titleTime);
    }
    else {
        document.querySelector('[rel="icon"]').setAttribute('href', "/img/favicon.ico");
        document.title = '(●\'◡\'●)噫又好啦 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
