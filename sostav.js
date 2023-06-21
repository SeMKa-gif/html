"use strict"

const fff = document.querySelectorAll("[div_for_js='forma_for_js']");
console.log(fff);

fff.forEach(function(item){

    item.addEventListener('click', function(){
        console.log('clicck');
        this.nextElementSibling.classList.toggle('display_none_block');
        //fff.classList.toggle('display_none_block');
    })
})
