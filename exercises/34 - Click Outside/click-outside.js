const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick(e) {
    const button = e.currentTarget;
    const card = button.closest('.card');
    console.log(card);
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick))
