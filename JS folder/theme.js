const bgColorArray = ['#F4F7FF', '#FAD0C4', '#E6B2BA', '#504B38'];
let currentIndex = 0;
const themeBtn = document.getElementById('theme-btn')



function toggleBgColor(){

    const themeBtn = document.getElementById('theme-btn')

    currentIndex = (currentIndex + 1) % bgColorArray.length;

    document.body.style.backgroundColor = bgColorArray[currentIndex];
}


themeBtn.addEventListener('click', toggleBgColor);