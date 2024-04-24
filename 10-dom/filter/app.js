function selectFilter(btn) {
    document.querySelector(".mjmne").innerHTML = btn.innerHTML;
    btn.classList.toggle("filter-button-selected");   
}