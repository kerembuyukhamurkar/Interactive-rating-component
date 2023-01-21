var point;
//changing colors while hovering on buttons
$(".btn").hover(
    function () {
        $(this).addClass("hoveredbutton");
    },
function () {
        $(this).removeClass("hoveredbutton");
    }
);
//turning clicked button orange and restoreing the point
$(".btn").click(function(){
    $(".btn").removeClass("clickedbutton");
    $(this).addClass("clickedbutton");
     point=this.innerHTML;
})
//submitbutton hover
$(".submitbutton").hover(
    function () {
        $(this).addClass("clickedbuttonsubmitbutton");
    },
function () {
        $(this).removeClass("clickedbuttonsubmitbutton");
    }


)
//hidden state
$(".submitbutton").click( function(){
    $(".main").addClass("hidden");
    $(".rated").removeClass("hidden");
    $(".points").text("You selected "+point+" out of 5" )


 })


