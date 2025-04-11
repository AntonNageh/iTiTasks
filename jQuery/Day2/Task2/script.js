let angle = 0;
$(".btn").on("click", function () {
    angle += 360; // Increment rotation angle
    $(".flowers").css({
        "transform": `rotate(${angle}deg)`,
    })
    .animate({
        marginLeft: "150px",
        width : "+=300px",
        height : "+=300px",
        marginTop: "150px",
    }, 1000);
});