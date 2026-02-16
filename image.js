let images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg"];
let index = 0;

let slide = document.getElementById("slide");
let dots = document.getElementsByClassName("dot");

function showImage(){
    slide.src = images[index];

    for(let i=0;i<dots.length;i++)
        dots[i].classList.remove("active");

    dots[index].classList.add("active");
}

function next(){
    index = (index + 1) % images.length;
    showImage();
}

function prev(){
    index = (index - 1 + images.length) % images.length;
    showImage();
}

function goTo(i){
    index = i;
    showImage();
}

setInterval(next,3000);

showImage();
