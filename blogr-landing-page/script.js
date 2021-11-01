const buttons = document.querySelectorAll('.toggle');

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const parentNode = button.parentNode;
        console.log(parentNode);
        const mainNode = parentNode.parentNode;
        // console.log(mainNoe);
        mainNode.classList.toggle('active');
        mainNode.classList.toggle('dropdown-hide');
    })
})


const btnHamburger = document.querySelector('#btnHamburger');
const modal = document.querySelector('#menu_cont')
btnHamburger.addEventListener('click',function(){
    console.log("I have been clicked");
    if(btnHamburger.classList.contains('open')){
        btnHamburger.classList.remove('open');
        modal.classList.add('hidden');
    }
    else{
        btnHamburger.classList.add('open');
        modal.classList.remove('hidden');
    }
    
})
