let string = "";
let buttons = document.querySelectorAll('.btn');
// console.log(buttons)
let arr = Array.from(buttons);


function Binary(decimalNumber){
    let binaryNumber = decimalNumber.toString(2);
    return binaryNumber;
}
function Octal(decimalNumber){
    let octalNumber = decimalNumber.toString(8);
    return octalNumber;
}
function Hexa(decimalNumber){
    let hexaNumber = decimalNumber.toString(16)
    return hexaNumber;
}
arr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // console.log(e.target.innerHTML)
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "binary"){
            string = Binary(Number(string));
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "octal"){
            string = Octal(Number(string));
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "hexa"){
            string = Hexa(Number(string));
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

