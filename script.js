
function Mudarcor(cor) {

 document.body.style.backgroundImage = "none"
 document.body.style.backgroundColor = cor

}

// Criando uma cor Aleatoria //

function CorAleatoria () {
   document.body.style.backgroundImage = "none"
   let red = Math.floor(Math.random() * 255 )
   let gren = Math.floor(Math.random() * 255)
   let blue = Math.floor(Math.random() * 255)

   document.body.style.backgroundColor = `rgb( ${red} , ${gren} , ${blue})`
}

function InputColor() {
   const input = document.querySelector('.inputacolor').value

   Mudarcor(input)
}

function uploadImage(image) {

   // Para a leitua de imagem 
   const reader = new FileReader()

   
   reader.onload = (event) => {
      const result = event.target.result;
      console.log(event)

      document.body.style.backgroundImage = `url(${result})`
   };

   reader.readAsDataURL(image)
   
}