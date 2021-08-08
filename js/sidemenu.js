const sideMenu = document.querySelector(".side-menu");
const sideMenuButton = sideMenu.querySelector(".side-munu_button");


function slideSideMenu() {
    const currentClass = sideMenu.classList.contains("active");
    if(!currentClass){
        sideMenu.classList.add("active");
        sideMenuButton.classList.remove("fa-chevron-right");
		sideMenuButton.classList.add("fa-chevron-left");
    } else{
        sideMenu.classList.remove("active");
        sideMenuButton.classList.remove("fa-chevron-left")
        sideMenuButton.classList.add("fa-chevron-right")
    }
}


sideMenuButton.addEventListener("click", slideSideMenu);
