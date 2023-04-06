function ChangeColor(){
    let x=Math.floor(Math.random()*255);
    let y=Math.floor(Math.random()*255);
    let z=Math.floor(Math.random()*255);

    document.body.style.backgroundColor =`rgb(${x},${y},${z})`
};

setInterval(() => {
    ChangeColor();
}, 5000);


function ShortName(name){
    
    if(typeof name=='string'&&name.includes(' ')){
        let index=0
        let short=''
        short=short+name[0]+name[1]
        for (let i = 0; i < name.length; i++) {
            if (name[i]==' ') {
                index=i+1
            }
        }
        short=short+name[index]+name[index+1]
        return short;
    }
}


function zero(number){
    let input=number+''
    let counter=0;
    for(let x of input){
        if(x==0){
            console.log(x)
            counter++;
        }
    }
    return counter;
}
console.log(zero(10000));


