function getJS(fileName) {
  return $.getJSON(fileName, function(data) { 
    var output = '<div><h2>' + data.announcements.header + '</h2><ul>';
    $.each(data.announcements.content, function(i, item) {
      output += '<li class="title">' + item.title + '</li>';
      output += '<li class="date">' + item.date + '</li>';
      output += '<li class="text">' + item.text + '</li></div>';
    });
    output += '</ul>';
    self.focus();
    $('#announcements').html(output);

    var output2 = '<div><h2>' + data.specialOffers.header + '</h2><ul>';
    $.each(data.specialOffers.content, function(i, item) {
      output2 += '<li class="title">' + item.title + '</li>';
      output2 += '<li class="date">' + item.date + '</li>';
      output2 += '<li class="text">' + item.text + '</li></div>';
    });
    output2 += '</ul>';
    self.focus();
    $('#specialOffers').html(output2);

    var output3 = '<div><h2>' + data.upcomingEvents.header + '</h2><ul>';
    $.each(data.upcomingEvents.content, function(i, item) {
      output3 += '<li class="title">' + item.title + '</li>';
      output3 += '<li class="date">' + item.date + '</li>';
      output3 += '<li class="text">' + item.text + '</li></div>';
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
      output += '<li';
      //if menuName matches the page
      var page = document.getElementsByTagName("body")[0].title;
      if(item.menuName == page) {
        output += '" class="bold">' + item.menuName;
      } else {
        if(page == "Home") {
          output += '><a href="' + item.menuURL + '">' + item.menuName + '</a>';
        } else {
          output += '><a href="../' + item.menuURL + '">' + item.menuName + '</a>';
        }
      }
      output += '</li>';
    });
    output += '</ul>';
    self.focus();
    $('#menuBar').html(output);
  })
}

$(document).ready(function() {
  var page = document.getElementsByTagName("body")[0].title;
  var indexJson = "";
  var menuJson = "";
  if(page!="Home") {
    indexJson += ".";
    menuJson += ".";
  }
  indexJson += "./Resources/indexJson.js";
  menuJson += "./Resources/menuJson.js";
  
  $.when(
    getJS(indexJson),
    getMenuBar(menuJson)
  ).then(function(indexJ, menuJ) {

  }, function() {
      alert("There was a problem");
    }
  );

});