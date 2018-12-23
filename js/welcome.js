$(function() {
  setTimeout(function() {
    $(".fly-in-text").removeClass("hidden");
  });
  setTimeout(function() {
    $(".allblack").remove();
  }, 7000);
  function leave() {
    window.location = "index.html";
  }
  setTimeout("leave()", 7000);
});

//Using
