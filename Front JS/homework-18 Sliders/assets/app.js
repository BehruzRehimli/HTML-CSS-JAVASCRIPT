let dots=document.querySelector(".dots")
let img=document.querySelector("img")
let img_src=[
    "./assets/images/1.jpg",
    "./assets/images/2.jpg",
    "./assets/images/3.jpg",
    "./assets/images/4.jpg",
    "./assets/images/5.jpg",
]
for(let i=0;i<img_src.length;i++){
    let d=document.createElement("div");
    d.id=`${i+1}`;
    d.classList.add("dot");
    dots.appendChild(d);
}
let dot=document.querySelectorAll(".dot");


let count=0;
img.src=img_src[count]
dot[count].classList.add("active");
setInterval(() => {
    count++;
    if (count>img_src.length) {
        count=1;
    }
    img.src=img_src[count-1];
    for(let x of dot){
        x.classList.remove("active")
    }
    dot[count-1].classList.add("active");
}, 3000);

dot.forEach(d => {
    d.onclick= function(){
        for(let x of dot){
            x.classList.remove("active")
        }
        count=d.id-1;
        d.classList.add("active");
        img.src=img_src[d.id-1]
    }
});