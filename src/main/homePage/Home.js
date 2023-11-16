const character = document.getElementById('character');
const optionHome = document.getElementById('optionHome');
const optionTracker = document.getElementById('optionTracker');
const optionWidth = character.clientWidth; // Assuming option1 and option2 have the same width
const optionHeight = character.clientHeight; // Assuming option1 and option2 have the same height
const maxLeft = window.innerWidth - character.clientWidth - optionWidth; // Calculate the maximum left position dynamically
const maxTop = window.innerHeight - character.clientHeight - optionHeight; // Calculate the maximum top position dynamically

document.addEventListener('keydown', function(event) {
    const characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

    // Check for left arrow key press
    if (event.key === 'ArrowLeft' && characterLeft > 0) {
        character.style.left = (characterLeft - 50) + 'px';
    }

    // Check for right arrow key press
    if (event.key === 'ArrowRight' && characterLeft < maxLeft) {
        character.style.left = (characterLeft + 50) + 'px';
    }

    // Check for up arrow key press
    if (event.key === 'ArrowUp' && characterTop > 0) {
        character.style.top = (characterTop - 50) + 'px';
    }

    // Check for down arrow key press
    if (event.key === 'ArrowDown' && characterTop < maxTop) {
        character.style.top = (characterTop + 50) + 'px';
    }

    // Check for enter key press and make popup if the character overlaps with options
    if (event.key === 'Enter') {
        const characterRect = character.getBoundingClientRect();
        const optionHomeRect = optionHome.getBoundingClientRect();
        const optionTrackerRect = optionTracker.getBoundingClientRect();

        if (isOverlap(characterRect, optionHomeRect)) {
            alert('You selected Home');
        } else if (isOverlap(characterRect, optionTrackerRect)) {
            alert('You selected Tracker');
        }
    }

    // Check if the character overlaps with options
    const characterRect = character.getBoundingClientRect();
    const optionHomeRect = optionHome.getBoundingClientRect();
    const optionTrackerRect = optionTracker.getBoundingClientRect();

    if (isOverlap(characterRect, optionHomeRect)) {
        highlightOption(optionHome, optionTracker);
    } else if (isOverlap(characterRect, optionTrackerRect)) {
        highlightOption(optionTracker, optionHome);
    } else {
        resetOptionsColor(optionHome, optionTracker);
    }
});

function isOverlap(rect1, rect2) {
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}

function highlightOption(selectedOption, unselectedOption) {
    selectedOption.style.backgroundColor = 'yellow';
    unselectedOption.style.backgroundColor = '#4CAF50';
}

function resetOptionsColor(option1, option2) {
    option1.style.backgroundColor = '#4CAF50';
    option2.style.backgroundColor = '#4CAF50';
}
