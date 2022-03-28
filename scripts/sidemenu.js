 //Para la funcionalidad del sidemenu
 function OCNav() {
    var nav = document.getElementById("mySidenav");
    var estado = nav.style.width;

    if (estado <= "0px") {
        openNav();
    } else {
        closeNav();
    }
}

function openNav() {
    setTimeout(() => {
        document.getElementById("Nibba").style.backgroundColor = "rgba(0,0,0,0.5) ";
    }, 300);
    document.getElementById("Nibba").style.width = "100%"
    document.getElementById("Nibba").style.height = "100%"
    document.getElementById("mySidenav").style.width = "20rem";
}

function closeNav() {

    document.getElementById("Nibba").style.backgroundColor = "rgba(0,0,0,0) ";
    setTimeout(() => {
        document.getElementById("Nibba").style.width = "0%"
        document.getElementById("Nibba").style.height = "0%"
    }, 700);
    document.getElementById("mySidenav").style.width = "0px ";
    document.getElementById("mySidenav2").style.width = "0px ";
    document.getElementById("mySidenav3").style.width = "0px ";
    document.getElementById("mySidenav4").style.width = "0px ";
}

function OCNav2() {
    var nav = document.getElementById("mySidenav2");
    var estado = nav.style.width;

    if (estado <= "0px") {
        openNav2();
    } else {
        closeNav2();
    }
}

function openNav2() {
    document.getElementById("mySidenav2").style.width = "20rem ";
}

function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0px ";

}

function OCNav3() {
    var nav = document.getElementById("mySidenav3");
    var estado = nav.style.width;

    if (estado <= "0px") {
        openNav3();
    } else {
        closeNav3();
    }
}

function openNav3() {
    document.getElementById("mySidenav3").style.width = "20rem ";
}

function closeNav3() {
    document.getElementById("mySidenav3").style.width = "0px ";
}

function OCNav4() {
    var nav = document.getElementById("mySidenav4");
    var estado = nav.style.width;

    if (estado <= "0px") {
        openNav4();
    } else {
        closeNav4();
    }
}

function openNav4() {
    document.getElementById("mySidenav4").style.width = "20rem ";
}

function closeNav4() {
    document.getElementById("mySidenav4").style.width = "0px ";
}