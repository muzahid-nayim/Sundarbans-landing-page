
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    // if scroll down after 45px (position Y)
    if(window.scrollY>55){
        nav.style.position = 'fixed';
        nav.style.top = 0;
        nav.style.backgroundColor = '#1eff0009'
    
        nav.style.boxShadow = '2px 2px 15px'

    }else{
        nav.style.backgroundColor = 'transparent'
        nav.style.boxShadow = 'none'

    }
});

// ⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫



const bar  = document.getElementById('bar');
const shutter = document.getElementById('shutter');
const up  = document.getElementById('up');
let counter = true;
bar.onclick = ()=>{
    if (counter == true) {
    shutter.style.transform = 'translate(-50%, -43%)';
        counter = false;
    }
    else{
        shutter.style.transform = 'translate(-50%, -180%)';
        counter = true;
    }
}

up.onclick = ()=>{
     shutter.style.transform = 'translate(-50%, -180%)'
    counter = true;
    }



// ⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫

const previous = document.getElementById('prev');
const next = document.getElementById('next');
const header = document.querySelector('header');
const mainPath = "/IMG/";
const imgArr = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg','img9.jpg',];
let number = 0;

next.onclick = ()=>{
bgChange('next');  
}

previous.onclick = ()=>{
    bgChange("prev")
}



const bgChange = (action)=>{
    if(action == "next"){
        number ++;
        if (number > 8) {
         number = 0 ;
        }
    }
    else{
        number --;
        if(number < 0){
            number = 8;
        }
    }

console.log(number);
header.style.backgroundImage = `url('${mainPath+imgArr[number]}')`

}

setInterval(()=>{
    number ++;
    if (number > 8) {
     number = 0 ;
    }

header.style.backgroundImage = `url('${mainPath+imgArr[number]}')`

}, 6000);
