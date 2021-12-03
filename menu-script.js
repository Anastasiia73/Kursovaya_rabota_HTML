menu = document.getElementById('menu')
nav = document.getElementById('mobile-menu')
content = document.getElementById('content')
footer = document.getElementById('footer')

function dropMenu(){
    if (menu.src.includes("menu.png")){
        menu.src = "./photos/x.png";
        nav.style.display = "flex";
        content.style.display="none";
        footer.style.display="none";
    } else {
        menu.src = "./photos/menu.png";
        nav.style.display = "none";
        content.style.display="flex";
        footer.style.display="block";
    }
}

window.addEventListener("resize", function (){
    if (window.innerWidth > 750){
        nav.style.removeProperty("display");
        menu.src = "./photos/menu.png";
        content.style.removeProperty("display");
        footer.style.removeProperty("display");
    }
}, true)