$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "./Resources/indexJson.js",
    dataType: "json",
    success: function(responseData, status){
      var output = '<h2>' + responseData.announcements.header + '</h2><ul>';
      $.each(responseData.announcements.content, function(i, item) {
        output += '<li class="title">' + item.title + '</li>';
        output += '<li class="date">' + item.date + '</li>';
        output += '<li class="text">' + item.text + '</li>';
      });
      output += '</ul>';
      self.focus();
      $('#announcements').html(output);

      var output2 = '<h2>' + responseData.specialOffers.header + '</h2><ul>';
      $.each(responseData.specialOffers.content, function(i, item) {
        output2 += '<li class="title">' + item.title + '</li>';
        output2 += '<li class="date">' + item.date + '</li>';
        output2 += '<li class="text">' + item.text + '</li>';
      });
      output2 += '</ul>';
      self.focus();
      $('#specialOffers').html(output2);

      var output3 = '<h2>' + responseData.upcomingEvents.header + '</h2><ul>';
      $.each(responseData.upcomingEvents.content, function(i, item) {
        output3 += '<li class="title">' + item.title + '</li>';
        output3 += '<li class="date">' + item.date + '</li>';
        output3 += '<li class="text">' + item.text + '</li>';
      });
      output3 += '</ul>';
      self.focus();
      $('#upcomingEvents').html(output3);

    }, error: function(msg) {
      // there was a problem
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
});