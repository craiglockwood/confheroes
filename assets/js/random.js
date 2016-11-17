var image = new Array ();
image[0] = "assets/img/covers/3.png";
image[1] = "assets/img/covers/4.png";
image[2] = "assets/img/covers/5.png";
image[3] = "assets/img/covers/6.png";
var size = image.length
var x = Math.floor(size*Math.random())

$('#random1').attr('src',image[x]);
$('#random2').attr('src',image[x]);
$('#random3').attr('src',image[x]);
$('#random4').attr('src',image[x]);
$('#random5').attr('src',image[x]);
$('#random6').attr('src',image[x]);
$('#random7').attr('src',image[x]);
$('#random8').attr('src',image[x]);

