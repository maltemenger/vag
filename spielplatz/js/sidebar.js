var i = 0;
var j = 0;
var z = 0;

function openNav() {
    if (j === 0) {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        $("#mySidenav").show();
        $("#his").hide();
        $("#map").show();
        $("#ticket").hide();
        j = 1;
    } else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        $("#mySidenav").hide();
        $("#his").hide();
        $("#map").show();
        $("#ticket").hide();
        j = 0;
    }
}

function openHistory() {
    if (i === 0) {
        document.getElementById("history").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        $("#mySidenav").show();
        $("#map").hide();
        $("#ticket").hide();
        $("#his").show();
        i = 1;
    } else {
        document.getElementById("history").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        $("#mySidenav").hide();
        $("#his").hide();
        $("#ticket").hide();
        $("#map").show();
        i = 0;
    }
}

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

var BASE_URL = "http://localhost:8000/";

var routingRequestSubmitHandler = function(e) {
  e.preventDefault();
  $.ajax(
    {
      url: BASE_URL + "routing/",
      data: {
        from_st: $("#routing-form input[name='from_st']").value,
        to_st:$("#routing-form input[name='to_st']").value,
      },
      dataType: "json"
    }
  ).success(function(data, textStatus) {
    console.log(textStatus);
  });
}
