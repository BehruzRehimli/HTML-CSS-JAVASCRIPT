let dot=document.querySelectorAll(".dot");
let img=document.querySelector("img")


dot.forEach(d => {
    d.onclick= function(){
        for(let x of dot){
            x.classList.remove("active")
        }
        d.classList.add("active");
        img.src=`./assets/images/${d.id}.jpg`
    }
});