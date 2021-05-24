// display current day in header
$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready(function () {
    // saveBtn onclick listener 
    $(".saveBtn").on("click", function () {

        // set the variables to the user's input
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        console.log(time, text);

        // save the variables in localStorage
        localStorage.setItem(time, text);
    });

    // load any values that are stored in localStorage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
   
    // function to compare the current time to the block time slots and change class accordingly
    function auditHours() {
        // set the currentTime variable to the current time
        var currentTime = moment().hour();

        // set blockTime variable to the hour of the block
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // compare currentTime to blockTime and adjust class/colour
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    };
    
    // audit time blocks to update class/colour
    auditHours();
});