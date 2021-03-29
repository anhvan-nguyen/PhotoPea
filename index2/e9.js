function e9() {
  ex.call(this);
  this.parent = null;
  this.j = null;
  this.rz = 0;
  this.UR = 0
}
e9.prototype = new ex;
e9.prototype.a16 = function(Y) {
  var D = this;
  while (D != null) {
      if (D == Y)
          return !0;
      D = D.parent
  }
  return !1
}
;
e9.prototype.$Z = function() {
  var Y = this.j;
  return Y.offsetWidth + Y.clientLeft
}
;
e9.prototype.PN = function() {
  var Y = this.j;
  return Y.offsetHeight + Y.clientTop
}
;
e9.prototype.update = function(Y) {}
;
e9.prototype.B = function(Y) {
  ex.prototype.B.call(this, Y);
  if (Y.bubbles && this.parent != null)
      this.parent.B(Y)
}
;
e9.prototype.acN = function(Y) {
  Y.stopPropagation();
  Y.preventDefault()
}
;
e9.prototype.f = function() {}
;
e9.prototype.tW = function(Y) {
  P.zM(this.j, "disabled")
}
;
e9.prototype.f4 = function(Y) {
  P.xv(this.j, "disabled")
}
;
e9.prototype.Rz = function(Y) {
  if (Y)
      this.tW();
  else
      this.f4()
}
;