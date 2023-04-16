let cards=document.querySelector('.cards')
let list_count=100;
let input=document.querySelector('.search');
let more=document.querySelector('.show_more')
let select=document.querySelector('#select')
let users;
let filteredUser=[];


function GetData(){
    fetch('https://randomuser.me/api/?results=500')
    .then(response=>response.json())
    .then(data=>{
    users=data.results;
    let x=''
    users.slice(0,list_count).forEach(element => {
        let fullname=element.name.first+' '+element.name.last;
        x+=`
        <div class="col-lg-2">
        <div class="card">
            <div class="text-center"><img src="${element.picture.large}" alt=""></div>
            <div class="card-body">
                <h5>${fullname.length>=15? fullname.slice(0,15)+'...':fullname}</h5>
                <p>${element.dob.age} years old</p>
                <button class="btn btn-primary"><i class="fa-solid fa-user-plus"></i> Follow</button>
            </div>
        </div>
    </div>

        `
    });
    cards.innerHTML=x;
    })
    .catch(err=>console.log(err))
}
function AddNewData() {
    more.onclick=()=>{
        list_count+=20;
        let x=''
        if (input.value==='') {
            if (users.length===list_count) {
                more.style.display="none"
            }
            users.slice(0,list_count).forEach(element => {
                let fullname=element.name.first+' '+element.name.last;
                x+=`
                <div class="col-lg-2">
                <div class="card">
                    <div class="text-center"><img src="${element.picture.large}" alt=""></div>
                    <div class="card-body">
                        <h5>${fullname.length>=15? fullname.slice(0,15)+'...':fullname}</h5>
                        <p>${element.dob.age} years old</p>
                        <button class="btn btn-primary"><i class="fa-solid fa-user-plus"></i> Follow</button>
                    </div>
                </div>
            </div>
            
                `
            });
            cards.innerHTML=x;
        }
        else{
            let filter_users=users.filter(user=>(user.name.first+' '+user.name.last).toLowerCase().includes(input.value.toLowerCase()));
            if (filter_users.length<=list_count) {
                filter_users.forEach(element => {
                    let fullname=element.name.first+' '+element.name.last;
                    x+=`
                    <div class="col-lg-2">
                    <div class="card">
                        <div class="text-center"><img src="${element.picture.large}" alt=""></div>
                        <div class="card-body">
                            <h5>${fullname.length>=15? fullname.slice(0,15)+'...':fullname}</h5>
                            <p>${element.dob.age} years old</p>
                            <button class="btn btn-primary"><i class="fa-solid fa-user-plus"></i> Follow</button>
                        </div>
                    </div>
                </div>
                
                    `
                    more.style.display="none"
                });
            } else {
                filter_users.slice(0,list_count).forEach(element => {
                    let fullname=element.name.first+' '+element.name.last;
                    x+=`
                    <div class="col-lg-2">
                    <div class="card">
                        <div class="text-center"><img src="${element.picture.large}" alt=""></div>
                        <div class="card-body">
                            <h5>${fullname.length>=15? fullname.slice(0,15)+'...':fullname}</h5>
                            <p>${element.dob.age} years old</p>
                            <button class="btn btn-primary"><i class="fa-solid fa-user-plus"></i> Follow</button>
                        </div>
                    </div>
                </div>
                
                    `
                });
            }
            cards.innerHTML=x;
        }
    
    }
}
function Input(){
    input.onkeyup=()=>{
        more.style.display="inline";
        let x=''
        let counter=0;
        let filteredUsers=users.filter(user=>(user.name.first+' '+user.name.last).toLowerCase().includes(input.value.toLowerCase()))
        console.log(filteredUsers)
        if(filteredUsers.length===0){
            cards.innerHTML=`
            <div class="notFound"><h2>Not Found...</h2></div>
            `
            more.style.display="none"
        }
        else if (filteredUsers.length<=100) {
            more.style.display="none"
            filteredUsers.forEach(element => {
                let fullname=element.name.first+' '+element.name.last;
                x+=`
                <div class="col-lg-2">
                <div class="card">
                    <div class="text-center"><img src="${element.picture.large}" alt=""></div>
                    <div class="card-body">
                        <h5>${fullname.length>=15? fullname.slice(0,15)+'...':fullname}</h5>
                        <p>${element.dob.age} years old</p>
                        <button class="btn btn-primary"><i class="fa-solid fa-user-plus"></i> Follow</button>
                    </div>
                </div>
            </div>
                `

            });
            cards.innerHTML=x;

        }
        else{
            list_count=100;
            filteredUsers.slice(0,list_count).forEach(element => {
                let fullname=element.name.first+' '+element.name.last;
                if (fullname.toLowerCase().includes(input.value.toLowerCase())) {
                    x+=`
                    <div class="col-lg-2">
                    <div class="card">
                        <div class="text-center"><img src="${element.picture.large}" alt=""></div>
                        <div class="card-body">
                            <h5>${fullname.length>=15? fullname.slice(0,15)+'...':fullname}</h5>
                            <p>${element.dob.age} years old</p>
                            <button class="btn btn-primary"><i class="fa-solid fa-user-plus"></i> Follow</button>
                        </div>
                    </div>
                </div>
                    `
                } 
            });
            cards.innerHTML=x;
    
        }


    }
}
function ChangeGender(){
    select.onchange=()=>{
        let x='';
        filteredUser=users.filter(user=>user.gender==select.value);
        if (filteredUser.length==0) {
            cards.innerHTML=`
            <div class="notFound"><h2>Not Found...</h2></div>
            `
            more.style.display="none"
        }
        else if(filteredUser.length<=100){
            filteredUser.forEach(element => {
                let fullname=element.name.first+' '+element.name.last;
                x+=`
                <div class="col-lg-2">
                <div class="card">
                    <div class="text-center"><img src="${element.picture.large}" alt=""></div>
                    <div class="card-body">
                        <h5>${fullname.length>=15? fullname.slice(0,15)+'...':fullname}</h5>
                        <p>${element.dob.age} years old</p>
                        <button class="btn btn-primary"><i class="fa-solid fa-user-plus"></i> Follow</button>
                    </div>
                </div>
            </div>
                `
            });
            cards.innerHTML=x;
        }
        else if(filteredUser.length>100){
            list_count=100;
            console.log("salam");
            filteredUser.slice(0,list_count).forEach(element => {
                    let fullname=element.name.first+' '+element.name.last;
                    x+=`
                    <div class="col-lg-2">
                    <div class="card">
                        <div class="text-center"><img src="${element.picture.large}" alt=""></div>
                        <div class="card-body">
                            <h5>${fullname.length>=15? fullname.slice(0,15)+'...':fullname}</h5>
                            <p>${element.dob.age} years old</p>
                            <button class="btn btn-primary"><i class="fa-solid fa-user-plus"></i> Follow</button>
                        </div>
                    </div>
                </div>
                    `
                });
            cards.innerHTML=x;
        }
        
    }
}



async function Main(){
    await GetData();
    await AddNewData();
    await Input();
    await ChangeGender();
}
Main();

