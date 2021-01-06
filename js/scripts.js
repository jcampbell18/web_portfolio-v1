// Console
console.log('What is the Matrix?');

// Output Current Year
$('.currentYear').text( (new Date).getFullYear() );

//animateCSS
$('#JC').animateCSS('bounceInDown', function() {
    delay: 500,

    $(this).animateCSS('flip', {
        delay: 2000
    });

});

$('#nav-link1').hover( function() {
    $(this).animateCSS('heartBeat');
});

$('#nav-link2').hover( function() {
    $(this).animateCSS('heartBeat');
});

$('#nav-link3').hover( function() {
    $(this).animateCSS('heartBeat');
});

$('#nav-link4').hover( function() {
    $(this).animateCSS('heartBeat');
});


// lightGallery
$('#lightgallery').lightGallery({
    thumbnail: false,
    fullScreen: true,
    animateThumb: false,
    showThumbByDefault: false,
    zoom: false,
    download: false,
    mode: 'lg-zoom-in-big',
    scale: 1
});
