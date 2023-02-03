const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")

card1.addEventListener("mouseenter", () => {

    let button1 = document.createElement('button')
    button1.textContent = 'COMPRAR AGORA'
    button1.classList.add('comprarAgora')
    card1.appendChild(button1)
})

card1.addEventListener("mouseleave", () => {

    card1.removeChild(card1.lastElementChild)
})

card2.addEventListener("mouseenter", () => {

    let button2 = document.createElement('button')
    button2.textContent = 'COMPRAR AGORA'
    button2.classList.add('comprarAgora')
    card2.appendChild(button2)
})

card2.addEventListener("mouseleave", () => {

    card2.removeChild(card2.lastElementChild)
})

card3.addEventListener("mouseenter", () => {

    let button3 = document.createElement('button')
    button3.textContent = 'COMPRAR AGORA'
    button3.classList.add('comprarAgora')
    card3.appendChild(button3)
})

card3.addEventListener("mouseleave", () => {

    card3.removeChild(card3.lastElementChild)
})

card4.addEventListener("mouseenter", () => {

    let button4 = document.createElement('button')
    button4.textContent = 'COMPRAR AGORA'
    button4.classList.add('comprarAgora')
    card4.appendChild(button4)
})

card4.addEventListener("mouseleave", () => {

    card4.removeChild(card4.lastElementChild)
})

// Modal configuration
// Get the modal
var modal = document.getElementById("modalF");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeButton")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
