$(document).ready(function () {
    $("#loadMore").click(function () {
        if ($("#moreImages").hasClass("hide")) {
            $("#moreImages").slideDown('slow');
            $("#moreImages").removeClass("hide");
            $("#loadMore").removeClass("moreImg");
            $("#loadMore").addClass("lessImg");
            AOS.refresh();
            console.log('Refreshingg....')
        } else {
            $("#moreImages").slideUp('slow');
            $("#moreImages").addClass("hide");
            $("#loadMore").addClass("moreImg");
            $("#loadMore").removeClass("lessImg");
            $('html, body').animate({
                scrollTop: $("#beforeHide").offset().top
            }, 400);
            AOS.refresh();
            console.log('Refreshingg....')
        }
    });
});

slideTimer = setInterval(function () {
    $('#moreImages').slideUp();
    $("#moreImages").addClass("hide");
    $("#loadMore").addClass("moreImg");
    $("#loadMore").removeClass("lessImg");
}, 50000);

$(document).ready(function () {
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
        $('.animated-icon3').toggleClass('open');
    });
});

$(document).ready(function () {
    setTimeout(function () {
        $("#loadPage").slideUp('slow');
        // $("#root").slideDown('slow');
        $('body').css('height', '100% !important');
        $('#root').css('display', 'block');
        AOS.init({
            delay: 200,
            duration: 4000,
            startEvent: 'DOMContentLoaded',
        });
        AOS.refresh();
        console.log('Refreshingg....')
    }, 3100);

});