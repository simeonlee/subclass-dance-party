// // Creates and returns a new dancer object that can step
// var makeDancer = function(bottom, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(bottom, left) {
//     // Use css bottom and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       bottom: bottom,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(bottom, left);

//   return dancer;
// };

var dancers = [];

var makeDancer = class makeDancer {
  constructor(bottom, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.bottom = bottom;
    this.left = left;
    this.step();
    this.rotX = 0;
    this.rotY = 0;
    this.rotZ = 0;
    this.setPosition();
    this.previousPosition = {
      'bottom': null,
      'left': null
    };

    // push to array for later dance routines / manipulation
    dancers.push(this);
  }
  step() {
    var delta = this.random(400, -400);
    var danceSpace = 400;

    this.rotX += 90;
    this.rotY += 90;
    this.rotZ += 90;
    var transitionTime = Math.floor((this.timeBetweenSteps / 1000) * 100) / 100;
    var transitionParameter = '' + transitionTime + 's';

    this.$node.css({
      // 'transform': 'scale(' + Math.random() + ', ' + Math.random() + ') ' +
      //              'translate(' + Math.random() * danceSpace + 'px, ' + Math.random() * danceSpace + 'px)'
      'transition-duration': transitionParameter,
      '-ms-transform': 'rotateY(' + this.rotY + 'deg)',
      '-webkit-transform': 'rotateY(' + this.rotY + 'deg)',
      'transform': 'rotateY(' + this.rotY + 'deg)',
    });
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  setPosition(bottom, left) {
    var previousPosition = {
      'bottom': this.bottom,
      'left': this.left
    };
    this.bottom = bottom || this.bottom;
    this.left = left || this.left;
    var styleSettings = {
      'bottom': this.bottom,
      'left': this.left
    };
    this.$node.css(styleSettings);
  }
  random(x, y) {
    return (Math.random() * (x - y));
  }
};

// export default makeDancer;