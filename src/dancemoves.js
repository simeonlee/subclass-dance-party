var lineDance = function() {
  var x = 200;
  var y = 200;

  for ( var i = 0; i < dancers.length; i++ ) {
    var dancer = dancers[i];

    // increment x-axis location
    x += 50;

    dancer.setPosition(y + 'px', x + 'px'); // (bottom, left)
  }
};

var synchronize = function() {
  
};