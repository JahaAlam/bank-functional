function getInputdValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFiledValueString = inputField.value;
    const inputValue = parseFloat(inputFiledValueString);
    inputField.value = '';
    return inputValue;

}

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}