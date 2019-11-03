$(".nav-header a").click(function() {
    var target = $(this).attr('href');
    
    $('html, body').animate({
        scrollTop: $(target).offset().top - offset
    }, 1000);
});

let offset = 60;

function myFunction(x) {
    if (x.matches) {
        offset = 100;
    } else {
        offset = 60;
    }
}
  
var x = window.matchMedia("(max-width: 700px)")
myFunction(x)
x.addListener(myFunction)