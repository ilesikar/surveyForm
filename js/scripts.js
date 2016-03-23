$(function(){
  $("#blanks form").submit(function(event) {
    var userInput = $("#user").val();
    var emailInput = $("#email").val();
    var firstnameInput = $("#firstname").val();
    var lastnameInput = $("#lastname").val();
    var passwordInput = $("#password").val();


    $(".user").text(userInput);
    $(".email").text(emailInput);
    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".password").text(passwordInput);

    $("#accountInfo").show();

    // event.preventDefault();
  })
});
