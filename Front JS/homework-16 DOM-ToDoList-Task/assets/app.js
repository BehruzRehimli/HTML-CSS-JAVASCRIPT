let btn = document.querySelector(".input .btn")
let input = document.querySelector(".input .in");
let list = document.querySelector("#list")

let counter = 0
btn.onclick = function () {
    counter++;
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

