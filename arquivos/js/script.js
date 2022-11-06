function par(numero){
    alert((numero % 2 === 0) ? "par" : "inpar")
}

const card = [
    {url: "pokemon.jpg", titulo: "Pokemon", link: "https://nicolas00000.github.io/pokemon"},
    {url: "uol.jpg", titulo: "Bate papo uol", link: "https://nicolas00000.github.io/bate-papo-UOL/"},
    {url: "quizz.png", titulo: "Buzz Feed", link: "https://nicolas00000.github.io/BuzzQuizz/"},
    {url: "ifood.jpg", titulo: "Ifood", link: "https://ifood-foodbox-.nicmariano10.repl.co/"},
    {url: "mario.jpeg", titulo: "Mario game", link: "https://mario.nicmariano10.repl.co/"},
    {url: "todolist.png", titulo: "Todo-list", link: "https://nicolas00000.github.io/Todoist/"},
    {url: "citacao.jpg", titulo: "Conselhos", link: "https://nicolas00000.github.io/conselhos-memoraveis/#"},
    {url: "calculadora.jpg", titulo: "Calculadora", link: "https://nicolas00000.github.io/calculadora/"},
    {url: "click.png", titulo: "Contador de click", link: "https://nicolas00000.github.io/ContadorDeClick/"},
    {url: "embreve.png", titulo: "invisible", link: ""}
]

renderizarCard()
function renderizarCard(){
    const row = document.querySelector(".row")
    for(let i =  0 ; i < card.length; i++){
        row.innerHTML +=  `
            
        <a href="${card[i].link}" class="card">
            <img class="imagemPj" src="arquivos/img/${card[i].url}" alt="">
                <div class="titulo ${card[i].titulo === "invisible" ? "invisible" : ""}">
                    <h2>${card[i].titulo}</h2>
                </div>
        </a>
        
        ` 
    }
}


const meuslinks = document.querySelectorAll('.listaLinks li a[href^="#"')


function getDistanceFromTheTop(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop){
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    })
}

function scrollToSection(event){
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) + - 50;
    nativeScroll(distanceFromTheTop)
}

meuslinks.forEach((link) =>{
    link.addEventListener("click", scrollTheSection)
})