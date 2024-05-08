function generateRandom() {
    const prviBroj = document.getElementById('prvi').innerText;
    const drugiBroj = document.getElementById('drugi').innerText;

    let rezultat = Math.random(prviBroj, drugiBroj);
    console.log(rezultat)
}