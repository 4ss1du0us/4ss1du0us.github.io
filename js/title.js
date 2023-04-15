//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = "😫记得回来~ | 4ss1du0us's Blog";
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = "😘欢迎回来~ | 4ss1du0us's Blog";
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});