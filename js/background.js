const img = ["0.webp", "1.webp", "2.webp", "3.webp"];
const randomImage = Math.floor(Math.random() * img.length);
const notepadImage = document.querySelector("#notepad-todos-image");

notepadImage.src = `img/${img[randomImage]}`;
