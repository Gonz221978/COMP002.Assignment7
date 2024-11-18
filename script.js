// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

// Select the balloon element
const balloon = document.getElementById('balloon');

// Initialize the balloon's font size in percentage
let balloonSize = 100; // 100% represents the original size

// Function to handle balloon size adjustment
function adjustBalloonSize(event) {
    if (event.key === 'ArrowUp') {
        balloonSize *= 1.1; // Increase size by 10%
    } else if (event.key === 'ArrowDown') {
        balloonSize *= 0.9; // Decrease size by 10%
    }

    // Check if the balloon has exploded (size > 250%)
    if (balloonSize > 250) {
        balloon.textContent = '💥'; // Replace with explosion emoji
        window.removeEventListener('keydown', adjustBalloonSize); // Remove event listener
    } else {
        balloon.style.fontSize = balloonSize + '%'; // Update balloon size
    }
}

// Add the event listener for keydown events
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault(); // Prevent default scrolling behavior
        adjustBalloonSize(event);
    }
});


// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

// Select all tab links and tab contents
const tabLinks = document.querySelectorAll('#tabbed-layout ul li a');
const tabContents = document.querySelectorAll('#tabbed-contents > div');

// Function to switch tabs
function switchTab(event) {
    event.preventDefault(); // Prevent default link behavior
    const targetId = event.target.id.replace('Link', ''); // Extract the target tab's ID

    // Hide all tab contents and remove active styling from links
    tabContents.forEach(tab => tab.style.display = 'none');
    tabLinks.forEach(link => link.classList.remove('active'));

    // Show the target tab content and mark the link as active
    document.getElementById(targetId).style.display = 'block';
    event.target.classList.add('active');
}

// Set up event listeners for tab links
tabLinks.forEach(link => link.addEventListener('click', switchTab));

// Show the first tab by default
tabLinks[0].classList.add('active'); // Mark first tab as active
tabContents.forEach((tab, index) => {
    tab.style.display = index === 0 ? 'block' : 'none'; // Show only the first tab content
});
