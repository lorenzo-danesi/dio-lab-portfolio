const toogleTheme = document.getElementById("toogleTheme");
const rootHtml = document.documentElement;

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");
    
    if (currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light");
    } else {
        rootHtml.setAttribute("data-theme", "dark");
    }
    
    toogleTheme.classList.toggle("bi-sun");
    toogleTheme.classList.toggle("bi-moon-stars");
}

toogleTheme.addEventListener("click", changeTheme);
