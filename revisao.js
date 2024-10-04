
function mudarCor(cor){
    document.body.style.backgroundColor = cor
}

function mudarAleatorio () {
     
    let corUm = Math.floor(Math.random() * 255)
    let corDois = Math.floor(Math.random() * 255)
    let corTres = Math.floor(Math.random() * 255)
    
    document.body.style.backgroundColor = `rgb( ${corUm} , ${corDois} , ${corTres})`

    // document.body.style.backgroundColor = `rgb( ${red} , ${gren} , ${blue})`

}

function inputColor(){
   let test = document.querySelector('.hex').value

   mudarCor(test)
}

function mandarcolor(coor) {
    let cor = document.querySelector('.Coloor')

    mudarCor(coor)

}

function fundFind(image) {
// Criando ferramentas passo a passo para leitura de arquivo e trocando o background //
 const read = new FileReader();

    read.onload = (event) => {
      const leitura = event.target.result

      document.body.style.backgroundImage = `url(${leitura})`
    }
    read.readAsDataURL(image)
}







