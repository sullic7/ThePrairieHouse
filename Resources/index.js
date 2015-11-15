function getJS(fileName) {
  return $.getJSON(fileName, function(data) { 
    var output = '<h2>' + data.announcements.header + '</h2><ul>';
      $.each(data.announcements.content, function(i, item) {
        output += '<li class="title">' + item.title + '</li>';
        output += '<li class="date">' + item.date + '</li>';
        output += '<li class="text">' + item.text + '</li>';
      });
      output += '</ul>';
      self.focus();
      $('#announcements').html(output);

      var output2 = '<h2>' + data.specialOffers.header + '</h2><ul>';
      $.each(data.specialOffers.content, function(i, item) {
        output2 += '<li class="title">' + item.title + '</li>';
        output2 += '<li class="date">' + item.date + '</li>';
        output2 += '<li class="text">' + item.text + '</li>';
      });
      output2 += '</ul>';
      self.focus();
      $('#specialOffers').html(output2);

      var output3 = '<h2>' + data.upcomingEvents.header + '</h2><ul>';
      $.each(data.upcomingEvents.content, function(i, item) {
        output3 += '<li class="title">' + item.title + '</li>';
        output3 += '<li class="date">' + item.date + '</li>';
        output3 += '<li class="text">' + item.text + '</li>';
      });
      output3 += '</ul>';
      self.focus();
      $('#upcomingEvents').html(output3);
  })
}

function getMenuBar(fileName) {
  return $.getJSON(fileName, function(data) {
    var output = '<ul>';
        $.each(data.menuBar, function(i, item) {
          output += '<li>' + item.menuName + '</li>';
        });
        output += '</ul>';
        self.focus();
        $('#menuBar').html(output);
  })
}

$(document).ready(function() {
  $.when(
    getJS("./Resources/indexJson.js"),
    getMenuBar("./Resources/menuJson.js")
  ).then(function(indexJ, menuJ) {

  }, function() {
      alert("There was a problem");
    }
  );
});