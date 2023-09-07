const daysel=document.getElementById('days');
const hourel=document.getElementById('hours');
const minel=document.getElementById('min');
const secel=document.getElementById('sec');

const newYear="1 Jan 2024";

function countdown()
{
    const newYearsDate=new Date(newYear);
    const currentDate=new Date();
    
    const totalseconds= (newYearsDate - currentDate) / 1000;
   
    const days=Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)%24;
    const minutes=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;

    daysel.innerHTML=days;
    hourel.innerHTML=hours;
    minel.innerHTML=minutes;
    secel.innerHTML=formatTime(seconds);
    
}

function formatTime(time)
{
    if(time<10)
    {
        return `0${time}`
    }
    else{
        return time;
    }
}

countdown();
setInterval(countdown,1000);
