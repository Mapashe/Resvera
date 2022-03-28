$(document).ready(function() {
    setTimeout(function() {
        $("#myModal").modal('show');
    }, 10000); //1 000 = 1 segundo
});


/*Movil */
$(document).ready(function() {
    setTimeout(function() {
        $("#myModalM").modal('show');
    }, 10000); //1 000 = 1 segundo
});


/*Inicio */
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none ";
    }
}

/*Movil */
    // Get the modal
    var modal = document.getElementById("myModalM");
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none ";
        }
    }