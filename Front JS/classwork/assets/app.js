let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let modal = document.querySelector(".modal_bg")
btn.onclick= function(){
    modal.style.display="flex";
    document.body.style.overflow="hidden"
}
btn1.onclick=function(){
    modal.style.display="none";
    document.body.style.overflow="auto"
}


