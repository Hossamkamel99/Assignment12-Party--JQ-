$('.openbtn').hover(function () {
    $(this).css('color', 'black');
}, function () {
    $(this).css('color', 'white');

})
function toggleBtn() {
    $('.side-items').toggleClass('d-none', 'd-flex');
}

$('.openbtn').click(function () {
    toggleBtn()
})

$('.closebtn').click(function () {
    toggleBtn()
})


$('.singer').click( function () {
    let clicked = $(this).next('.singer-details');
    $('.singer-details').not(clicked).slideUp();
    clicked.slideToggle();
});

$(document).ready(function() {
    var targetDate = new Date(2023, 11, 5, 0, 0, 0); // December is 11

    function updateCountdown() {
        var currentDate = new Date();
        var timeDifference = targetDate - currentDate;
        if (timeDifference <= 0) {
            $('#Duration').html('<div class="vh-50 text-center text-warning fa-9x position-relative">Countdown expired</div>');
            return;
        }
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        $('.days').text(days + " d");
        $('.hours').text(hours + " h");
        $('.minutes').text(minutes + " m");
        $('.seconds').text(seconds + " s");
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();
});


$('.charCount').text('100')
$('.countableText').on('input',function(){
    let char = $('.countableText').val().length;
    if (char <= 100) {
        $('.charCount').text(100 - char);
        $('.sendBtn').removeClass('disabled');
    } else {
        this.value = this.value.substring(0, 100);
        $('.charCount').text("only 100 characters allowed");
        $('.sendBtn').addClass('disabled');
    }
});