
// giving menu button class active to give it style when pressed 
let menuBtns = document.querySelectorAll(".menu-btn")

menuBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        menuBtns.forEach(b => b.classList.remove("active"));
        
        btn.classList.add("active");
    });
});

//giving users photo style like they stack on each other
let usersImgs = document.querySelectorAll(".users-imgs img");
let distant = -6;
for (let i = 1; i < usersImgs.length; i++) {
     usersImgs[i].style.cssText=`transform: translatex(${distant}px)`
     distant-=6;
}

// this one if for the price slider we make sure that the min slider doesn't overcome the max slider by keeping some gap between them
// and calculating the arrow position by calculating the precentage of the price and moving the arrow with this precentage
//  then pass it through  the attribute that we declared in the css file
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let firstSlider = document.querySelector(".first-slider");
let secondSlider =document.querySelector(".second-slider")
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 100; 
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  let percent = (sliderOne.value / sliderOne.max) * 100;
  firstSlider.style.setProperty('--percent', percent + "%")
  firstSlider.style.setProperty('--offset', (percent / 100) * 20 + "px")
  firstSlider.setAttribute('data-value', "$" + sliderOne.value);
}

function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
    let percent = (sliderTwo.value / sliderTwo.max) * 100;
  secondSlider.style.setProperty('--percent', percent + "%")
  secondSlider.style.setProperty('--offset', (percent / 100) * 20 + "px")
  secondSlider.setAttribute('data-value', "$" + sliderTwo.value);
}
window.onload = function() {
    slideOne();
    slideTwo();
};

