function getHouseJS(fileName) {
  return $.getJSON(fileName, function(data) {
    var output = '<h2>' + data.amenities.header + '</h2>';
     $.each(data.amenities.content, function(i, item) {
      output += '<p>' + item + '</p>';
    });
    self.focus();
    $('#amenities').html(output);
  })
}

$(document).ready(function() {
  $(".fancybox").fancybox();
  var pageJson = "../Resources/theHouseJson.js";
  $.when(getHouseJS(pageJson)
    ).then(function(homeJ) {}, function() {
    alert("There was a problem");
  }
  );
});
