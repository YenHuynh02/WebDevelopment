/**
 * Minimize the menu if the screen is less or equal than 600px
 */
function screenCheck() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}