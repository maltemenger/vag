var hist = 0;
var nav = 0;
var tick = 0;
var tar = 0;
var pref = 0;

function openNav() {
    if (nav === 0) {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        $("#mySidenav").show();
        $("#his").hide();
        $("#map").show();
        $("#tarif").hide();
        $("#ticket").hide();
        nav = 1;
    } else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        $("#mySidenav").hide();
        $("#his").hide();
        $("#map").show();
        $("#tarif").hide();
        $("#ticket").hide();
        nav = 0;
    }
};

function setPreferences() {
    if (pref === 0) {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        $("#mySidenav").show();
        $("#his").hide();
        $("#map").hide();
        $("#tarif").hide();
        $("#ticket").hide();
        pref = 1;
    } else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        $("#mySidenav").hide();
        $("#his").hide();
        $("#map").hide();
        $("#tarif").hide();
        $("#ticket").hide();
        pref = 0;
    }
};

function openHistory() {
    if (hist === 0) {
        document.getElementById("history").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        $("#mySidenav").hide();
        $("#map").hide();
        $("#tarif").hide();
        $("#ticket").hide();
        $("#history").show();
        $("#his").show();
        hist = 1;
    } else {
        document.getElementById("history").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        $("#mySidenav").hide();
        $("#history").hide();
        $("#ticket").hide();
        $("#tarif").hide();
        $("#map").show();
        $("#his").hide();
        hist = 0;
    }
};

function openTicket() {
    if (tick === 0) {
        $("#his").hide();
        $("#map").hide();
        $("#ticket").show();
        $("#tarif").hide();
        tick = 1;

    } else {
        $("#his").hide();
        $("#map").show();
        $("#ticket").hide();
        $("#tarif").hide();
        tick = 0;
    }
};

function openTarif() {
    if (tar === 0) {
        document.getElementById("mySidenav").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
        $("#mySidenav").hide();
        $("#his").hide();
        $("#map").hide();
        $("#tarif").show();
        $("#ticket").hide();
        tar = 1;
    } else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        $("#mySidenav").hide();
        $("#his").hide();
        $("#tarif").hide();
        $("#map").show();
        $("#ticket").hide();
        tar = 0;
    }
};



var BASE_URL = "http://localhost:8000/";

var routingRequestSubmitHandler = function (e) {
    e.preventDefault();
    $.ajax(
            {
                url: BASE_URL + "routing/",
                data: {
                    from_st: $("#routing-form input[name='from_st']").value,
                    to_st: $("#routing-form input[name='to_st']").value,
                },
                dataType: "json"
            }
    ).success(function (data, textStatus) {
        console.log(textStatus);
    });
};

