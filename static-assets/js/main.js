 const scrollIndicatorButton = document.getElementById('scrollIndicatorButton');
 window.addEventListener('scroll', () => {
     (window.scrollY > 5) ? scrollIndicatorButton.style.opacity = 0: scrollIndicatorButton.style.opacity = 1;
 });