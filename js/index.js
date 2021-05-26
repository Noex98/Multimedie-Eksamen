// Scroll down btn
document.getElementById('intro__arrow').addEventListener('click', () => {
    scrollTo(0, innerHeight - 108)
})

//Video 
const btn = document.getElementById('short__btn');
const shortVid = document.getElementById('shortVidCont'); //Container divs
const fullVid = document.getElementById('fullVidCont'); //Container divs
const video = document.getElementById('fullVid'); // Video tag

btn.addEventListener('click', () => {
    shortVid.style.display = "none";
    fullVid.style.display = "block"
    video.play();
})

//gallery
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const slider = document.getElementById('slider');

nextBtn.addEventListener('click', () => {
    slider.scrollLeft = slider.scrollLeft + slider.offsetWidth * 0.5;
})

prevBtn.addEventListener('click', () => {
    slider.scrollLeft = slider.scrollLeft - slider.offsetWidth * 0.5;
})