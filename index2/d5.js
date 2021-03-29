function d5(Y, S, h, q, H, I) {
  if (typeof Y === "undefined") {
      Y = 1;
      S = 0;
      h = 0;
      q = 1;
      H = 0;
      I = 0
  }
  this.R = Y;
  this.O = S;
  this.Pb = h;
  this.RH = q;
  this.TR = H;
  this.Un = I
}
d5.prototype.Fu = function () {
  return Math.sqrt(Math.abs(this.R * this.RH - this.O * this.Pb))
}
  ;
d5.prototype.pS = function () {
  var Y = this
      , S = function (h) {
          return Math.abs(h) < 1e-9 ? 0 : h
      };
  Y.R = S(Y.R);
  Y.O = S(Y.O);
  Y.Pb = S(Y.Pb);
  Y.RH = S(Y.RH);
  Y.TR = S(Y.TR);
  Y.Un = S(Y.Un)
}
  ;
d5.prototype.I_ = function (Y) {
  return new aV(Y.x * this.R + Y.y * this.Pb + this.TR, Y.x * this.O + Y.y * this.RH + this.Un)
}
  ;
d5.prototype.translate = function (Y, S) {
  this.TR += Y;
  this.Un += S
}
  ;
d5.prototype.rotate = function (Y) {
  var S = new d5(Math.cos(Y), -Math.sin(Y), Math.sin(Y), Math.cos(Y), 0, 0);
  this.concat(S)
}
  ;
d5.prototype.scale = function (Y, S) {
  var h = new d5(Y, 0, 0, S, 0, 0);
  this.concat(h)
}
  ;
d5.prototype.concat = function (Y) {
  this.jX(new d5(this.R * Y.R + this.O * Y.Pb, this.R * Y.O + this.O * Y.RH, this.Pb * Y.R + this.RH * Y.Pb, this.Pb * Y.O + this.RH * Y.RH, this.TR * Y.R + this.Un * Y.Pb + Y.TR, this.TR * Y.O + this.Un * Y.RH + Y.Un))
}
  ;
d5.prototype.fb = function () {
  var Y = this.R * this.RH - this.O * this.Pb;
  this.jX(new d5(this.RH / Y, -this.O / Y, -this.Pb / Y, this.R / Y, (this.Pb * this.Un - this.RH * this.TR) / Y, (this.O * this.TR - this.R * this.Un) / Y))
}
  ;
d5.prototype.clone = function () {
  return new d5(this.R, this.O, this.Pb, this.RH, this.TR, this.Un)
}
  ;
d5.prototype.jX = function (Y) {
  this.R = Y.R;
  this.O = Y.O;
  this.Pb = Y.Pb;
  this.RH = Y.RH;
  this.TR = Y.TR;
  this.Un = Y.Un
}
  ;