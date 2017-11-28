$(document).ready(function(){
  $("h3").click(function(){
    $(this).next("p").toggle();
  });
});

//$(document).ready(function(){
//  $("p").click(function(){
//    $(this).previous("h3").toggle();
//  });
//});
