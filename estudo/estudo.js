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

// function Pessoa(nome, idade){
//     this.nome = nome
//     this.idade = idade
// }
// Pessoa.prototype.andar = function(){
//     return 'pessoa andou'
// }
// const andre = new Pessoa('Francisco', 19)
// console.log(Pessoa.prototype)


const comida = 'Pizza';
const agua = new String('Água')

console.log(comida.length) // 6
console.log(agua.length)// 4

comida.charAt(0) // P
comida.charAt(1) // i

comida.includes(Pizza); //true
comida.includes(Mar); //false

comida.startsWith("Pi") // True
comida.endssWith("za") // True

comida.slice(0, 3) // piz
comida.slice(0, 4) // pizz
comida.slice(-2)  //za

comida.indexOf("P") // 0
comida.indexOf("i") // 1

const listaAlimentos = ['Feijão', 'Batata', 'Vinagra', 'Sal']
listaAlimentos.forEach((preco) => {
    console.log(preco.padStart(10, '.'))
})

listaAlimentos[1]. padStart(10, '.')// ......... Feijão
listaAlimentos[1]. padEnd(10, '.')// Feijão .............

const frase = 'Oi'

frase.repeat(5) // OiOiOiOiOi

const sexo = 'Femenino'

sexo1.toLowerCase() // FEMENINO

const valor = ' R$ 23,00 '
valor.trim(); // '23,00'
valor.trimStart(); // '23,00   '
valor.trimEnd(); // '   23,00'

// Number


Number.isNaN(NaN) // True
Number.isNaN(5) // False
Number.isInteger(20) // true
Number.isInteger(20.2) // false

parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100

const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2) // 1000.46

const preco2 = 1499.49;
preco2.toFixed() // 1499

const preco = 59.49;
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49

Math.floor(Math.random() * 100)
 