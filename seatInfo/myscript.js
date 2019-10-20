window.onload = function () {
    let seats = document.getElementsByClassName("seat");
    for (let i = 3; i < 66; i = i + 5) {
        seats[i].classList.add("space-out");
    }


}


function selectSeat(event) {
    event.target.classList.toggle("selected");
}

