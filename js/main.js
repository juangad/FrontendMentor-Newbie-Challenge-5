const btnShare = document.querySelector('.share-btn')
const box = document.querySelector('.box-container')

const hiderClass = 'hidden'

btnShare.addEventListener('click', function() {
  if(box.classList.contains(hiderClass)){
    box.classList.remove(hiderClass)
  }
  else {
    box.classList.add(hiderClass)
    btnShare.blur()
  }  
})