function esquivar(){
    var botao = document.querySelector("#não");

    botao.style.position = "absolute";
    botao.style.top = mudarposicao(4,95)
    botao.style.left = mudarposicao(4,95)
}
function mudarposicao(min,max){
    let position = Math.floor(Math.random() * (max - min)+min)

    return position + "%"
}
function respostasim(){
    alert("Obrigado amigo")
}

function esquivarmobile(){
    esquivar();
    setTimeout(esquivarmobile,200)
}

if(window.innerWidth <= 450){
esquivarmobile();
}
