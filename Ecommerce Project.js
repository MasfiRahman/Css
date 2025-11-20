const menuIcon = document.getElementById("menu-icon")//Adding js for collapsing Button
const menu = document.getElementById("menu")
menuIcon.addEventListener("click",()=>{
    if(menu.className = "hidden"){
        menu.classList.remove("hidden");
    }else{
        menu.classList.add("hidden");
    }
});