// const animais = document.getElementById('animais')

// const gridSection = document.getElementsByClassName('grid-section')

// console.log(grid)

// const gridSectionHTML = document.getElementsByClassName("grid-section")

// const img = document.querySelectorAll('img');
// console.log(img)

// const imagem = document.querySelectorAll('img[src^="img/imagem"]')
// console.log(ima)

// const linkInterno = document.querySelectorAll('[href^="#"')


// const paragrafos = document.querySelectorAll('p')

// const imgs = document.querySelectorAll('img')

// imgs.forEach((item) => console.log(item))


// const parGrados = document.querySelectorAll('p')

// parGrador.forEach((item)=> console.log(item.innerText)) 
// const listaAnimais = document.querySelector('.animais-lista')
// const animaisTop = listaAnimais.offsetTop;
// const height = listaAnimais.scrollHeight

// const img = document.querySelector('img')

// function callback(event){
//     console.log(event)
// }

// img.addEventListener('click', callback);

// const imgs = document.querySelector('.animais-lista');


// function callbackLista(event){
//     console.log(event.currentTarget)
//     console.log(event.target)
//     console.log(event.type)
    
// }

// imgs.addEventListener('click', callbackLista);

// const linkExterno = document.querySelector('a[href^="http"]')

// function handleLinkExterno(event){
//     event.preventDefault()
//     console.log(event) 

// }

// linkExterno.addEventListener('click', handleLinkExterno);

// const h1 = document.querySelector('h1')

// function handleEvent(event){
//     console.log(event.type, event)
// }


// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)


// window.addEventListener("scroll", handleEvent)
// window.addEventListener("keydown", handleEvent)

// function handleEvent(event){
//     if(event.key === 't'){
//         document.body.classList.toggle('azul')
//     }
    
// }

// window.addEventListener('keydown', handleEvent)


// const imagens = document.querySelectorAll('img')
// function handleImg(event){
//     console.log(event.target.getAttribute('src'))
// }

// imagens.forEach((img) => {
//     img.addEventListener('click', handleImg)
// })


// const elementosSite = document.querySelectorAll('body')
// function handleElement(e){
//     e.remove()
// }

// elementosSite.forEach((body) =>{
//     body.addEventListener('click',handleElement)
// // })


// const h1 = document.querySelector('h1')
// function handleH1(event){
//     if(event.key === 't'){
//         e.outerHTML = '<p> Novo Titulo <p>'
//     }
// }


// h1.addEventListener('keydown',handleH1)

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')

// animais.appendChild(titulo)
// function Carro(marcaAtribuida, precoAtribuido){
//     this.marca = marcaAtribuida;
//     this.preco = precoAtribuido;

// }

// const honda = new Carro('Honda', 3000)
// const fiat = new Carro('Fiat', 4000)

// function Carro2(marcaAtribuida, precoInicial){
//     const taxa = 1.2
//     const precoFinal = precoInicial * taxa;

    
//     this.marca = marcaAtribuida;
//     this.preco = precoFinal;

// }

// const mazda = new Carro2('Mazda', 5000);


// const Dom = {
//     seletor: 'li',
//     element(){
//         return document.querySelector(this.seletor);
        
//     },
//     ativar(){
        
//         this.element().classList.add('ativar')
//     }
// }


// function Dom(seletor)  {
    
//     this.element = function (){
//         return document.querySelector(seletor);
        
//     }
//     this.ativar = function(){
        
//         this.element().classList.add('ativar')
//     }
// }

// const li = new Dom("li")
// const ul = new Dom("ul")

// function Pessoa(nome, idade){
    
//     this.nome = nome;
//     this.idade = idade
//     this.andar = function() {
//         console.log(this.nome + 'andou')
//     }
// }

// const pessoa1 = new Pessoa('Francisco', 19)
// const pessoa2 = new Pessoa('Maria', 18)

// function Dom(seletor){
//     const elementList = document.querySelectorAll(seletor)
//     this.element = elementList
//     this.addClass = function(classe){
//         elementList.forEach((element) => {
//             element.classeList.add('classe')
//         })
//     }
//     this.removeClass = function(classe){
//         elementList.forEach((element) => {
//             element.classeList.remove('classe')
//         })
//     }
// }

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}
Pessoa.prototype.andar = function(){
    return 'pessoa andou'
}
const andre = new Pessoa('Francisco', 19)
console.log(Pessoa.prototype)
