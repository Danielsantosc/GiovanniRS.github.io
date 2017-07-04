$(function () {
    $("#slides ul").cycle({
        fx: 'fade',
        speed: 2000,
        timeout: 4000,
        prev: '#previous',
        next: '#next',
    })
});

$(window).on("scroll", function () {
    var top = $(window).scrollTop();

    if (top != 0) {
        $("#logo").css({ "width": "35px" });
        $("#menu").css({ "box-shadow": "0.5px 2px 4px rgba(0, 0, 0, 0.3), 0.5px 4px 8px rgba(0, 0, 0, 0.1)" });
    } else {
        $("#logo").css({ "width": "100px" });
        $("#menu").css({ "box-shadow": "none" });
    }
});

$(".hambg").on("click", function () {
    $("#menuh").css({ "opacity": "1", "margin-left": "0" });
});

$(".sair").on("click", function () {
    $("#menuh").css({ "opacity": "0", "margin-left": "-320px" });
});