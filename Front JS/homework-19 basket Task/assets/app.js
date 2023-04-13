if (localStorage.getItem("wish")===null) {
    localStorage.setItem("wish",JSON.stringify([]))
}
let wish_count=document.querySelector("header nav span")
let counter=0;
wish_count.innerHTML=JSON.parse(localStorage.getItem("wish")).length;
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data =>{
                let x='';
                data.forEach(p => {
                    let name= p.title.length>20 ? p.title.slice(0,20)+'...' : p.title
                   x+=`
                   <div class="col-lg-3 col-md-4 col-sm-6">
                   <div class="card" id="${p.id}">
                       <img class="card-img-top" src="${p.image}" alt="Card image cap">
                       <div class="card-body ps-4">
                         <h5 class="card-title">${p.price} AZN</h5>
                         <p class="card-text">${name}</p>
                         <div class="text-end">
                         <a href="#" class="btn btn-primary">Add to cart</a>
                       </div>                       
                       </div>
                     </div>
               </div>
                   ` 
                }
                );

                document.querySelector(".cards").innerHTML=x
            })
            .catch(err=>console.log(err))



setTimeout(() => {
    let btn=document.querySelectorAll(".btn")


    btn.forEach(element => {
        element.onclick=function(e){
            e.preventDefault();
            let name=this.parentElement.previousElementSibling.innerHTML
            let price=this.parentElement.previousElementSibling.previousElementSibling.innerHTML
            let img=this.parentElement.parentElement.previousElementSibling.src
            let id=this.parentElement.parentElement.parentElement.id;
            
            let price_slice=-1
            for (let i = 0; i < price.length; i++) {
                if (price[i]===' ') {
                    price_slice=i
                }
            }
            price=price.slice(0,price_slice);

            let pro_list=JSON.parse(localStorage.getItem("wish"))

            let check=pro_list.find(item => item.Name===name)
            if (check===undefined) {
                pro_list.push({
                    Name: name,
                    Price: price,
                    Img: img,
                    Id: id,
                    Count:1
                })
            }
            else{
                check.Count+=1
            }
            localStorage.setItem("wish",JSON.stringify(pro_list))
            wish_count.innerHTML=JSON.parse(localStorage.getItem("wish")).length;
        }
    }); 
}, 2000);
