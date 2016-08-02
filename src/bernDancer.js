var bernDancer = class bernDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    var backgroundUrl = 'url("./assets/images/bern/' + Math.floor(Math.random() * 4) + '.png")';
    this.$node.css({
      'background': backgroundUrl,
      'background-size': '100px 100px',
      'background-repeat': 'no-repeat'
    });
  }
  step() {
    super.step();
  }
  random(x, y) {
    return (Math.random() * (x - y));
  }
};