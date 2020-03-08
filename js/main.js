// form script

$(document).ready(function () {
    var current_fs, next_fs, previous_fs;
    var left, opacity, scale;
    var animating;
    $(".steps").validate({
        errorClass: 'invalid',
        errorElement: 'span',
        errorPlacement: function (error, element) {
            error.insertAfter(element.next('span').children());
        },
        highlight: function (element) {
            $(element).next('span').show();
        },
        unhighlight: function (element) {
            $(element).next('span').hide();
        }
    });
    $(".next").click(function () {
        $(".steps").validate({
            errorClass: 'invalid',
            errorElement: 'span',
            errorPlacement: function (error, element) {
                error.insertAfter(element.next('span').children());
            },
            highlight: function (element) {
                $(element).next('span').show();
            },
            unhighlight: function (element) {
                $(element).next('span').hide();
            }
        });
        if ((!$('.steps').valid())) {
            return true;
        }
        if (animating) return false;
        animating = true;
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        next_fs.show();
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now, mx) {
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale(' + scale + ')'
                });
                next_fs.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutExpo'
        });
    });
    $(".submit").click(function () {
        $(".steps").validate({
            errorClass: 'invalid',
            errorElement: 'span',
            errorPlacement: function (error, element) {
                error.insertAfter(element.next('span').children());
            },
            highlight: function (element) {
                $(element).next('span').show();
            },
            unhighlight: function (element) {
                $(element).next('span').hide();
            }
        });
        if ((!$('.steps').valid())) {
            return false;
        }
        if (animating) return false;
        animating = true;
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        next_fs.show();
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now, mx) {
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale(' + scale + ')'
                });
                next_fs.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutExpo'
        });
    });
    $(".previous").click(function () {
        if (animating) return false;
        animating = true;
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        previous_fs.show();
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now, mx) {
                opacity = 1 - now;
                current_fs.css({
                    'left': left
                });
                previous_fs.css({
                    'transform': 'scale(' + scale + ')',
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutExpo'
        });
    });
});

// form script for loan
var range = $('.input-range'),
    value = $('.range-value');

value.html(range.attr('value') + ' ILS');

range.on('input', function () {
    value.html(this.value + ' ILS');
});


// script for propose group
var header = document.getElementById("labelgroup");
var btns = header.getElementsByClassName("proposelabel");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("labelactive");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" labelactive", "");
        }
        this.className += " labelactive";
    });
}


// script for gender group
var header = document.getElementById("gander", "ganderP");
var btns = header.getElementsByClassName("gander-label");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("ganderactive");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" ganderactive", "");
        }
        this.className += " ganderactive";
    });
}