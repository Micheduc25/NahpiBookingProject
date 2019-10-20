let show = false;
function showDashBoard() {

    if (!show) {
        document.getElementById("dashboard").classList.replace("hide", "show");
        show = true;
        document.getElementById("main-section").classList.replace("moveLeft", "moveRight");
    }

    else {
        document.getElementById("dashboard").classList.replace("show", "hide");
        show = false;

        document.getElementById("main-section").classList.replace("moveRight", "moveLeft");
    }
}


function showSuggestions() {
    document.getElementsByClassName("suggestions")[0].classList.toggle("hideSug");
}