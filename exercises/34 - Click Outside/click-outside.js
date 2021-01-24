const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick(e) {
    const button = e.currentTarget;
    const card = button.closest('.card');
    //grab img source
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;

    console.log(desc);
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick))
