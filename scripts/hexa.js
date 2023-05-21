let string = "";
let buttons = document.querySelectorAll('.btn');
let arr = Array.from(buttons);

function hexToDecimal(hexString) {
    let decimal = 0;
    let hexDigits = '0123456789ABCDEF';
    let bits = hexString.split('.');
    let integerPart = bits[0];
    let fractionalPart = bits[1] || '0';
    for (let i = 0; i < integerPart.length; i++) {
        decimal += hexDigits.indexOf(integerPart[i].toUpperCase()) * Math.pow(16, integerPart.length - 1 - i);
    }
    for (let i = 0; i < fractionalPart.length; i++) {
        decimal += hexDigits.indexOf(fractionalPart[i].toUpperCase()) * Math.pow(16, -(i + 1));
    }
    return decimal;
  }

arr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'Decimal'){
           string = hexToDecimal(string)
           document.querySelector('input').value = string;

        }
        else if(e.target.innerHTML == "AC" || e.target.innerHTML == 'Enter'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})