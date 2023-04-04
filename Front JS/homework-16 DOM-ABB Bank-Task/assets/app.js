let search=document.querySelector("#search")
let input=document.querySelector(".input")
let language=document.querySelector("#language")
let d_menu=document.querySelector(".dropdown-menu")
let arrow=document.querySelector(".close")
let cls=document.querySelector(".fa-x")

search.onclick=()=>{
    input.classList.toggle("d-none")}
language.onclick=()=>{
    d_menu.classList.toggle("d-none")
    arrow.classList.toggle("open")
}
cls.onclick=()=>{
    input.classList.add("d-none")
}