var trumpDancer = class trumpDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    var backgroundUrl = 'url("./assets/images/trump/' + Math.floor(Math.random() * 4) + '.png")';
    this.$node.css({
      'background': backgroundUrl,
      'background-size': '100px 100px',
      'background-repeat': 'no-repeat'
    });
  }
};