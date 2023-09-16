// Function to generate a random color
function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Update the background color and color code
function updateBackgroundColor() {
    const colorBox = document.getElementById("color-box");
    const webpage = document.getElementsByTagName("body")[0];
    const colorCode = document.getElementById("color-code");

    const randomColor = generateRandomColor();
    colorBox.style.backgroundColor = randomColor;
    webpage.style.backgroundColor = randomColor;
    colorCode.value = randomColor;
}

// Copy color code to clipboard
function copyColorCode() {
    const colorCode = document.getElementById("color-code");
    colorCode.select();
    document.execCommand("copy");
    alert("Color code copied to clipboard: " + colorCode.value);
}

// Event listeners
document.getElementById("generate-btn").addEventListener("click", updateBackgroundColor);
document.getElementById("copy-btn").addEventListener("click", copyColorCode);

// Initial color generation
updateBackgroundColor();
