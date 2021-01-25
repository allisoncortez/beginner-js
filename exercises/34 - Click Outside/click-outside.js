const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');



function handleCardButtonClick(e) {
    const button = e.currentTarget;
    const card = button.closest('.card');
    //grab img source
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    //populate the modal with new info
    modalInner.innerHTML = `
        <img width="600" height="600" src="${imgSrc.replace('200','600')}" alt="${name}" />
        <p>${desc}</p>
    `;
    //show updated modal
    modalOuter.classList.add('open')

}

cardButtons.forEach(button =>
    button.addEventListener('click',
    handleCardButtonClick));

function closeModal(){
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
    const isOutside = !event.target.closest('.modal-inner');

    if (isOutside) {
        // modalOuter.classList.remove('open');
        closeModal()
    }
});

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeModal()
    }
})
