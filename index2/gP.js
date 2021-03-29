function gP(Y, S, h, q) {
  e9.call(this);
  this.j = P.w("button", "fitem" + (S ? " spread" : "") + (q ? " bbtn" : ""));
  this.lT = Y;
  this.Rj = h;
  this.f();
  this.j.addEventListener("click", this.EM.bind(this), !1)
}
gP.prototype = new e9;
gP.prototype.f = function() {
  var Y = this.j
    , S = this.lT
    , h = this.Rj
    , q = gx.get(S);
  if (q.startsWith("<img") || q.startsWith("<svg"))
      Y.innerHTML = q;
  else
      Y.textContent = q;
  if (q.startsWith("<img") || q.startsWith("<svg"))
      Y.setAttribute("style", "padding:2px");
  if (h) {
      Y.setAttribute("title", gx.get(h))
  }
}
;
gP.prototype.aj1 = function(Y) {
  this.j.setAttribute("title", Y)
}
;
gP.prototype.EM = function(Y) {
  this.B(new _("click",!1))
}
;
gP.prototype.Fc = function() {
  P.xv(this.j, "bactive")
}
;
gP.prototype.cQ = function() {
  P.zM(this.j, "bactive")
}
;
gP.prototype.D2 = function(Y, S) {
  if (Y)
      this.lT = Y;
  if (S)
      this.Rj = S;
  this.f()
}
;
gP.prototype.i = function(Y) {
  if (Y)
      this.Fc();
  else
      this.cQ()
}
;
gP.prototype.tQ = function() {
  return this.j.getAttribute("class").indexOf("bactive") != -1
}
;
gP.prototype.u = function() {
  return this.tQ()
}
;