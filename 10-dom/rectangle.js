let isYellow = false;
function changeColor() { 
    const div = document.querySelector('.int-div');
    if (isYellow) {    
        div.classList.add('int-div-mouse-over');
    } else {
        div.classList.remove('int-div-mouse-over');
    }
    isYellow = !isYellow;
}
