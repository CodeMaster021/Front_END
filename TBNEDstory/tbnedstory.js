const increaseFontBtn = document.getElementById("aumentar");
const decreaseFontBtn = document.getElementById("diminuir");
const content = document.getElementById("acess");

let fontsize = 16;

increaseFontBtn.addEventListener('click', () => {
    fontsize+= 2;
    content.style.fontSize = fontsize + 'px';
}); 
decreaseFontBtn.addEventListener('click', () => { 
    if (fontsize > 12) {
        fontsize -=2;
        content.style.fontSize = fontsize + 'px';
    }

}); 