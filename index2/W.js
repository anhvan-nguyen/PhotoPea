function W(Y, S, h, q) {
  if (!Y)
      Y = 0;
  if (!S)
      S = 0;
  if (!h)
      h = 0;
  if (!q)
      q = 0;
  this.x = Y;
  this.y = S;
  this.d = h;
  this.v = q
}
W.prototype.e = function() {
  return this.d * this.v
}
;
W.prototype.clone = function() {
  return new W(this.x,this.y,this.d,this.v)
}
;
W.prototype.contains = function(Y, S) {
  return Y >= this.x && Y <= this.x + this.d && (S >= this.y && S <= this.y + this.v)
}
;
W.prototype.uU = function(Y) {
  return this.contains(Y.x, Y.y)
}
;
W.prototype.HS = function(Y) {
  return this.x <= Y.x && this.y <= Y.y && Y.x + Y.d <= this.x + this.d && Y.y + Y.v <= this.y + this.v
}
;
W.prototype.jX = function(Y) {
  this.x = Y.x;
  this.y = Y.y;
  this.d = Y.d;
  this.v = Y.v
}
;
W.prototype.ma = function(Y) {
  return this.x == Y.x && this.y == Y.y && this.d == Y.d && this.v == Y.v
}
;
W.prototype.vo = function(Y, S) {
  this.x -= Y;
  this.y -= S;
  this.d += 2 * Y;
  this.v += 2 * S
}
;
W.prototype.a6v = function(Y) {
  this.vo(Y.x, Y.y)
}
;
W.prototype.lF = function(Y) {
  var S = Math.max(this.x, Y.x)
    , h = Math.max(this.y, Y.y)
    , q = Math.min(this.x + this.d, Y.x + Y.d)
    , H = Math.min(this.y + this.v, Y.y + Y.v);
  if (q < S || H < h)
      return new W;
  else
      return new W(S,h,q - S,H - h)
}
;
W.prototype.CO = function(Y) {
  if (Y.y + Y.v < this.y || Y.x > this.x + this.d || Y.y > this.y + this.v || Y.x + Y.d < this.x)
      return !1;
  return !0
}
;
W.prototype.fa = function() {
  return this.d <= 0 || this.v <= 0
}
;
W.prototype.offset = function(Y, S) {
  this.x += Y;
  this.y += S
}
;
W.prototype.JC = function(Y) {
  this.offset(Y.x, Y.y)
}
;
W.prototype.anw = function() {
  this.x = this.y = this.d = this.v = 0
}
;
W.prototype.bm = function(Y, S, h, q) {
  this.x = Y;
  this.y = S;
  this.d = h;
  this.v = q
}
;
W.prototype.TG = function(Y) {
  if (this.fa())
      return Y.clone();
  if (Y.fa())
      return this.clone();
  var S = this.clone();
  S.a5V(Y);
  return S
}
;
W.zL = new Float32Array(2);
W.prototype.a5V = function(Y) {
  if (Y.fa())
      return;
  if (this.fa()) {
      this.jX(Y);
      return
  }
  this.t0(Y.x, Y.y);
  this.t0(Y.x + Y.d, Y.y + Y.v)
}
;
W.prototype.t0 = function(Y, S) {
  var h = Math.min(this.x, Y)
    , q = Math.min(this.y, S);
  this.d = Math.max(this.x + this.d, Y) - h;
  this.v = Math.max(this.y + this.v, S) - q;
  this.x = h;
  this.y = q
}
;
W.prototype.a8p = function(Y, S, h, q) {
  if (this.d == 0 && this.v == 0)
      this.a7K(Y, S);
  else
      this.t0(Y, S);
  this.t0(h, q)
}
;
W.prototype.a7K = function(Y, S) {
  this.x = Y;
  this.y = S;
  this.d = this.v = 0
}
;