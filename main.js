const bloco = document.getElementById('Ibloco')

const div = document.getElementById('Idiv')

const sim = document.getElementById("Isim")
const desaparecer = document.getElementById("Isucess")
const p =document.getElementById("Ip")

const h = document.getElementById("ih3")
const h2 = document.getElementById("ih4")
const local = document.getElementById("chamada")
const what = document.getElementById("zap")
const body = document.getElementById("Ibody")
const source = document.getElementById("player")
const source2 = document.getElementById("player2")

function pegarNumero (){
  const aleatorio = Math.random() * 200
  const num1 = Math.floor(aleatorio)
  const aleatorio2 = Math.random() * 200
  const num2 = Math.floor(aleatorio2)
  num1.toString()
  num2.toString()
  
  const number = num1 + num2
  return number
}

var count = 0
function contador() {
  count++
}

bloco.addEventListener('click',()=>{
  const pegar = pegarNumero()
  const pegar2 = pegarNumero()
  const top = pegarNumero()
  const bottom = pegarNumero()
  
  div.style.marginLeft = parseInt(pegar) + "px"
  
  div.style.marginRight = parseInt(pegar2) + "px"
  
  div.style.marginBottom = parseInt(bottom) + "px"
  
  div.style.marginTop = parseInt(top) + "px"
 
  contador()
  console.log(count)
  
  if(count == 3){
    bloco.style.width = parseInt(30) + "px"
    bloco.style.height = parseInt(20) + "px"
    bloco.style.fontSize = parseInt(10) + "px"
  }
  
  if (count == 5) {
    sim.style.width = parseInt(100) + "px"
    sim.style.height = parseInt(60) + "px"
    sim.style.fontSize = parseInt(30) + "px"
  }
  
  if (count == 7) {
    h.style.display = "block"
    setTimeout(()=>{
      h.style.opacity = parseInt(1)
    },500)
  }
  
  if(count == 9){
    sim.style.animationName = "brilhar"
    sim.style.animationDuration = parseInt(1) + "s"
    sim.style.animationIterationCount = "infinite"
  }
  
  if(count == 10){
    h2.style.display = "block"
    setTimeout(()=>{
      h2.style.opacity = parseInt(1)
    },500)
    sim.style.width = parseInt(150)+"px"
  }
  
  if(count == 10){
    bloco.style.display = "none"
    
    
  }
})



sim.addEventListener('click',() => {
  desaparecer.style.display = "block"
  desaparecer.style.backgroundImage = "url("+"././IMG.jpg"+")"
  desaparecer.style.backgroundRepeat = "no-repeat"
  desaparecer.style.backgroundSize = "cover"
  p.style.animation = "creditos 100s"
  
  setTimeout(()=>{
    p.style.display = "none"
    zap.style.opacity = parseInt(1)
    local.style.opacity = parseInt(1)
  },70000)
  
  source.pause()
 
})

  




