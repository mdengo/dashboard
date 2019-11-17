// muudab "alusta tööd" nuppu
$(document).ready(function() {
    $("#start-job").click(function () {
       if ($(this).hasClass('btn-success')){
           $(this).toggleClass('btn-success btn-danger')
           $(this).text("Lõpeta töö")
       }
       else if ($(this).hasClass('btn-danger')){
          $(this).attr("data-toggle","modal")
          $(this).attr("data-target","#infoModal")
      }
   })
   $("#create-report").click(function () {
      $('#start-job').toggleClass('btn-danger btn-primary')
      $('#start-job').text("Vaata raportit")
      $('#start-job').removeAttr("data-toggle","modal")
      $('#start-job').removeAttr("data-target","#infoModal")
   })
})
