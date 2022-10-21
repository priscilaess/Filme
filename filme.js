// const url = 'https://www.omdbapi.com/?t=top+gun:+maverick&apikey=790af7bc'

let pesquisa = document.getElementById('pesquisa')
// title year time tags sinopsw
let tipo = document.getElementById("tipo")
let tempo = document.getElementById("tempo")
let data = document.getElementById("data")
let bio = document.getElementById("bio")
let tema = document.getElementById("tema")
let img = document.getElementById("img")

function clicou() {
    let busca = document.getElementById("DivBusca");
    if (busca.classList.contains("pesquisa1") == true) {
        busca.classList.remove('pesquisa1')
    }
    else {
        busca.classList.add('pesquisa1');
    }
}

pesquisa.addEventListener('keypress', function (e) {
    if (e.code === "Enter") {
        let digitado = pesquisa.value
        let digitadoFormatado = digitado.replaceAll(' ', '+')
        fetch('https://www.omdbapi.com/?t=' + digitadoFormatado + '&apikey=790af7bc')
            .then(resposta => resposta.json())
            .then(resposta => {
                if (resposta.Response === "True") {
                    tipo.innerText = resposta.Genre
                    tempo.innerText = resposta.Runtime
                    data.innerText = resposta.Year
                    bio.innerText = resposta.Plot
                    tema.innerText = resposta.Title
                    img.src = resposta.Poster
                } else {
                    tipo.innerText = ''
                    tempo.innerText = ''
                    data.innerText = ''
                    bio.innerText = ''
                    tema.innerText = 'Filme não encontrado'
                    img.src = 'caraTriste.svg'
                  
                }
            })
    }
})
