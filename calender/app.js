const monthEl=document.querySelector(".date h1");
const dayEl=document.querySelector(".date p");
const days=document.querySelector(".days");

const monthidx= new Date().getMonth();

const lastday= new Date( new Date().getFullYear(),monthidx+1,0).getDate();
const firstday=new Date(new Date().getFullYear(),monthidx,1).getDay()-1 ;

console.log(new Date().getDate());
console.log(lastday);
console.log(firstday);
console.log(new Date(new Date().getFullYear(),monthidx,1).getDay());


const months=["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"]

monthEl.innerHTML=months[monthidx];
dayEl.innerHTML=new Date().toDateString();

let day="";
for(let i=firstday;i>0; i--){
    day +=`<div class="empty"></div>`
}

for( let i=1;i<=lastday;i++){

    if(i===new Date().getDate()){
        day +=`<div class="today">${i}</div>`

    }else{
        day +=`<div>${i}</div>`
    }
    

}
days.innerHTML=day;