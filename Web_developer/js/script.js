const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')


button.addEventListener('click', () => {
    popup.style.display = 'block'
})


popup.addEventListener('click', event  => {
    const classNameOfClickedElement = event.target.classList[0]
    const className =['popup-close','popup-wrapper','popup-btn']
    const shouldclosePopup = className. some ( className =>
         className === classNameOfClickedElement )
    if (shouldclosePopup){

        popup.style.display = 'none'
    }
    

} )