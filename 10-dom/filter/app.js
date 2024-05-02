function selectFilter(btn) {
    document.querySelector(".mjmne").innerHTML = btn.innerHTML;
    btn.classList.toggle("filter-button-selected");
}

function onIphoneClicked() {
    const btn = document.querySelector(".iphone-btn")
    if (btn.classList.contains("filter-btn-clicked") === false) {
        btn.classList.add("filter-btn-clicked")
    } else {
        btn.classList.remove("filter-btn-clicked")
    }
}

function onSamsungClicked() {
    const btn = document.querySelector(".samsung-btn")
    if (btn.classList.contains("filter-btn-clicked") === false) {
        btn.classList.add("filter-btn-clicked")
    } else {
        btn.classList.remove("filter-btn-clicked")
    }
}

function onXiaomiClicked() {
    const btn = document.querySelector(".xiaomi-btn")
    if (btn.classList.contains("filter-btn-clicked") === false) {
        btn.classList.add("filter-btn-clicked")
    } else {
        btn.classList.remove("filter-btn-clicked")
    }
}