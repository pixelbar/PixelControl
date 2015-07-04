var $ = require('jquery');


// Create the board
var createTable = function(rows, columns) {
  var rootEl = $('<div />');
  for (var i = rows - 1; i >= 0; i--) {
    var row = $('<tr></tr>');

    for (var r = columns - 1; r >= 0; r--) {
      row.append($('<td></td>'));
    };

    rootEl.append(row);
  };
  return rootEl;
}

$('table').html(createTable(15, 8));


// Event listeners
document.oncontextmenu = function() {return false;};

var enabled = false;
$('td').on('mousedown', function(e) {
  enabled = true;
  if(e.button == 2) {
    $(e.currentTarget).removeAttr('style');
    return false;
  }
  return true;
});

$('td').on('mouseup', function(e) { enabled = false; });

$('td').on('mouseover', function(e) {
  if (enabled) {
    $(e.currentTarget).css({background: $('input[type=color]').val()});
  };
});