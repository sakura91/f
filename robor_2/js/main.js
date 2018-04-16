var Robot = function (selector) {
    this.element = document.querySelector(selector);
};

Robot.prototype.getLeft = function(l) {
    this.element.style.left = l + "px";
};
Robot.prototype.getRight = function(r) {
    this.element.style.right = r + "px";
};
Robot.prototype.getTop = function(t) {
    this.element.style.top = t + "px";
};
Robot.prototype.getBottom = function(b) {
    this.element.style.left = b + "px";
};

var myBender = new Robot('.bender');

myBender.getLeft(200);
myBender.getRight();
myBender.getTop(100);
myBender.getBottom();