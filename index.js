const app = "I don't do much."

document.addEventListener('keydown', function(e){
  if (e.which === 37){
    var leftnumbers = dodger.style.left.replace('px','')
    var left = parsInt(leftNumbers, 10)
    doger.style.left = `${left-1}px`
    
  }
  })
