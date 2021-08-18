jQuery(function($) {

    // ------------------------------------
    // PreLoader
    // ------------------------------------

    (function() {
        $('#preloader').delay(200).fadeOut('slow');
    }());

    //Here i try to animate my Skeelz bars

    var animated = false;

    window.addEventListener('scroll', function(e) {
        if (!animated) {
            if (isVisible($('#jumpSkills')[0])) {
                animateProgressBars();
                animated = true;
            }
        }
    });

    function animateProgressBars() {
        $(".progress-bar").each(function() {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            });

            $(this).prop('Counter', 0).animate({
                Counter: $(this).attr('aria-valuenow')
            }, {
                duration: 2000,
                step: function(now) {
                    $(this).closest(".progress-wrapper")
                        .find(".progressbar-number")
                        .text(Math.ceil(now));
                }
            });
        });
    }

    function isVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }
}); // JQuery end