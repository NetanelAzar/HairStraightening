document.addEventListener("DOMContentLoaded", function () {
    // יצירת המודל
    var myModal = new bootstrap.Modal(document.getElementById('specialOfferModal'));

    // המתן 10 שניות ואז פתח את המודל
    setTimeout(function() {
        myModal.show();
    }, 10000); // 10000 מילישניות = 10 שניות

    // סגירת המודל בעזרת כפתור
    var closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        myModal.hide();
    });
});