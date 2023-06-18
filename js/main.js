
let slideIndex=1;
function setSlide(input,index){
    slideIndex=index;
    let item=document.querySelector(`#${input}`);
    let slides=[...document.querySelectorAll('.item')];
    slides.forEach((e)=>{e.classList.remove('active')
});
    item.classList.add('active');
}
setInterval(function(){
    slideIndex+=1;
    if(slideIndex==4) slideIndex=1;
    
setSlide(`slide${slideIndex}`,slideIndex)
}
,6000)

let remaningTime=70000;

function setTime(){
    let h= Math.floor(remaningTime/3600);
    let m= Math.floor((remaningTime%3600)/60);
    let s= Math.floor((remaningTime%3600)%60);
    document.getElementById('second').innerHTML=s;
    document.getElementById('minute').innerHTML=m;
    document.getElementById('hour').innerHTML=h;
}

setInterval(()=>{
    remaningTime = remaningTime-1;
    setTime();
}
,1000)