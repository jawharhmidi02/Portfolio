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
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("nothidden");
        }
        else{
            entry.target.classList.remove("nothidden");
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));