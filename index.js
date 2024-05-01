function showMenu(){
    const menu = document.querySelector(".menulinks");
    const icon = document.querySelector(".responsiveicon");
    console.log(menu);
    console.log(icon);
    menu.classList.toggle("show");
    icon.classList.toggle("show");
}