var enemy = {
  _graphic: 'specie01.png',
  _currentDirection: 'right',
  _position: { x: 10, y: 10 },
  _score: 40,

  moveLeft: function () { this._position.x -= 2; },
  moveRight: function () { this._position.x += 2; },
  advance: function () { this._position.y += 2; },
  shoot: function () { newShot(newPoint(this._position.x, this._position.y + 1), 2);}
};

var friendShip = {
  _graphic: 'ultrapowership.png',
  _position: { x: 1, y: 1 },
  _life: 14,

  moveLeft: function () { this._position.x -= 2; },
  moveRight: function () { this._position.x += 2; },
  shoot: function () { newShot(newPoint(this._position.x, this._position.y - 1), -2);}
};

function newPoint(x, y) {
  var obj = {};
  obj.x = x;
  obj.y = y;
  return obj;
}

function newShot(position, velocity) {
  var obj = {};
  obj._position = position;
  obj._velocity = velocity;
  obj.advance = newShot.api.advance;
  return obj;
}

newShot.api = {
  advance: function () {
    this._position.y += this._velocity;
  }
};