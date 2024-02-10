let order=document.querySelectorAll(".order-btn")

order.forEach((e)=>{
    e.addEventListener("click",()=>{
        location.href=e.name
    })
})

let btn=document.querySelectorAll(".carbtn");

btn.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(e.name === "one"){
            document.querySelector(".box1").style.display="block";
            document.querySelector(".box1").style.display="flex";
            document.querySelector(".total").style.display="none";
        }
        else if(e.name === "two"){
            document.querySelector(".box2").style.display="block";
            document.querySelector(".box2").style.display="flex";
            document.querySelector(".total").style.display="none";
        }
        else if(e.name === "three"){
            document.querySelector(".box3").style.display="block";
            document.querySelector(".box3").style.display="flex";
            document.querySelector(".total").style.display="none";
        }
        else if(e.name === "four"){
            document.querySelector(".box4").style.display="block";
            document.querySelector(".box4").style.display="flex";
            document.querySelector(".total").style.display="none";
        }
        else if(e.name === "five"){
            document.querySelector(".box5").style.display="block";
            document.querySelector(".box5").style.display="flex";
            document.querySelector(".total").style.display="none";
        }
        else if(e.name === "six"){
            document.querySelector(".box6").style.display="block";
            document.querySelector(".box6").style.display="flex";
            document.querySelector(".total").style.display="none";
        }
        else if(e.name === "seven"){
            document.querySelector(".box7").style.display="block";
            document.querySelector(".box7").style.display="flex";
            document.querySelector(".total").style.display="none";
        }
        else if(e.name === "eight"){
            document.querySelector(".box8").style.display="block";
            document.querySelector(".box8").style.display="flex";
            document.querySelector(".total").style.display="none";
        }
        else if(e.name === "nine"){
            document.querySelector(".box9").style.display="block";
            document.querySelector(".box9").style.display="flex";
            document.querySelector(".total").style.display="none";
        }
        else{
            alert("Error")
        }
    })
})

let cart=document.querySelector(".cart");

document.querySelector(".cartthing").onclick=()=>{
    cart.classList.toggle('active')
}

document.querySelector(".content .delone").onclick=()=>{
    document.querySelector(".box1").style.display="none";
}
document.querySelector(".content .deltwo").onclick=()=>{
    document.querySelector(".box2").style.display="none";
}
document.querySelector(".content .delthree").onclick=()=>{
    document.querySelector(".box3").style.display="none";
}
document.querySelector(".content .delfour").onclick=()=>{
    document.querySelector(".box4").style.display="none";
}
document.querySelector(".content .delfive").onclick=()=>{
    document.querySelector(".box5").style.display="none";
}
document.querySelector(".content .delsix").onclick=()=>{
    document.querySelector(".box6").style.display="none";
}
document.querySelector(".content .delseven").onclick=()=>{
    document.querySelector(".box7").style.display="none";
}
document.querySelector(".content .deleight").onclick=()=>{
    document.querySelector(".box8").style.display="none";
}
document.querySelector(".content .delnine").onclick=()=>{
    document.querySelector(".box9").style.display="none";
}