// const divelement = document.getElementById("div-box")

// divelement.addEventListener("click", ()=>{
//     console.error(divelement);
// })

// divelement.addEventListener("click", SeuPai);

// function mostraelementos() {
//     console.log(divelement)
// }

// function SeuPai() {
//     let SeuPai = "Seu Pai e Rosa"
//     console.log(SeuPai)
// }


// convertendo node list em array spread
// const arrayelements = [...document.querySelectorAll("li")];
// arrayelements.map((el,key)=>{
    
//     if (el.textContent == "Item-24") {
//         el.textContent = `${key+1}[ Item-24 ]`;
//     }

// })


// arrayelements.map((el,key)=>{
    
//     if (el.textContent.indexOf("1") != -1) {
//         el.textContent = `[ ${el.textContent}]`;
//     }

// })

let tmp = 0

function mudarimg1() {               
           
    // let nr = Math.round(Math.random()*3);
    const img1 = document.querySelector(".l-d img");
    const img2 = document.querySelector(".l-e img");
    img1.src = "./img/banner-lateral-1.png";
    img2.src = "./img/banner-lateral-3.png";
    
    setTimeout(mudarimg2, 1000);
}

function mudarimg2() {                      
    // let nr = Math.round(Math.random()*3);
    const img1 = document.querySelector(".l-d img");
    const img2 = document.querySelector(".l-e img");

    img1.src = "./img/banner-lateral-2.png";
    img2.src = "./img/banner-lateral-1.png";
    
    setTimeout(mudarimg3, 1000);
}

function mudarimg3() {                      
    // let nr = Math.round(Math.random()*3);
    const img1 = document.querySelector(".l-d img");
    const img2 = document.querySelector(".l-e img");

    img1.src = "./img/banner-lateral-3.png";
    img2.src = "./img/banner-lateral-2.png";
    
    setTimeout(mudarimg1, 1000);
}

// modo para nao adicionar a funcao onclick no html
const btnluzoff = document.querySelector(".conteudo button");

btnluzoff.addEventListener("click", ()=>{
    const luzoff = document.querySelector(".conteudo > div > img");

    if(btnluzoff.textContent == "LIGAR"){
        btnluzoff.textContent = "DESLIGAR";
        luzoff.src= "./img/pic_bulbon.gif";
    }else{
        btnluzoff.textContent = "LIGAR";
        luzoff.src= "./img/pic_bulboff.gif";
    }

});





// function mudacor() {
//     let r = Math.ceil(Math.random()*255);
//     let g = Math.ceil(Math.random()*255);
//     let b = Math.ceil(Math.random()*255);

//     const elemento = [...document.getElementsByClassName("conteudo")];
//     elemento.forEach( (el)=>{
//         el.style.backgroundColor = `rgb(${r},${g},${b})`;
//     } )
//     tmp = setTimeout(mudacor, 500)
// }

