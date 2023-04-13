let data = JSON.parse(localStorage.getItem("wish"));
let wish_count=document.querySelector("header nav span")
wish_count.innerHTML=data.length
let x='';
let wish_list=document.querySelector(".wish_list")
for(let d of data){
    x+=`
    <div id="${d.Id}" class="item d-flex align-items-center">
    <img src="${d.Img}" alt="">
    <h5>${d.Name}</h5>
    <h5>${d.Price} AZN</h5>
    <input class="count" type="number" value="${d.Count}" min="0" >
    <h5>${(d.Price*d.Count).toFixed(2)} AZN</h5>
    <a href="#" class="btn btn-danger">Delete</a>
</div>
    `
}
wish_list.innerHTML=x;
let inp=document.querySelector("input")
inp.onchange=function(){
    console.log(this.value);
}


let items=document.querySelectorAll(".item .btn")
let newData;
for(let item of items){
    item.onclick=e=>{
        e.preventDefault();
        newData=[];
        let rmv_id=item.parentElement.id;
        data=JSON.parse(localStorage.getItem('wish'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].Id!==rmv_id) {
                newData.push(data[i])
            }
            
        }
        wish_count.innerHTML=newData.length;
        item.parentElement.remove();
        localStorage.setItem("wish",JSON.stringify(newData))
    }
}

let clt=document.querySelectorAll(".item .count")
for(let x of clt){
    x.onchange= function(){
        let change_id=this.parentElement.id;
        data=JSON.parse(localStorage.getItem('wish'));
        for(let y of data){

            if (y.Id==change_id) {
                y.Count=this.value;
                this.nextElementSibling.innerHTML=(y.Count*y.Price).toFixed(2) +" AZN"
            }
        }
        localStorage.setItem("wish",JSON.stringify(data))
    }
}


