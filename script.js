const texts = [
    "Hello!",
    "I'm Tanoy Bosh",
    "a Software Engineer"
];

let textIndex = 0;
let charIndex = 0;
let currentText = '';
let typingTimeout;

function typeWriter() {
    if (textIndex === texts.length) return; // Stop if all lines have been typed
    
    currentText = texts[textIndex];
    if (charIndex < currentText.length) {
        document.querySelectorAll('.type')[textIndex].textContent += currentText.charAt(charIndex);
        charIndex++;
        typingTimeout = setTimeout(typeWriter, 100); // Speed of typing (milliseconds)
    } else {
        charIndex = 0;
        textIndex++;
        typingTimeout = setTimeout(typeWriter, 1000); // Delay between lines (milliseconds)
    }
}

typeWriter(); // Start typing when the page is loaded

// JavaScript to dynamically set the current year
document.getElementById("currentYear").textContent = new Date().getFullYear();
