const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick() {
    console.log('you clicked the button!')
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick))
