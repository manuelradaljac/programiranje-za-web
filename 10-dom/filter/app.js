let selectedBtn = ''
function onPhoneClicked(phoneName) {
    const btn = document.querySelector(`.${phoneName}`)
    if (btn.classList.contains("filter-button-clicked") === false) {
        if (selectedBtn !== '') {
            const oldBtn = document.querySelector(`.${selectedBtn}`)
            oldBtn.classList.remove("filter-button-clicked")
        }
        btn.classList.add("filter-button-clicked")
        selectedBtn = phoneName
    } else {
        btn.classList.remove("filter-button-clicked")
    }
}


