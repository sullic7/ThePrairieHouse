function getJS(fileName) {
  return $.getJSON(fileName, function(data) { 
    var output = '<h2>' + data.announcements.header + '</h2><ul>';
    var maxShow = 2;
    $.each(data.announcements.content, function(i, item) {
      if(i<maxShow){
        output += '<div>';
      } else{
        output += '<div class="hide">';
      }
      output += '<li class="title">' + item.title + '</li>';
      output += '<li class="date">' + item.date + '</li>';
      output += '<li class="text">' + item.text + '</li></div>';
    });
    if(maxShow<data.announcements.content.length){
      output += '<div><li class="readMore"><a onclick="showMore(this,&quot;hide&quot;)">Show Older Announcements</a></li></div>';
    }
    output += '</ul>';
    self.focus();
    $('#announcements').html(output);

    var output2 = '<h2>' + data.specialOffers.header + '</h2><ul>';
    $.each(data.specialOffers.content, function(i, item) {
      output2 += '<div><li class="title">' + item.title + '</li>';
      output2 += '<li class="date">' + item.date + '</li>';
      output2 += '<li class="text">' + item.text + '</li></div>';
    });
    output2 += '</ul>';
    self.focus();
    $('#specialOffers').html(output2);

    var output3 = '<h2>' + data.upcomingEvents.header + '</h2><ul>';
    $.each(data.upcomingEvents.content, function(i, item) {
      output3 += '<div><li class="title">' + item.title + '</li>';
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

// when there are more than two announcements, have option to hide or show more than two
function showMore(thisVal, hiddenClass) {
  var hidden = document.getElementsByClassName(hiddenClass);
  if(thisVal.innerHTML == "Show Older Announcements"){
    $(hidden).show("slow");
    thisVal.innerHTML = "Hide Announcements";
  } else {
    $(hidden).hide("slow");
    thisVal.innerHTML = "Show Older Announcements";
  }
}

$(document).ready(function() {
  var page = document.getElementsByTagName("body")[0].title;
  var menuJson = "../Resources/menuJson.js";

  if(page=="Home") {
    var pageJson = "./Resources/indexJson.js";

    $.when(
      getJS(pageJson),
      getMenuBar("./Resources/menuJson.js")
      ).then(function(indexJ, menuJ) {}, function() {
        alert("There was a problem");
      }
    );
    } else {
      $.when(getMenuBar(menuJson)
        ).then(function(menuJ) {}, function() {
        alert("There was a problem");
      }
      );
    }
});