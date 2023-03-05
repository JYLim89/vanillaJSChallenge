const body = document.querySelector("body")
// const bgColors = ['#f7f8e6', '#e1dbf0', '#c4bfe2', '#9a86b3', '#6c5a73', '#986f95'];
const bgColors = ['#ECF2FF', '#E3DFFD', '#E5D1FA', '#FFF4D2'];

function bgColorSelect() {
    let bgColor = bgColors[Math.floor(Math.random()*bgColors.length)];
    body.style.backgroundColor = bgColor;
}

bgColorSelect()
setInterval(bgColorSelect, 3000);