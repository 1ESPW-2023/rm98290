const divelement = document.getElementById("div-box")

// divelement.addEventListener("click", ()=>{
//     console.error(divelement);
// })

divelement.addEventListener("click", SeuPai);

function mostraelementos() {
    console.log(divelement)
}

function SeuPai() {
    let SeuPai = "Seu Pai e Rosa"
    console.log(SeuPai)
}