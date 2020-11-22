$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
  $("#enviarCorreo").click(function() {
      alert("El correo fue enviado correctamente...");
      });
  $("h6").dblclick(function(){
      $(this).css("color", "red");
      });
  $(".card-title").click(function() {
      $(".card-text").toggle( "slow", function() {
      });
      });
  })