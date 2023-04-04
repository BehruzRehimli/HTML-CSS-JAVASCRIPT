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

console.log(ShortName("Behruz Rehimov"));