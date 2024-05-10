function generateRandom() {
    const input1 = document.querySelector('.first');
    const input2 = document.querySelector('.second');
    const errorMessage = document.querySelector('.warning-p');
    let input1Value = input1.value;
    let input2Value = input2.value;
    const generatedNumberParagraph = document.querySelector('.generated-number');

    if (input1Value === 0) {
        errorMessage.innerHTML = 'First input is empty';
        setTimeout(() => {
            errorMessage.innerHTML = ''; 
         }, 3000);
        return;
    }

    if (input2Value === 0) {
        errorMessage.innerHTML = 'Second input is empty';
        setTimeout(() => {
            errorMessage.innerHTML = ''; 
         }, 3000);
        return;
    }

    if (input2Value <= input1Value) {
        errorMessage.innerHTML = 'Second number must be smaller than the first number';
        setTimeout(() => {
            errorMessage.innerHTML = ''; 
         }, 3000);
        return
    }

    input1Value = Number(input1Value);
    input2Value = Number(input2Value);

    const randomNumber = Math.floor(Math.random() * (input2Value - input1Value) + input1Value);
    generatedNumberParagraph.innerHTML = `Generated number is ${randomNumber}`
}
