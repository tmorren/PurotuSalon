/* Navigation starts as transparent, then snaps to top when scrolling*/
var header = $('header');
var range = 200;

$(window).on('scroll', function () {
  
    var scrollTop = $(this).scrollTop();
    var offset = header.offset().top;
    var height = header.outerHeight();
    offset = offset + height / 2;
    var calc = 1 - (scrollTop - offset + range) / range;
  
    header.css({ 'opacity': calc });
  
    if ( calc > '1' ) {
      header.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      header.css({ 'opacity': 0 });
    }
  
});

/**************************************************************/
/* The following functions fix issues with resizing of window */
/**************************************************************/
$(document).ready(function(){

    var menuToggle = 1;
    $('#mobile-icon').click( function() {
        
        /* First if is when the menu will be displayed*/
        if (menuToggle == 1) {
            $('#menuItems').css({'display' : 'block'});
            menuToggle = 2;
        } else {
            $('#menuItems').css({'display' : 'none'});
            menuToggle = 1;
        }
    });

    /* Will close the menu on mobile if link is clicked */
    $("a").click( function(){
        if (window.innerWidth > 1000) {
            $('#menuItems').css({'display' : 'block'});
        } else {
            $('#menuItems').css({'display' : 'none'});
        }
    })
});



/* When window is resized, from mobile width to desktop
   width, the menu will still appear */
window.onresize = Resize;

function Resize (){
    if (window.innerWidth > 1000) {
        $('#menuItems').css({'display' : 'block'});
    } else {
        $('#menuItems').css({'display' : 'none'});
    }
}