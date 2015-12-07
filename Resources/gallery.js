$(document).ready(function() {
  var dir = "../Resources/Images/";
  var dir2 = window.location.pathname.replace("/gallery.html", "")
  var fileextension = [".png", ".jpg", ".JPG"];

  $.ajax({

    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,



    success: function (data) {
      //List all .png file names in the page

      $(data).find("a:contains(" + (fileextension[0]) + "), a:contains(" + (fileextension[1]) + ")").each(function () { // here comes the rest of the function made by Roy M J
          var filename = this.href.replace(window.location.host, "").replace("http://", "").replace(dir2, "");
          $("#pictures").append("<a class='fancybox' rel='gallery1' href='" + dir + filename + "'>" + "<img src='" + dir + filename + "' alt='' class='gallery-img' /></a>");
      });
    }, error: function(msg) {
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });

  $(".fancybox").fancybox();
});
