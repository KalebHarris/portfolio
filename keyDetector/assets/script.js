document.onkeydown = function(event) {
  var id = event.keyCode;
  document.querySelector("p").innerHTML = id;
}
