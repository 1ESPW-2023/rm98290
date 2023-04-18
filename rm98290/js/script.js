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

function mudacor() {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);

    const elemento = [...document.getElementsByClassName("conteudo")];
    elemento.forEach( (el)=>{
        el.style.backgroundColor = `rgb(${r},${g},${b})`;
    } )
    tmp = setTimeout(mudacor, 5000)
}

function pararTimeOut() {
    clearTimeout(tmp);
}

mudacor()
