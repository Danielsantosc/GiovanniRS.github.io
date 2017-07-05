$(window).on("scroll", function () {
    var top = $(window).scrollTop();

    if (top > 0) {
        $("#logo").css({ "width": "35px" });
        $("#menu").css({ "box-shadow": "0.5px 2px 4px rgba(0, 0, 0, 0.3), 0.5px 4px 8px rgba(0, 0, 0, 0.1)" });
    } else {
        $("#logo").css({ "width": "100px" });
        $("#menu").css({ "box-shadow": "none" });
    }
});

$(".hambg").on("click", function () {
    $("#menuh").css({ "opacity": "1", "margin-right": "0" });
});

$(".sair").on("click", function () {
    $("#menuh").css({ "opacity": "0", "margin-right": "-320px" });
});

var slideAtual = 1;

function prox() {
  switch (slideAtual) {
    case 1:
      $("#slide div:nth-child(1)").hide();
      $("#slide div:nth-child(2)").show();
      slideAtual = 2;
    break;
    case 2:
      $("#slide div:nth-child(2)").hide();
      $("#slide div:nth-child(3)").show();
      slideAtual = 3;
    break;
    case 3:
      $("#slide div:nth-child(3)").hide();
      $("#slide div:nth-child(1)").show();
      slideAtual = 1;
    break;
  }
}

function volt() {
  switch (slideAtual) {
    case 1:
      $("#slide div:nth-child(1)").hide();
      $("#slide div:nth-child(3)").show();
      slideAtual = 3;
    break;
    case 2:
      $("#slide div:nth-child(2)").hide();
      $("#slide div:nth-child(1)").show();
      slideAtual = 1;
    break;
    case 3:
      $("#slide div:nth-child(3)").hide();
      $("#slide div:nth-child(2)").show();
      slideAtual = 2;
    break;
  }
}