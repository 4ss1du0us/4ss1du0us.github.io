$(document).ready(function () {
    try {
      $("#page-header").ripples({
        resolution: 512,
        dropRadius: 10, //px
        perturbance: 0.001, //干扰度
      });
    } catch (e) {
      $(".error").show().text(e);
    }
  });
  