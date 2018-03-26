var suits = ["clubs", "spades", "diamonds", "hearts"];
var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];




$(document).ready(function() {
  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      $("ul").append("<li>" +rank+" of "+suit+"</li>");
    })
  })


});
