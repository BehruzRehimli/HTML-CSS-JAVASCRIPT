
function cem(){
    var i1=parseFloat(document.getElementById("i1").value);
    var i2=parseFloat(document.getElementById("i2").value);
    var result=i1+i2;
    document.getElementById('result').innerHTML= result;
}
function ferq(){
    var i1=parseFloat(document.getElementById("i1").value);
    var i2=parseFloat(document.getElementById("i2").value);
    var result=i1-i2;
    document.getElementById('result').innerHTML= result;
}
function hasil(){
    var i1=parseFloat(document.getElementById("i1").value);
    var i2=parseFloat(document.getElementById("i2").value);
    var result=i1*i2;
    document.getElementById('result').innerHTML= result;
}
function bolme(){
    var i1=parseFloat(document.getElementById("i1").value);
    var i2=parseFloat(document.getElementById("i2").value);
    var result=i1/i2;
    document.getElementById('result').innerHTML= result;
}