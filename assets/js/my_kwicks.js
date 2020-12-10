window.addEventListener('load', initFlexSlide, false);

function initFlexSlide() {
    let slides = document.getElementsByClassName('slides')[0];
    let slides_li = slides.getElementsByTagName('li');
    for (const key in slides_li) {
        if (slides_li.hasOwnProperty(key)) {
            const element = slides_li[key];
            element.style.display = "inline-block";
            element.style.margin = -2;
            element.addEventListener('mouseover', addClassActive, true);
            element.addEventListener('mouseout', removeClassActive, true);
        }
    }
}


function addClassActive(e) {
    let li = e.target.parentNode;
    li.className = "active";
}

function removeClassActive(e) {
    let li = e.target.parentNode;
    li.className = "";
}