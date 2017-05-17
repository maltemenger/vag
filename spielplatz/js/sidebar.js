var i = 0;
var j = 0;
var z = 0;

function openNav() {
    if (j === 0) {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        $("#his").hide();
        $("#map").show();
        $("#ticket").hide();
        j = 1;
    } else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        $("#his").hide();
        $("#map").show();
        $("#ticket").hide();
        j = 0;
    }
}
;

function openHistory() {
    if (i === 0) {
        document.getElementById("history").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        $("#map").hide();
        $("#ticket").hide();
        $("#his").show();
        i = 1;
    } else {
        document.getElementById("history").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        $("#his").hide();
        $("#ticket").hide();
        $("#map").show();
        i = 0;
    }
}
;

function openTicket() {
    if (z === 0) {
        $("#his").hide();
        $("#map").hide();
        $("#ticket").show();
        z = 1;

    } else {
        $("#his").hide();
        $("#map").show();
        $("#ticket").hide();
        z = 0;
    }
}
;