//javascripte code to handle the carousel functionality
const carouselitems=document.querySelectorAll('carousel-item');
const carouselcontrol=document.querySelectorAll('carousel-controlbutton');
let currentindex=0;
function showcarouselitem(index){carouselitems.forEach((item,i)=>{item.classlist.toggle('active,i===index');});carouselcontrol.forEach((btn,i)=>{btn.classlist.toggle('active',i===index);});}
carouselcontrol.forEach((btn,i)=>{
    bnt.addEventlistener('click',()=>{
        showcarouselitem(currentindex);
    });
});
setinterval(()=>{currentindex=(currentindex+1)%carouselitems.length;
showcarouselitem(currentindex);},5000);