const textBox = document.getElementById('textbox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;

function convert(){
    const value = textBox.value

    if(toFahrenheit.checked){
        temp = Number(value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + ` °F`;
    } else if(toCelsius.checked){
        temp = Number(value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(2) + ` °C`;
    } else {
        result.textContent = "Please select a temperature to convert";
    }

}