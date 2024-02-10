let mainimg1=document.querySelectorAll(".main-img1");
let innerimg1=document.querySelectorAll(".inner-image1 img");

let mainimg2=document.querySelectorAll(".main-img2");
let innerimg2=document.querySelectorAll(".inner-image2 img");

let mainimg3=document.querySelectorAll(".main-img3");
let innerimg3=document.querySelectorAll(".inner-image3 img");

let mainimg4=document.querySelectorAll(".main-img4");
let innerimg4=document.querySelectorAll(".inner-image4 img");

let mainimg5=document.querySelectorAll(".main-img5");
let innerimg5=document.querySelectorAll(".inner-image5 img");

let mainimg6=document.querySelectorAll(".main-img6");
let innerimg6=document.querySelectorAll(".inner-image6 img");

let mainimg7=document.querySelectorAll(".main-img7");
let innerimg7=document.querySelectorAll(".inner-image7 img");

let mainimg8=document.querySelectorAll(".main-img8");
let innerimg8=document.querySelectorAll(".inner-image8 img");

let mainimg9=document.querySelectorAll(".main-img9");
let innerimg9=document.querySelectorAll(".inner-image9 img");

innerimg1.forEach((e)=>{
    e.addEventListener("click",()=>{
        mainimg1.forEach((ele)=>{
            ele.src=e.src;   
        })
    })
})

innerimg2.forEach((e)=>{
    e.addEventListener("click",()=>{
        mainimg2.forEach((ele)=>{
            ele.src=e.src;   
        })
    })
})

innerimg3.forEach((e)=>{
    e.addEventListener("click",()=>{
        mainimg3.forEach((ele)=>{
            ele.src=e.src;   
        })
    })
})

innerimg4.forEach((e)=>{
    e.addEventListener("click",()=>{
        mainimg4.forEach((ele)=>{
            ele.src=e.src;   
        })
    })
})

innerimg5.forEach((e)=>{
    e.addEventListener("click",()=>{
        mainimg5.forEach((ele)=>{
            ele.src=e.src;   
        })
    })
})

innerimg6.forEach((e)=>{
    e.addEventListener("click",()=>{
        mainimg6.forEach((ele)=>{
            ele.src=e.src;   
        })
    })
})

innerimg7.forEach((e)=>{
    e.addEventListener("click",()=>{
        mainimg7.forEach((ele)=>{
            ele.src=e.src;   
        })
    })
})

innerimg8.forEach((e)=>{
    e.addEventListener("click",()=>{
        mainimg8.forEach((ele)=>{
            ele.src=e.src;   
        })
    })
})

innerimg9.forEach((e)=>{
    e.addEventListener("click",()=>{
        mainimg9.forEach((ele)=>{
            ele.src=e.src;   
        })
    })
})

let button=document.querySelectorAll(".btn");
button.forEach((e)=>{
    e.addEventListener("click",()=>{
        location.href=e.value;
    })
})