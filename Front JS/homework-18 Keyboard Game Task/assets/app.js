let pln=document.querySelector(".plane")
let stat=document.querySelector(".station")
let pos=stat.getBoundingClientRect();
let gameOver=document.querySelector(".gameOver");
let btn=document.querySelector(".btn");
let x=0;
let y=0;

document.body.onkeyup= function(e){
    if (e.keyCode==39) {
        if(x<1460){
        x+=30;
        }
        pln.style.left=`${x}px`;
    }
    if (e.keyCode==37) {
        if(x>29){
        x-=30;
        }
        pln.style.left=`${x}px`;
    }
    if (e.keyCode==40) {
        if(y<770){
        y+=20;
        }
        pln.style.top=`${y}px`;
    }
    if (e.keyCode==38) {
        if(y>19){
        y-=20;
        }
        pln.style.top=`${y}px`;
    } 

    if(pos.top-75<y && pos.top+75>y && pos.left-210<x && pos.left+210>x){
        pln.style.display="none";
        gameOver.style.display="block";
        stat.style.display="none";
    }

    btn.onclick= function(){
        window.location.reload();
    }
}
