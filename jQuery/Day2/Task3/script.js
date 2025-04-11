
$(".draggable").one("mousedown", function() {
    $(this).css("cursor", "grabbing")
    $(this).effect("shake",  200)
})

$(".draggable").draggable()

$(".droppable").droppable({
    drop : function(event, ui) {
        $(".draggable").fadeOut(500)
    }
})