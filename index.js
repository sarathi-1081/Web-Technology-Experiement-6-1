function bgcolorchange() {
  var div = document.getElementById("box");
  var bgcolor = document.getElementById("bgcolor").value;
  div.style.backgroundColor = bgcolor;
}

function textcolchange() {
  var div = document.getElementById("box");
  var textcol = document.getElementById("textcolor").value;
  div.style.color = textcol;
}

function textsize() {
  var div = document.getElementById("box");
  var textsize = document.getElementById("fontsize").value;
  div.style.fontSize = textsize + "px";
}

function widthchange() {
  var div = document.getElementById("box");
  var width = document.getElementById("boxwidth").value;
  div.style.width = width + "px";
}

function heightchange() {
  var div = document.getElementById("box");
  var height = document.getElementById("boxheight").value;
  div.style.height = height + "px";
}

function borderRadius() {
  var div = document.getElementById("box");
  var radius = document.getElementById("myslider").value;
  div.style.borderRadius = radius + "px";
}
