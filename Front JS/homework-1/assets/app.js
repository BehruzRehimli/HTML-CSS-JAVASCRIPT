document.getElementById('btn-1').onclick=function(){
    let question='Sayt görünsünmü?'
    if(confirm(question)!=true){
        document.body.style.display='none';
    }
}
document.getElementById('btn-2').onclick=function(){
    var input = Number(document.getElementById('in-2').value)
    if(input<18){
        alert("Diqqət!!! Sayta giriş 18 yaş üzəridir!")
    }
}
document.getElementById('btn-3').onclick = function() {
    var input = Number(document.getElementById("in-3").value.slice(-3))
    if (input>99 && input<200) {
        document.body.style.backgroundColor="yellow";
    }
    else if (input>199 && input<300) {
        document.body.style.backgroundColor="red";
    }
    else if (input>299 && input<400) {
        document.body.style.backgroundColor="grey";
    }
}



