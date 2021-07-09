//add active classes on selected thumbnail
let fruits = document.querySelectorAll(".thumbnail li");
for (let i = 0; i < fruits.length; i++) {
  fruits[i].onclick = () => {
    let c = 0;
    while (c < fruits.length) {
      fruits[c++].className = "check";
    }
    fruits[i].className = "check active";
  };
}

//change fruit image when clicked on thumbnail
function imgSlider(imgSrc) {
  document.querySelector(".fruit").src = imgSrc;
}

//change background color
function changeBgColor(color) {
  document.querySelector(".bg").style.background = color;
}

// mobile navigation menu

let menuToggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
menuToggle.onclick = () => {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};
