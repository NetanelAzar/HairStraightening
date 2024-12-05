// פונקציה לעקוב אחרי גלילת הדף
window.addEventListener('scroll', function() {
    var scrollY = window.scrollY; // מקבל את כמות הגלילה

    // עבור כל אייקון עם class="straightener"
    var icons = document.querySelectorAll('.straightener');
    icons.forEach(function(icon) {
        // חשב את כיוון הסיבוב לפי כמות הגלילה
        var rotateDegree = scrollY / 5;
        
        // עדכון האנימציה של האייקון (סיבוב) בהתאם לגלילה
        icon.style.transform = 'rotate(' + rotateDegree + 'deg)';
    });
});