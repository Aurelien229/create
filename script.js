/*
*/
/*const art = document.querySelector("article");
const sect = document.createElement("section", "element.ul");

art.appendChild(sect);
let table = ["Aurélien", "Tess", "Damien", "Dju", "Ott"];

table.forEach(function (item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    sect.appendChild(listItem);

    const randomColor = getRandomColor();
    listItem.style.backgroundColor = randomColor;
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let rgb = containerBackgroundColor.match(/\d+/g);
      let brightness = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;

      let textColor = brightness < 0.5 ? 'white' : 'black';

      textElement.style.color = textColor;*/
const art = document.querySelector("article");
const sect = document.createElement("section", "element.ul");
art.appendChild(sect);
let table = ["Aurélien", "Tess", "Damien", "Dju", "Ott"];

table.forEach(function (item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    sect.appendChild(listItem);

    const randomColor = getRandomColor();
    listItem.style.backgroundColor = randomColor;

    let rgb = hexToRgb(randomColor);
    let brightness = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;

    let textColor = brightness < 0.5 ? 'white' : 'black';

    listItem.style.color = textColor;
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Ajouter une fonction pour convertir une couleur hexadécimale en RGB
function hexToRgb(hex) {
    // Enlever le caractère '#' s'il est présent
    hex = hex.replace(/^#/, '');

    // Diviser la chaîne hexadécimale en trois parties (rouge, vert, bleu)
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return { r, g, b };
}

