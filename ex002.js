function verificar (){
  var data = new Date ()
  var ano = data.getFullYear()
  var fAno = document.getElementById("txtano")
  var res = document.getElementById('res')
  if (fAno.value.length == 0 || Number(fAno.value) > ano || Number(fAno.value < 1900)) {
    window.alert("[ERRO] Verifique os dados e tente novamente!!")
 
  } else {
     var fsex = document.getElementsByName("radsex")
     var idade = ano - Number(fAno.value)
     //res.innerHTML= `Idade Calculada: ${idade}` 
     var genero= ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
     img.style.borderRadius = '100%'
     img.style.widthv = '250px'
     img.style.height = '250px'
     img.style.textAlign = 'center'
     if (fsex[0].checked) {
         genero = 'Homem'
         if (idade >=0 && idade < 10) {
             img.setAttribute('src' , 'imagens/homem-criança.jpg')
         } else if (idade < 21) {
            img.setAttribute('src' , 'imagens/homem-jovem.jpeg')

         } else if (idade < 50) {
            img.setAttribute('src' , 'imagens/homem-adulto.jpeg')

         } else  {
            img.setAttribute('src' , 'imagens/homem-idoso.jpeg')

         }
     } else if (fsex[1].checked) {
         genero = "Mulher"
         if (idade >=0 && idade < 10) {
            img.setAttribute('src' , 'imagens/mulher-criança.jpeg')

        } else if (idade < 21) {
            img.setAttribute('src' , 'imagens/mulher-jovem.jpeg')

        } else if (idade < 50) {
            img.setAttribute('src' , 'imagens/mulher-adulta.jpeg')

        } else  {
            img.setAttribute('src' , 'imagens/mulher-idosa.jpeg')

        }
     }
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos: <strong> ${genero} </strong> com ${idade} anos <br>` 
     res.appendChild(img)
  }
       
}
