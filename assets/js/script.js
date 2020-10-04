
// initialize hiden the input window
init(); 

function init() {
    $("input[type='text']").hide();
};

// When plus button is clicked open the input space
$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
    $("input[type='text']").focus();
});

//add new "li" item when "enter" is pressed
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        //$("input[type='text']").hide();  Hide the input box automatic after Enter key.
    };
});

// check off specific item by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//click on the icon to delete item
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

//icon scroll page down
$(document).ready(function() {
    $("a.scrollDown").click(function(e) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
     }, 2500);
 });
});

//when refresh the page start over from the header
window.onload = function() {
    window.setTimeout(
        function() { window.scrollTo(0,0); },
        10
    );
};





