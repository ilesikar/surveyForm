$(function(){
  $("#blanks form").submit(function(event) {
    var nameInput = $("#name").val();
    var dateInput = $("#date").val();
    var startTimeInput = $("#startTime").val();
    var endTimeInput = $("#endTime").val();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".startTime").text(startTimeInput);
    $(".endTime").text(endTimeInput);

    $("#appointmentInfo").show();

    event.preventDefault();
  })
});
