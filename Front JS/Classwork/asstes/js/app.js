function calculate(){
    if(isNaN(document.getElementById('input').value)){
        alert('Reqem daxil edin!')
    }
    else{
        var result= (document.getElementById('input').value**2)*Math.PI 
        console.log(result)
    }

}
var a=0
function plus(){
    a++;
    document.getElementById('result').innerHTML= a
}
function minus(){
    if(a==0){
    document.getElementById('result').innerHTML= a
    }
    else{
        a--
        document.getElementById('result').innerHTML= a
    }
}


document.getElementById('box').onmouseover= function(){
    var a = Math.floor(Math.random()*100)
    var b = Math.floor(Math.random()*100)
    document.getElementById('box').style.right = `${a}%`
    document.getElementById('box').style.top = `${b}%`
}