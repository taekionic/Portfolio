// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//let currentPage = location.href; // store url on load

//setInterval(function () {
//    if (currentPage != location.href) {
//        currentPage = location.href;
//    }
//}, 500);


//if (location.href.path = '/Home/Projects') { }

const menu_toggle = document.querySelector('.menu_toggle');
const navigation = document.querySelector('.navigation');
menu_toggle.onclick = function () {
    navigation.classList.toggle('active');
}

var windowsize = $(window).width();

$(window).resize(function () {
    var windowsize = $(window).width();
});

window.addEventListener('DOMContentLoaded', (event) => {
    $('.navigation').css({
        "transform": "translatex(0%)",
    })
})

$(".navlink").on('click', function () {
    var url = $(this).attr('href');
    if (window.location.pathname == url) {
        window.location.reload()
    }
    else {
        $('.navigation').css("transform", "translatex(-100%)")
    }
})

if (windowsize < 1150) {
    //if the window is greater than 440px wide then turn on jScrollPane..
    $('.images').remove()
}           

setTimeout(function () {
    document.getElementById('instruction').style.transition = '1s ease-out'
    document.getElementById('instruction').style.transform = 'scale(0)'
    setTimeout(function () { document.getElementById('instruction').remove() }, 6000)
}, 5000)


//var counter = 0
const margin = 96


    $(".portfoliocard").on('click', function () {
        //console.log($(this).index())
        $('.portfoliocard span').css("display", "none")
        $('.portfoliocard section').css("display", "none")
        $('.images').hide()
        var index = ($(this).index())

        $(this).siblings('.portfoliocard').css({
            "left": "0",
            "top": "30vh",
            "z-index": "2"
        })
        $(this).css({
            "left": "0",
            "top": "30vh",
            "z-index": "2"
        });
        $(this).addClass('hovered');
        $(this).siblings('.portfoliocard').addClass('hovered')
        $('#instruction').css("display", "none")

        $('#cardview').css({
            "transition": "1s ease-in",
            "max-width": "1oovw",
            "overflow": "hidden"
        })

        $(this).children('.portfoliocontent').css({
            "cursor": "auto"
        }, 1000)


        $(".returnbutton").on('click', function () {
            $('.portfoliowrapper').css({
                "transform": "500vw",
            })
            setTimeout(function () {
                window.location.reload();
            }, 500)

        })

        var currentaxis = (-($(this).index()) * 96)


        $('.nextbutton').on('click', function () {
            $('.nextbutton').data('clicked', true)
            nextaxis = currentaxis - 96
            currentaxis = nextaxis
                $('.portfoliocard').css({
                    "transform": "translate(" + currentaxis + "vw)"
                })
                return currentaxis
            })

        $('.prevbutton').on('click', function () {
            $('.prevbutton').data('clicked', true)
            prevaxis = currentaxis + 96
            currentaxis = prevaxis
                $('.portfoliocard').css({
                    "transform": "translate(" + currentaxis + "vw)"
                })
                return prevaxis
        })

        if ($('.nextbutton').data('clicked')) {
            $('.portfoliocard').css({
                "transform": "translate(" + nextaxis + "vw)"
            })
            $('.nextbutton').data('clicked', false)
        }
        else if ($('.prevbutton').data('clicked')) {
            $('.portfoliocard').css({
                "transform": "translate(" + prevaxis + "vw)"
            })
            $('.prevbutton').data('clicked', false)
        }
        else {
            $('.portfoliocard').css({
                "transform": "translate(" + currentaxis + "vw)"
            })
        }
    })






    const slider = document.getElementById('portfolio');
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = 'grabbing';
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
        slider.style.cursor = 'grab'
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
    })
