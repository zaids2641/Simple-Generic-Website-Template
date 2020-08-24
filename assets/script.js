// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]');
var scroll = new SmoothScroll('input[type=radio]');

var modal = document.getElementById('exampleModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.img');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.img').click(function() {
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var img = document.getElementsByClassName("img01")[0];
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//    modal.style.display = "none";
//}

img.onclick = function() {
    modal.style.display = "none";
}

// Animate Counter
$('.number').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});

let a = 0;
$(window).scroll(function() {
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect > .number");
    }
});