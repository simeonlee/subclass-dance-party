// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

//import makeDancer from './dancer.js';

var makeBlinkyDancer = class makeBlinkyDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    var backgroundUrl = 'url("./assets/images/trump/' + Math.floor(Math.random() * 4) + '.png")';
    this.$node.css({
      'background': backgroundUrl,
      'background-size': '100px 100px',
      'background-repeat': 'no-repeat'
    });
  }
  step() {
    super.step();
    // this.$node.toggle();
    var delta = this.random(400, -400);
    var danceSpace = 400;
    this.$node.css({
      'transform': 'scale(' + Math.random() + ', ' + Math.random() + ') ' +
                   'translate(' + Math.random() * danceSpace + 'px, ' + Math.random() * danceSpace + 'px)'
                   // 'rotateX(' + Math.random() * 10 + 'deg) rotateY(' + Math.random() * 10 + 'deg)'
    });
    // // this.$node.translate3d(this.random(400, -400), this.random(400, -400), this.random(400, -400));
    // var delta = this.random(400, -400);
    // var translate3d = 'translate3d(' + delta + ',' + delta + ',' + delta + ')';
    // var perspective = 'perspective(500px)';
    // var format = perspective + ' ' + translate3d;
    // var style3d = {
    //   'transform': 'perspective(500px) translate3d(20px,0px,0px)'
    //   // 'transform': format
    // };
    // this.$node.css(style3d);
  }
  random(x, y) {
    return (Math.random() * (x - y));
  }
};