let btn = document.querySelector(".input .btn1")
let input = document.querySelector(".input .in");
let list = document.querySelector("#list")
let alert_primary=document.querySelector(".alert-primary")
let alert_danger=document.querySelector(".alert-danger")

let counter = 0
btn.onclick = function () {
    alert_primary.style.display="inline";
    counter++;
    setTimeout(() => {
        alert_primary.style.display="none";
    }, 2000);
 
    if (counter == 1) {
        let x = document.querySelector("#list span")
        x.style.display = "none"
    }
    let x = input.value;
    let div = list.appendChild(document.createElement("div"));
    let content = div.appendChild(document.createElement("p"));
    let button = div.appendChild(document.createElement("button"));
    button.innerHTML = 'Sil'
    content.innerHTML = `${counter}. ${x}`
    button.onclick = () => {
        alert_danger.style.display="inline";
        setTimeout(() => {
            alert_danger.style.display="none";
        }, 2000);
        div.style.display = "none"
        counter--;
        if (counter == 0) {
            let x = document.querySelector("#list span")
            x.style.display = "inline"
        }
        document.querySelector("#last span").innerHTML = `${counter}`
    }
    document.querySelector("#last span").innerHTML = `${counter}`
}
document.querySelector("#last span").innerHTML = `${counter}`

