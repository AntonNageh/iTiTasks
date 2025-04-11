

$(".run").on("click", function() {
    $(".content").animate({
        width: "70%",
        opacity: 0.5,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
    },1500)
})


$(".return").on("click", function() {
    $(".content").animate({
        width:"100px",
        height:"20px",
        opacity: 1,
        borderWidth: "1px",
        fontSize: "1em",
        marginLeft: "0",
        backgroundColor: "red",
    },1000)
})

