let days=document.getElementById('days');
let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
const countdown = document.getElementById('countdown');
let currentYear=new Date().getFullYear();
const loading = document.getElementById('loading');
let newYear=new Date(`January 01 ${currentYear+1} 00:00:00 `);

function updateDOM(){
    let currentDate=new Date();
    let diff=newYear-currentDate;
    let d=Math.floor(diff/1000/60/60/24);
    let h=Math.floor(diff/1000/60/60)%24;
    let m=Math.floor(diff/1000/60)%60;
    let s=Math.floor(diff/1000)%60;
    days.innerText=d;
    hours.innerText=h<10?'0'+String(h):h;
    minutes.innerText= m<10?'0'+String(m):m;
    seconds.innerText=s<10?'0'+String(s):s;

}
let timeSchedule;
setTimeout(() =>{
    loading.remove();
    countdown.style.display="flex";
},1000);
timeSchedule=setInterval(updateDOM,1000);





























