document.body.style.overflow = "hidden";
const hiddenElements = document.querySelectorAll(".hidden1");
hiddenElements[0].classList.add("show1");

setTimeout(function(){
    document.querySelector(".welcomepage").classList.add("pagehidden");
    document.querySelector(".page").classList.remove("page");
    document.body.style.overflow = "";
    document.querySelector(".welcomepage").style.display = "none";
}, 4000);


function showMenu(){
    const menu = document.querySelector(".menulinks");
    const icon = document.querySelector(".responsiveicon");
    console.log(menu);
    console.log(icon);
    menu.classList.toggle("show");
    icon.classList.toggle("show");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("nothidden");
        }
        else{
            entry.target.classList.remove("nothidden");
        }
    });
});
const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

