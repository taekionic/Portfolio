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

$(".portfoliocard").on('click', function () {
    $('.portfoliocard span').css("display", "none")
    $('.portfoliocard section').css("display", "none")
    //$(this).siblings('.portfoliocard').css({
    //    "margin-top": "100%",
    //    "margin-bottom": "100%",
    //    "position": "absolute",
    //    "top": "-25%",
    //    "z-index": "1",
    //    "gap":"100%"
    //})
    $(this).siblings('.portfoliocard').children(".portfoliocontent:not('h2')").css({
           "display":"none",
    })
    $(this).addClass('hovered');
    $('#instruction').css("display", "none")
    $(this).css({
        "left": "0",
        "top": "30vh",
        "z-index":"2"
    });
    $(this).siblings('.portfoliocard').remove()
    $(this).children('.portfoliocontent')
    $(this).children('.portfoliocontent').css({
        "cursor": "auto"
    }, 1000)

    $(".nextbutton").on('click', function () {
        $(this).siblings('.portfoliocard').show()
        
    })

    $("#returnbtn").on('click', function () {
        $('.portfoliocard').css({
            "transform": "translatex(-110vw)",
            "transition":".5s ease-in-out"
        })
        setTimeout(function () {
            window.location.reload();
        },500)
        
    })
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
});