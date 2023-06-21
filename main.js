//"use strict";
/*console.log("Hello, World!");
var name = "var";
console.log(name);

let na = "let";
console.log(na);

const name2 = "const";
console.log(name2);

let x = "lala";
let y = "bana";
console.log(x+y);

let arr = ['lal', 'wkwk'];
console.log(arr);
arr = [34,191,9191];
console.log(arr);*/

//alert("hello");

const lala = {
    name: "kot",
    age:25
};

const la = {
    name: "cat",
    age: 13
};

console.log(lala.name);
console.log(la.name);

const x = 92;
const y = 9;
console.log(x+y);

const butt = document.querySelector('#butt');
const hide_block = document.querySelector('#hide_block');
const text_under_pucture = document.querySelector('#pos_arti');
butt.addEventListener("click", function(){
    console.log("CLICK!!!");
    hide_block.classList.toggle('display_none_block');
    text_under_pucture.classList.toggle('display_none_block');

    if(hide_block.classList.contains('display_none_block') == true){
        butt.textContent = "Показать рекламу";
    }
    else{
        butt.textContent = "Скрыть рекламу";
    }
    
});
