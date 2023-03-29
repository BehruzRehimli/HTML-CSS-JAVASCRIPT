document.getElementById('btn').onclick= function(){
    var x = Number(document.getElementById('amount').value)
    var y = Number(document.getElementById('percent').value)
    var z = Number(document.getElementById('time').value)

    document.getElementById('total').innerHTML= `${Math.ceil(x*(100+y)/100)} AZN`
    document.getElementById('monthly').innerHTML= `${Math.ceil((x*(100+y)/100)/z)} AZN`
    document.getElementById('percently').innerHTML= `${Math.ceil((x*(100+y)/100)-x)} AZN`
}