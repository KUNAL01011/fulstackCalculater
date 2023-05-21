let string = "";
let buttons = document.querySelectorAll('.btn');
let arr = Array.from(buttons);

function binaryToDecimal(binaryString) {
    let decimal = 0;
    let bits = binaryString.split('.');
    console.log(bits)
    let integerPart = bits[0];
    console.log(integerPart)
    let fractionalPart = bits[1] || '0';
    console.log(fractionalPart);
    for (let i = 0; i < integerPart.length; i++) {
        decimal += parseInt(integerPart[i]) * Math.pow(2, integerPart.length - 1 - i);
        console.log(integerPart[i]);
        console.log(integerPart.length -1 -i);
    }
    for (let i = 0; i < fractionalPart.length; i++) {
        decimal += parseInt(fractionalPart[i]) * Math.pow(2, -(i + 1));
    }
    return decimal;
  }

arr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'Decimal'){
           string = binaryToDecimal(string)
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

