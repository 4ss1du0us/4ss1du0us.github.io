$(document).ready(function () {
    try {
      $("#page-header").ripples({
        resolution: 512,
        dropRadius: 10, //px
        perturbance: 0.005,
      });
    } catch (e) {
      $(".error").show().text(e);
    }
  });
  