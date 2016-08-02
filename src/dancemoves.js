var lineDance = function() {
  var dancingInLine = false;
  if (dancingInLine) {
    for (var i = 0; i < dancers.length; i++) {
      var dancer = dancers[i];
      dancer.bottom = dancer.previousPosition.bottom;
      dancer.left = dancer.previousPosition.left;
      dancer.setPosition();
    }
  } else {
    var x = 200;
    var y = 200;

    for ( var i = 0; i < dancers.length; i++ ) {
      var dancer = dancers[i];

      // increment x-axis location
      x += 50;

      dancer.setPosition(y + 'px', x + 'px'); // (bottom, left)
    }
  }
  
};

var synchronize = function() {

  // var syncedOnce = false;

  for ( var i = 0; i < dancers.length; i++ ) {
    (function() {
      var dancer = dancers[i];
      var node = dancer.$node;
      var axisY;
      if (dancer.rotY % 180 !== 0) {
        axisY = 90;
      } else {
        axisY = 0;
      }

      // end the recursive step() calls so we can re-synchronize their
      // timeBetween steps
      dancer.breakStep = true;

      // We need setTimeout here so that the step() final setTimeout
      // doesn't interfere with our reset
      setTimeout(function() {

        // positional reset
        node.css({
          '-ms-transform': 'initial',
          '-webkit-transform': 'initial',
          'transform': 'initial',
        });
        // // positional reset
        // node.css({
        //   '-ms-transform': 'rotateY(' + axisY + 'deg)',
        //   '-webkit-transform': 'rotateY(' + axisY + 'deg)',
        //   'transform': 'rotateY(' + axisY + 'deg)',
        // });
        dancer.timeBetweenSteps = 500;

        dancer.breakStep = false;
        dancer.step();


      }, dancer.timeBetweenSteps + 500); // based on old timeBetweenSteps

      // not sure how to proceed here - step() is still calling itself
    })();

    // if (!syncedOnce) {
    //   // rough fix for asynchronicity
    //   syncedOnce = true;
    //   synchronize();
    // }
  }
};

